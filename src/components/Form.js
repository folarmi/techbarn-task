import { useState } from "react";
import axios from "axios";
import "../css/Form.css";
import collaborate from "../images/collaborate.png";
import play from "../images/play.png";
import arrow from "../images/arrow.png";

function Form() {
  const [contactDetails, setContactDetails] = useState({
    sender: "Folasayo",
    name: "",
    email: "",
    phone_number: "",
    company_name: "",
    message: "",
  });
  const postMessage = (contactDetails) => {
    const token = "c7dd2554181c877c85d76430a59ff27c93286414";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
      },
    };
    axios
      .post("https://workwise.ng/api/savemessage", contactDetails, config)
      .then((result) => {
        console.log(result);
      });
    console.log(contactDetails);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

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
          <p id="involved">Get involved</p>
        </div>
        <div className="big-text">
          <p>Be Part of Our Community</p>
        </div>
      </section>

      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postMessage(contactDetails);
          }}
          className="message-form"
        >
          <label htmlFor="fullname"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            value={contactDetails.name}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            value={contactDetails.email}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="phone"></label>
          <input
            type="tel"
            name="phone_number"
            id="number"
            placeholder="Phone number"
            value={contactDetails.phone_number}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="company"></label>
          <input
            type="text"
            name="company_name"
            id="company"
            placeholder="Company name"
            value={contactDetails.company_name}
            onChange={handleChange}
            required
          />

          <label htmlFor="message"></label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            value={contactDetails.message}
            onChange={handleChange}
            required
          ></textarea>

          <section className="agenda">
            <button type="submit" className="mission-agenda">
              send message
            </button>
            {/* <img src={arrow} alt="arrow" /> */}
          </section>
          <div className="orange-about" id="orange-form"></div>
        </form>

        <hr className="ash-border" />

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
          </div>
        </div>

        <section className="agenda" id="email-agenda">
          <p className="mission-agenda" id="subscribe">
            Subscribe to our newsletter
          </p>
          <img src={arrow} alt="arrow" />
        </section>
        <div className="orange-about" id="orange-form-two"></div>
      </main>
    </div>
  );
}

export default Form;

// const BaseInput = (props) => {
//   const {
//     id,
//     name,
//     value,
//     type = "text",
//     handleChange,
//     placeholder,
//     label,
//   } = props;
//   return (
//     <>
//       <label htmlFor={id}>{label}</label>
//       <input
//         type={type}
//         name={name}
//         id={id}
//         placeholder={placeholder}
//         value={value}
//         onChange={handleChange}
//       />
//     </>
//   );
// };
