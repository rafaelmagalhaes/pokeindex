export const REQUEST_POKEMONS = "REQUEST_POKEMONS";
export const RECEIVE_POKEMONS = "RECEIVE_POKEMONS";
export const REQUEST_SINGLE_POKEMON = "REQUEST_SINGLE_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

const requestPokemons = () => {
  return {
    type: REQUEST_POKEMONS
  };
};
const receiveError = () => {
  return { type: RECEIVE_ERROR };
};

const receivePokemons = data => {
  return {
    type: RECEIVE_POKEMONS,
    pokemons: data
  };
};

const requestSinglePokemon = () => {
  return {
    type: REQUEST_SINGLE_POKEMON
  };
};

const receiveSinglePokemon = data => {
  return {
    type: RECEIVE_SINGLE_POKEMON,
    pokemon: data
  };
};

export const fetchPokemnons = () => {
  return async dispatch => {
    dispatch(requestPokemons());
    let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      return dispatch(receivePokemons(data));
    } catch (error) {
      console.log(error);
      dispatch(receiveError());
    }
  };
};

export const fetchSinglePokemon = id => {
  return async dispatch => {
    dispatch(requestSinglePokemon());
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      return dispatch(receiveSinglePokemon(data));
    } catch (error) {
      dispatch(receiveError());
      console.log(error);
    }
  };
};
