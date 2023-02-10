import "./App.css";

function App() {
  return (
    <div className="container">
      <div
        className="div-1"
        style={{ backgroundImage: `url(Assets/banner4.webp)` }}
      >
        <img className="kt-logo" src="Assets\kt logo.webp"></img>

        <div className="div-1-content">
          <div className="left-div">
            <p className="div-1-heading">Penetration Testing</p>
            <h1 className="div-1-sub-heading">
              Secure you IT systems with our expert penetrating services
            </h1>
            <p className="div-1-desc">
              Identify and address vulnerabilites before they become a threat
            </p>

            <div className="tiles-div">
              <div className="left-tile">
                <svg className="tiles-svg" height="80" width="80">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#f17a57"
                    stroke-width="10"
                    fill="transparent"
                  />
                </svg>
                <div className="tile-content">
                  <p className="p1">600+</p>
                  <p className="p2">Applications Tested</p>
                </div>
              </div>
              <div className="right-tile">
                <svg className="tiles-svg" height="80" width="80">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#f17a57"
                    stroke-width="10"
                    fill="transparent"
                  />
                </svg>
                <div className="tile-content">
                  <p className="p1">100+</p>
                  <p className="p2">Website Tested</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-div">
            <div className="appointment-form">
              <h3 className="heading-1">
                Enhance your <span>SECURITY</span>
              </h3>
              <input placeholder="Full Name"></input>
              <input placeholder="Business Email"></input>
              <input placeholder="Phone Number"></input>
              <input placeholder="Company Name"></input>
              <input placeholder="Other Compliances Required"></input>
              <button>
                Request <span>FREE</span> Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="div-2">
        <div className="div2-desc">
          <h1 className="head-overview">Overview</h1>
          <p className="orange-line"></p>
          <p className="para-overview">
            <span>A pen test</span> also known as a penetration test is a
            security assessment of an IT systems. where potential vulnerabilites
            are identified by attempteing to exploit them.It can be doing using
            human or automated methods and may include testing servers, web
            apps, wireless networks, and other areas of potential exposure.The{" "}
            <span>NIST SP 800-115 guide</span> is often used to develop
            appropriate security processes and procedure and can be a helpful
            resources for pen testers when assessing organizational
            vulnerabilites
          </p>
        </div>

        <img src="Assets\Overview.webp" className="div-2-overview"></img>
      </div>

      <div className="div-3">
        <div className="top-div">
          <div className="left-div">
            <img src="Assets\Why Kratikal.webp"></img>
          </div>
          <div className="right-div">
            <h1>Why Kratikal?</h1>
            <p className="orange-line"></p>
            <p>
              Kratikal Tech offers manual and automated penetration testing
              services to identify vulnerabilitesin your systems. Our
              manualtesting team uses techniques like social engineering,
              phoshing, and physical security testing for a more in-depth
              evaluation. Our automated testing approach uses software tools to
              simulate an attack, but may not delete all vulnerabilites.
              Together, both methods provide a comprehensive and thorough
              security assessment.
            </p>
          </div>
        </div>
        <div className="bottom-div">
          <div className="left-div">
            <h1>Why Choose us ?</h1>
            <p className="orange-line"></p>
            <ul>
              <li>Creating compliance Policies and IT Security Strategies</li>
              <li>
                Sound record of delivering excellent cyber security solutions
              </li>
              <li>Precise Gap Analysis by our expert Pentesters</li>
              <li>thorough Security assessment</li>
              <li>Safeguard people, process, and technologies</li>
            </ul>
          </div>
          <div className="right-div">
            <img src="Assets\Why Choose us.webp" className="middle-image"></img>
          </div>
        </div>

        <button>Book a call</button>
      </div>

      <div className="div-4">
        <h1>Benefits associated with code Review</h1>
        <p className="orange-line"></p>
        <div className="icons-div">
          <div className="icon-tile">
            <img src="Assets\icon01.webp"></img>
            <p>Cost Saving</p>
          </div>
          <div className="icon-tile">
            <img src="Assets\icon02.webp"></img>
            <p>Improve Code Quality</p>
          </div>
          <div className="icon-tile">
            <img src="Assets\icon03.webp"></img>
            <p>Identify and Fix Vulnerabilites</p>
          </div>
          <div className="icon-tile">
            <img src="Assets\icon04.webp"></img>
            <p>Maintaing Consistency</p>
          </div>
          <div className="icon-tile">
            <img src="Assets\icon05.webp"></img>
            <p>Detection of Errors</p>
          </div>
        </div>
      </div>

      <div className="div-5">
        <div className="left-div">
          <h1>Code Review</h1>
          <p className="orange-line"></p>
          <p>
            Code Review examines source code directcly and reveals flaws that
            were missed during the first dvelopment stage. It is the procedure
            of auditing an application's source code to make sure the necessary
            security measures are present, performing as intended, and having
            been activated appropriately.
          </p>
          <p>
            They are methodical evaluationof the code made to find defects,
            improve the quality of the code, and assist dvelopers in learning
            the source code
          </p>
        </div>
        <div className="right-div">
          <img src="Assets\Code Review.webp"></img>
        </div>
      </div>
      <div className="div-6">
        <div className="heading">
          <p className="orange-line"></p>
          <h1>FAQ's</h1>
          <p className="orange-line"></p>
        </div>

        <div className="description">
          <h3> What are the Benefits of Penetration Testing</h3>
          <div className="sub-content">
            <p>
              With the help of penetrationtesting, you can quickly identify your
              security holes and take steps to close them before a hacker
              usesthem against you. For companies of all sizes , penetration
              testing is very advantageous:
            </p>
            <ul>
              <li>Prevent data breaches</li>
              <li>Follow the best security practices</li>
              <li>Enhance your reputation</li>
              <li>Meet Compliance</li>
            </ul>
          </div>

          <h3>How does a penetrationtest work</h3>
          <h3>What are the factors while performingpen testing</h3>
        </div>
      </div>
      <div className="footer">
        <div className="footer-heading">
          <h1 className="background-text">CONTACT US</h1>
          <div className="sub-heading">
            <h4 className="footer-text-1">CONTACT US</h4>
            <p className="sub-heading-underline">
              <p className="grey-line"></p>
              <p className="pink-line"></p>
              <p className="grey-line"></p>
            </p>
          </div>
        </div>
        <div className="contact-tiles">
          <div className="contact-tile">
            <p className="footer-text-2">UNITED STATES</p>
            <p className="footer-text-3">
              400 W Peachtree St NW Arlanta, GA, 30308, USA
            </p>
          </div>
          <div className="contact-tile">
            <p className="footer-text-4">INDIA</p>
            <p className="footer-text-5">B-70, SEcond floor-67, Noida-201301</p>
          </div>
          <div className="contact-tile">
            <p className="footer-text-6">For Sales:</p>
            <p className="footer-text-7">
              Email: sales@kratikal.companies (+91)9289192210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
