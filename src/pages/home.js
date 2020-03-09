import React, { useEffect } from "react";
import { fetchPokemnons } from "../redux/actions";
import PokemonList from "../components/PokemonList/";
import { useDispatch, useSelector } from "react-redux";
import { DebounceInput } from "react-debounce-input";

const HomePage = props => {
  const { pokemons, isFetching, handleSearchFunc, search } = props;
  return (
    <div className="App container">
      {isFetching ? (
        <div className="text-center">Loading...</div>
      ) : (
        <section>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <DebounceInput
                  value={search}
                  minLength={3}
                  className="form-control"
                  placeholder="search for pokemon"
                  debounceTimeout={100}
                  onChange={event => handleSearchFunc(event)}
                />
              </div>
            </div>
          </div>
          {pokemons && pokemons.length ? (
            <div className="row pt-3">
              {pokemons.map(pokemon => (
                <div className="col-xl-3 mb-3" key={pokemon.id}>
                  <PokemonList id={pokemon.id} name={pokemon.name} />
                </div>
              ))}
            </div>
          ) : (
            <div className="container">No pokemons found!</div>
          )}
        </section>
      )}
    </div>
  );
};
const ConnectedHomePage = props => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    dispatch(fetchPokemnons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pokemons = useSelector(state => state.pokemons);

  const handleSearchFunc = event => {
    let search_text = event.target.value.toLowerCase();
    setSearch(search_text);
  };
  let filter_pokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search);
  });
  const isFetching = useSelector(state => state.isFetching);

  return (
    <HomePage
      pokemons={filter_pokemons}
      search={search}
      handleSearchFunc={handleSearchFunc}
      isFetching={isFetching}
    />
  );
};
export default ConnectedHomePage;
