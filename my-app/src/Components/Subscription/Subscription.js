import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";
import img7 from "../Images/img7.jpg"
export default function Subscription(){
    return(
        <div class="container">
        <header>
            <h1>Subscription Plans</h1>
        </header>

        <div class="pricing-table">
            <div class="plan">
                <h2>Day Basis Plan</h2>
                <div className="Cardx">
                    <div className="cardy">
                        <span id="NoDays">30 Days</span>
                        <span id="price">$4</span>
                        <span id="SubsDes">Enjoy Full 1 month of subscription for full length. At no any additional cost</span>
                        <button>Buy Now</button>
                    </div>
                    <div className="cardy">
                        <span id="NoDays">60 Days</span>
                        <span id="price">$7</span>
                        <span id="SubsDes">Enjoy Full 2 month of subscription for full length. At no any additional cost</span>
                        <button>Buy Now</button>
                    </div>
                    <div className="cardy">
                        <span id="NoDays">90 Days</span>
                        <span id="price">$10</span>
                        <span id="SubsDes">Enjoy Full 3 month of subscription for full length. At no any additional cost</span>
                        <button>Buy Now</button>
                    </div>
                    <div className="cardy">
                        <span id="NoDays">120 Days</span>
                        <span id="price">$18</span>
                        <span id="SubsDes">Enjoy Full 4 month of subscription for full length. At no any additional cost</span>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>

            <div class="plan">
                <h2>Yearly Plan</h2>
                <div className="Cardx">
                <div className="cardy">
                        <span id="NoDays">1/2 year</span>
                        <span id="price">$40</span>
                        <span id="SubsDes">Enjoy Full half year of subscription for full length. At no any additional cost</span>
                        <button>Buy Now</button>
                    </div>
                    <div className="cardy">
                        <span id="NoDays">1 year</span>
                        <span id="price">$60</span>
                        <span id="SubsDes">Enjoy Full 1 year of subscription for full length. At no any additional cost</span>
                        <button>Buy Now</button>
                    </div>
                    <div className="cardy">
                        <span id="NoDays">2 years</span>
                        <span id="price">$90</span>
                        <span id="SubsDes">Enjoy Full 2 year of subscription for full length. At no any additional cost</span>
                        <button>Buy Now</button>
                    </div>
                    <div className="cardy">
                        <span id="NoDays">3 years</span>
                        <span id="price">$100</span>
                        <span id="SubsDes">Enjoy Full 3 year of subscription for full length. At no any additional cost</span>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="Reveiw">
              <h1>1,000 fitness enthusiasts can't be wrong</h1>
              <div className="imagesss">
                <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
                <img src={img4}></img>
                <img src={img5}></img>
                <img src={img6}></img>
                <img src={img7}></img>
                <div id="img8">+1000 more</div>
              </div>
              <div className="reveiwD">
                <p>"We love what we do for living, and we love hearing feedback about it.
                There is nothing better than standing back looking at a completed pool with our customer
                , admiring the end result"</p>
                <span>Mohd Tauheed <br/> @Founder at InnerGrow Health</span>
              </div>
        </div>
    </div>
    )
}