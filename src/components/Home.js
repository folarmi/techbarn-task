// import { Link } from "react-router-dom";
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

        <nav>
          <ul>
            <li>Meet Damir</li>
            <li>Agenda</li>
            <li>Policies</li>
            <li>Events</li>
            <li>Store</li>
          </ul>
        </nav>
        <section className="banner-flex">
          <h1>Make Croatia Great Again.</h1>
          <section className="banner-circle">
            <img src={arrow} alt="arrow" />
            <p>Click here to get involved</p>
          </section>
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
