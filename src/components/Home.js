import { Link } from "react-router-dom";
import "../css/Home.css";
import arrow from "../images/arrow.png";
import dg from "../images/dg.png";
import About from "./About";
import Footer from "./Footer";
import Form from "./Form";
import Mission from "./Mission";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="home">
      <main className="banner">
        <Sidebar />
        <section className="banner-flex">
          <h1>Make Croatia Great Again.</h1>
          <Link to="/">
            <section className="banner-circle">
              <img src={arrow} alt="arrow" />
              <p>Click here to get involved</p>
            </section>
          </Link>
        </section>
      </main>

      <section className="banner-card">
        <div className="card-text">
          <p>
            Honest . Patriotic . Committed Vote <span> Damir Gojak </span> as
            President 2023
          </p>
        </div>
        <div className="card-image">
          <img src={dg} alt="dg" />
        </div>
      </section>

      <Mission />
      <About />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
