const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const session=require("express-session");
const cookieParser=require("cookie-parser");
const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(
    session({
        secret: "your-secret-key",
        resave: false,
        saveUninitialized: true,
        cookie: {
           secure: false, 
           httpOnly: true,
           maxAge: 3600000, 
        },
    })
)
app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});
const UserDataSchema = new mongoose.Schema({
    email: String,
    phone: String,
    password:String,
    firstName: String,
    lastName: String,
    height: Number,
    weight: Number,
    disease: String,
    allergies: String,
    fitnessGoal: String,
});
const Userobject = mongoose.model("users", UserDataSchema);
app.get('/checkSession',(req,res)=>{
    if(req.session.userId){
        res.status(201).send("Session is valid");
    }
    else{
        res.status(401).send("Session is invalid");
    }
})
app.post("/register", async (req, res) => {
    try {
        const formData = req.body;
        console.log(formData);
        res.status(201).json({ message: "Registration successful", formData });
        try {
            await main(formData);
            req.session.userId = formData._id;
            console.log("User registered successfully");
        } catch (error) {
            console.error("Error during registration:", error);
        }
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(400).json({ message: "Registration failed", error: error.message });
    }
});

async function main(formData) {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/FitnessData");
        const { password } = formData;
        const hashedPassword = await bcrypt.hash(password, 10);
        formData.password = hashedPassword;
        const user = new Userobject(formData);
        await user.save();
    } finally {
        await mongoose.disconnect(); 
    }
}
app.post("/login",async(req,res)=>{
    try{
        const LoginInfo=req.body;
        console.log(LoginInfo);
        try{
           const detail= await verify(LoginInfo);
           if(detail){
            req.session.userId = detail._id;
            console.log(detail);
            res.status(201).json({message:"Login successful"})
           }
           else{
            console.log("Login Failed");
           }
        }
        catch(error){
            console.log("Error during login",error);
            res.status(400).json({ message: "Registration failed", error: error.message });
        }
    }
    catch(error){
         console(error);
    }
})
async function verify({ email, password }) {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/FitnessData");
        console.log(email);
        const details = await Userobject.findOne({ email: email });
        console.log(details);
        if (details) {
            const passMatch = await bcrypt.compare(password, details.password);
            if (passMatch) {
                return details;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error during verification", error);
        throw error;
    } finally {
        await mongoose.disconnect();
    }
}

