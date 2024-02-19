import React from "react";

function PokemonInfo({ data }) {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <div className="Poke-info-container">
          <div className="Poke-Image">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            />
          </div>
          <h1>{data.name}</h1>
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stats">
            <table>
              <tbody>
                {data.stats.map((poke) => {
                  return (
                    <tr>
                      <td>
                        <h3>{poke.stat.name}</h3>
                      </td>
                      <td>
                        <h3>{poke.base_stat}</h3>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonInfo;
