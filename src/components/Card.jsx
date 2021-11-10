import React from "react";
import Lucario from "../assets/lucario.png";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article className="card">
        <img className="card__img" src={Lucario} alt="Lucario" />
        <div className="card__container">
          <div className="card__data">
            <section className="card__header">
              <h1 className="card__name">Lucario</h1>
              <p>
                <em className="card__type card__type--orange">Fighting</em> -{" "}
                <em className="card__type card__type--gray">Steel</em>
              </p>
            </section>
            <section>
              <h2 className="card__stats">Stats:</h2>
              <ul className="card__ul">
                <li className="card__stats-list card__stats-list--green">
                  70hp
                </li>
                <li className="card__stats-list card__stats-list--red">
                  110at
                </li>
                <li className="card__stats-list card__stats-list--blue">
                  70def
                </li>
              </ul>
            </section>
          </div>
          <div className="card__buttons-container">
            <button className="button button--cyan">Rename</button>
            <button className="button button--red">Delete</button>
          </div>
        </div>
      </article>
    );
  }
}

export default Card;
