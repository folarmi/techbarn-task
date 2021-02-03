import "../css/Footer.css";
import bgWhite from "../images/bgWhite.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";

function Footer() {
  return (
    <footer>
      <section className="copyright">
        <img src={bgWhite} alt="bgWhite" />
        <p>
          <span> The Office of Damir Radmjal Gojak</span>, Presidential
          Candidate 2023
        </p>
        <p>©2020 Privacy Policy</p>
      </section>

      <section className="footer-flex">
        <ul>
          <li>Meet Damir</li>
          <li>Agenda</li>
          <li>Policies</li>
          <li>Events</li>
          <li>Store</li>
        </ul>

        <section className="social-media">
          <p>Follow us on social media</p>

          <div className="social-flex">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={twitter} alt="twitter" />
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
