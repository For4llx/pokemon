import React from "react";
import Lucario from "../assets/lucario.png";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPokemons: [],
      loaded: false,
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
    this.setState({ allPokemons, loaded: true }, () =>
      console.log(this.state.allPokemons)
    );
  }
  render() {
    const { loaded, allPokemons } = this.state;
    if (!loaded) {
      return <div>loading...</div>;
    } else {
      return (
        <>
          {allPokemons.map((pokemon) => {
            return (
              <article className="card" key={pokemon.id}>
                <img className="card__img" src={Lucario} alt={pokemon.name} />
                <div className="card__container">
                  <div className="card__data">
                    <section className="card__header">
                      <h1 className="card__name">{pokemon.name}</h1>
                      <p>
                        <em className="card__type card__type--orange">
                          {pokemon.types[0].type}
                        </em>{" "}
                        -{" "}
                        <em className="card__type card__type--gray">
                          {pokemon.types[1].type}
                        </em>
                      </p>
                    </section>
                    <section>
                      <h2 className="card__stats">Stats:</h2>
                      <ul className="card__ul">
                        <li className="card__stats-list card__stats-list--green">
                          {pokemon.stats[0].base_stat} hp
                        </li>
                        <li className="card__stats-list card__stats-list--red">
                          {pokemon.stats[1].base_stat} at
                        </li>
                        <li className="card__stats-list card__stats-list--blue">
                          {pokemon.stats[2].base_stat} def
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
          })}
        </>
      );
    }
  }
}

export default Card;
