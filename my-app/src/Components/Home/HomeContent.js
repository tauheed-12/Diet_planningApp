import img from "../Images/sheikh.jpg";
import logo from "../Images/log.jpg";
import doc from "../Images/Doctor.jpeg";
import { Link } from "react-router-dom";
export default function HomeContent(){
    return(
      <div>
      <div className="HomeContent">
      <div className="Banner">
      <img src={img}></img>
      </div>
      <section class="about-us">
        <div class="container">
            <h2>Welcome to Your Nutrition</h2>
            <p class="mission">Empowering you to make informed choices for a vibrant life.</p>
            <div class="highlights">
                <div class="highlight">
                    <i class="fa-regular fa-address-card"></i>
                    <h3>Our Passion</h3>
                    <p>Guiding you on a journey to optimal health with personalized solutions.</p>
                </div>
                <div class="highlight">
                    <i class="fa-solid fa-user-doctor"></i>
                    <h3>Expertise You Can Trust</h3>
                    <p>Backed by certified nutrition experts offering science-driven and practical guidance.</p>
                </div>
            </div>
            <p class="call-to-action">Embark on a path to a healthier, happier you. Explore our services today. <Link to="/about_us" id="knowmore">Know About Us</Link></p>
        </div>
    </section>
      <div className="Doctors">
         <div className="HeadName"><span>Our Nutritionist</span></div>
         <div className="DoctorsDetail">
            <div className="Doc1">
              <img src={doc} id="Doc_image"></img>
              <span id="Doc_name">Dr. Jane</span>
              <span id="Doc_desg">Nutritionist</span>
              <span id="Doc_exp">30 years Experience</span>
              <span id="Doc_exp">MBBS,MD</span>
            </div>
            <div className="Doc1">
              <img src={doc} id="Doc_image"></img>
              <span id="Doc_name">Dr. Jane</span>
              <span id="Doc_desg">Nutritionist</span>
              <span id="Doc_exp">30 years Experience</span>
              <span id="Doc_exp">MBBS,MD</span>
            </div>
            <div className="Doc1">
              <img src={doc} id="Doc_image"></img>
              <span id="Doc_name">Dr. Jane</span>
              <span id="Doc_desg">Nutritionist</span>
              <span id="Doc_exp">30 years Experience</span>
              <span id="Doc_exp">MBBS,MD</span>
            </div>
            <div className="Doc1">
              <img src={doc} id="Doc_image"></img>
              <span id="Doc_name">Dr. Jane</span>
              <span id="Doc_desg">Nutritionist</span>
              <span id="Doc_exp">30 years Experience</span>
              <span id="Doc_exp">MBBS,MD</span>
            </div>
         </div>
      </div>
      <footer>
        <p>&copy; 2023 Fitness Website. All Rights Reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        <p>Contact us at: info@fitnesswebsite.com</p>
      </footer>
      </div>
      </div>
    )
}