import "../css/About.css";
import phillip from "../images/phillip.png";
import arrow from "../images/whiteArrow.png";

function About() {
  return (
    <div className="about">
      <section className="about-flex">
        <div className="big-text">
          <p id="damir">About Damir Gojak</p>
        </div>
        <img src={phillip} alt="phillip" />
      </section>

      <section className="about-rest">
        <p>
          Damir Gojak is a lifelong public safety and civil rights leader.
          Elected in 2006, he is the first Zagreb man to serve as Attorney
          General of the state of Croatia.
        </p>
      </section>

      <section className="agenda">
        <p className="mission-agenda" id="orange-about">
          Learn more about Damir
        </p>
        <img src={arrow} alt="arrow" />
      </section>
      <div className="orange-about"></div>
    </div>
  );
}

export default About;
