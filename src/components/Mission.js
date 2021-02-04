import "../css/Mission.css";
import arrow from "../images/arrow.png";

function Mission() {
  return (
    <div className="mission">
      <section className="mission-flex">
        <div className="small-text">
          <p>My mission</p>
        </div>
        <div className="big-text">
          <p>Development from the grassroots.</p>
        </div>
      </section>

      <p className="mission-text">
        Damir Gojak has proposed an agenda with solutions that will have a
        direct and immediate effect on people’s lives, from the most elite to
        the bottom line of the society. Everyone would be involved.
      </p>

      {/* <section className="agenda">
        <p className="mission-agenda">Read Damir’s agenda</p>
        <img src={arrow} alt="arrow" />
      </section> */}
    </div>
  );
}

export default Mission;
