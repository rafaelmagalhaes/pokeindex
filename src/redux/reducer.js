import {
  REQUEST_POKEMONS,
  REQUEST_SINGLE_POKEMON,
  RECEIVE_POKEMONS,
  RECEIVE_SINGLE_POKEMON,
  RECEIVE_ERROR
} from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "pokemons",
  storage
};
const pokemons = (
  state = {
    isFetching: false,
    pokemons: [],
    pokemon: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ERROR:
      return Object.assign({}, state, {
        isFetching: false
      });
    case REQUEST_SINGLE_POKEMON:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POKEMONS:
      return Object.assign({}, state, {
        isFetching: false,
        pokemons: appendIds(action.pokemons)
      });
    case RECEIVE_SINGLE_POKEMON:
      return Object.assign({}, state, {
        isFetching: false,
        pokemon: action.pokemon
      });
    default:
      return state;
  }
};

const appendIds = pokemons =>
  pokemons.map((pokemon, index) => ({ ...pokemon, ...{ id: index + 1 } }));
export default persistReducer(persistConfig, pokemons);
