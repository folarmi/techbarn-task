import "../css/About.css";
import phillip from "../images/phillip.png";
function About() {
  return (
    <div className="about">
      <section className="about-flex">
        <div className="big-text">
          <p>About Damir Gojak</p>
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
    </div>
  );
}

export default About;
