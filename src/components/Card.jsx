import React from "react";
import Lucario from "../assets/lucario.png";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPokemons: [],
    };
    this.getAllPokemons = this.getAllPokemons.bind(this);
  }
  componentDidMount() {
    this.getAllPokemons();
  }
  getAllPokemons() {
    let allPokemons = [];
    for (let i = 1; i <= 20; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error("Erreur");
        })
        .then((data) => {
          const pokemon = data;
          allPokemons.push({
            id: pokemon.id,
            name: pokemon.name,
            types: { ...pokemon.types },
            stats: { ...pokemon.stats },
          });
        });
    }
    this.setState({ allPokemons });
  }
  render() {
    return (
      <article className="card">
        <img className="card__img" src={Lucario} alt="Lucario" />
        <div className="card__container">
          <div className="card__data">
            <section className="card__header">
              <h1 className="card__name">qsd</h1>
              <p>
                <em className="card__type card__type--orange"></em> -{" "}
                <em className="card__type card__type--gray"></em>
              </p>
            </section>
            <section>
              <h2 className="card__stats">Stats:</h2>
              <ul className="card__ul">
                <li className="card__stats-list card__stats-list--green">hp</li>
                <li className="card__stats-list card__stats-list--red">at</li>
                <li className="card__stats-list card__stats-list--blue">def</li>
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
