import React from "react";
import Lucario from "../assets/lucario.png";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article>
        <img src={Lucario} alt="Lucario" />
        <div>
          <section>
            <h1>Lucario</h1>
            <p>
              <em>Fighting</em> - <span>Steel</span>
            </p>
            <h2>Stats:</h2>
            <ul>
              <li>70hp</li>
              <li>110at</li>
              <li>70def</li>
            </ul>
          </section>
          <div>
            <button>Rename</button>
            <button>Delete</button>
          </div>
        </div>
      </article>
    );
  }
}

export default Card;
