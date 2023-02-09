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
        <img src="Assets\Overview.webp" className="div-2-overview"></img>
        <h3 className="head-overview">Overview</h3>
        <p className="para-overview">
          A pen test also known as a penetration test is a security assessment
          of an IT systems. where potential vulnerabilites are identified by
          attempteing to exploit them.It can be doing using human or automated
          methods and may include testing servers, web apps, wireless networks,
          and other areas of potential exposure.The NIST SP 800-115 guide is
          often used to develop appropriate security processes and procedure and
          can be a helpful resources for pen testers when assessing
          organizational vulnerabilites
        </p>
      </div>

      <div className="div-3">
        <img src="Assets\Why Kratikal.webp"></img>
        <h1>Why Kratikal?</h1>
        <p>
          Kratikal Tech offers manual and automated penetration testing services
          to identify vulnerabilitesin your systems. Our manualtesting team uses
          techniques like social engineering, phoshing, and physical security
          testing for a more in-depth evaluation. Our automated testing approach
          uses software tools to simulate an attack, but may not delete all
          vulnerabilites. Together, both methods provide a comprehensive and
          thorough security assessment.
        </p>
        <h1>Why Choose us ?</h1>
        <ul>
          <li>Creating compliance Policies and IT Security Strategies</li>
          <li>Sound record of delivering excellent cyber security solutions</li>
          <li>Precise Gap Analysis by our expert Pentesters</li>
          <li>thorough Security assessment</li>
          <li>Safeguard people, process, and technologies</li>
        </ul>
        <button>Book a call</button>
        <img src="Assets\Why Choose us.webp" className="middle-image"></img>
      </div>

      <div className="div-4">
        <h1>Benefits associated with code Review</h1>
        <img src="Assets\icon01.webp"></img>
        <p>Cost Saving</p>
        <img src="Assets\icon02.webp"></img>
        <p>Improve Code Quality</p>
        <img src="Assets\icon03.webp"></img>
        <p>Identify and Fix Vulnerabilites</p>
        <img src="Assets\icon04.webp"></img>
        <p>Maintaing Consistency</p>
        <img src="Assets\icon05.webp"></img>
        <p>Detection of Errors</p>
      </div>

      <div className="div-5">
        <h1>Code Review</h1>
        <p>
          Code Review examines source code directcly and reveals flaws that were
          missed during the first dvelopment stage. It is the procedure of
          auditing an application's source code to make sure the necessary
          security measures are present, performing as intended, and having been
          activated appropriately.
        </p>
        <p>
          They are methodical evaluationof the code made to find defects,
          improve the quality of the code, and assist dvelopers in learning the
          source code
        </p>
        <img src="Assets\Code Review.webp"></img>
      </div>
      <div className="div-6">
        <h1>FAQ's</h1>
        <h3> What are the Benefits of Penetration Testing</h3>
        <p>
          With the help of penetrationtesting, you can quickly identify your
          security holes and take steps to close them before a hacker usesthem
          against you. For companies of all sizes , penetration testing is very
          advantageous:
        </p>
        <ul>
          <li>Prevent data breaches</li>
          <li>Follow the best security practices</li>
          <li>Enhance your reputation</li>
          <li>Meet Compliance</li>
        </ul>

        <h2>How does a penetrationtest work</h2>
        <h2>What are the factors while performingpen testing</h2>
      </div>
      <div className="footer">
        <p className="footer-text-1">Contact Us</p>
        <p className="footer-text-2">UNITED STATES</p>
        <p className="footer-text-3">
          400 W Peachtree St NW Arlanta, GA, 30308, USA
        </p>
        <p className="footer-text-4">INDIA</p>
        <p className="footer-text-5">B-70, SEcond floor-67, Noida-201301</p>

        <p className="footer-text-6">For Sales:</p>
        <p className="footer-text-7">
          Email: sales@kratikal.companies (+91)9289192210
        </p>
      </div>
    </div>
  );
}

export default App;
