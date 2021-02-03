import "../css/Form.css";
import collaborate from "../images/collaborate.png";
import play from "../images/play.png";
// import arrow from "../images/arrow.png";

function Form() {
  return (
    <div className="form">
      <div className="collaborate-img">
        <img src={collaborate} alt="collaborate" />
      </div>

      <div className="play">
        <img src={play} alt="play" className="" />
      </div>

      <section className="form-flex">
        <div className="small-text">
          <p>Get involved</p>
        </div>
        <div className="big-text">
          <p>Be Part of Our Community</p>
        </div>
      </section>

      <main>
        <form className="message-form ash-border">
          <label htmlFor="fullname"></label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full name"
          />
          <br />

          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <br />

          <label htmlFor="phone"></label>
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="Phone number"
          />
          <br />

          <label htmlFor="company"></label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company name"
          />

          <label htmlFor="message"></label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>

          {/* <section className="message">
            <p className="send-message">Read Damir’s agenda</p>
            <img src={arrow} alt="arrow" />
          </section> */}
        </form>

        <div className="form-extra">
          <div className="big-text">
            <p>Stay in the Know</p>

            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />

            {/* <section className="message">
              <p className="send-message">Read Damir’s agenda</p>
              <img src={arrow} alt="arrow" />
            </section> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Form;
