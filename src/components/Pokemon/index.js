import React from "react";

const Index = ({ id, pokemon }) => {
  return (
    <div className="row  h-100 justify-content-center align-items-center">
      <div className="col-12">
        {pokemon.sprites && pokemon.sprites.front_default ? (
          <img
            alt=""
            className="img-fluid m-auto d-flex"
            src={pokemon.sprites.front_default}
          />
        ) : (
          ""
        )}
      </div>
      <div className="col-12">
        <div className="mt-5">
          <h2 className="text-capitalize">
            ID: {pokemon.id},{pokemon.name}
          </h2>
          <div className="row">
            <div className="col">
              {pokemon.types && pokemon.types.length ? (
                <div>
                  <span>type:</span>
                  {pokemon.types.map((t, index) => (
                    <span key={index}>
                      {index ? ", " : ""} {t.type.name}
                    </span>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col">
              {pokemon.moves && pokemon.moves.length ? (
                <p>Total Moves:pokemon.moves.length</p>
              ) : (
                0
              )}
            </div>
            <div className="col">Level: {pokemon.base_experience}</div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            {pokemon.abilities && pokemon.abilities.length ? (
              <p>
                Abilities:
                <ul>
                  {pokemon.abilities.map(a => (
                    <li>{a.ability.name}</li>
                  ))}
                </ul>
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="col">
            {pokemon.stats && pokemon.stats.length ? (
              <p>
                Stats:
                <ul>
                  {pokemon.stats.map(s => (
                    <li>
                      {s.base_stat} - {s.stat.name}
                    </li>
                  ))}
                </ul>
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="col">
            {pokemon.forms && pokemon.forms.length ? (
              <p>
                Form:
                <ul>
                  {pokemon.forms.map(form => (
                    <li>{form.name}</li>
                  ))}
                </ul>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
