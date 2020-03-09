import React, { useEffect } from "react";
import { fetchSinglePokemon } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../components/Pokemon";

const PokemonPage = props => {
  const { pokemon, isFetching, id } = props;
  return (
    <div>
      {isFetching || !pokemon ? (
        <span>Loading...</span>
      ) : (
        <div>
          <Pokemon id={id} pokemon={pokemon} />
        </div>
      )}
    </div>
  );
};

const ConnectedPokemonPage = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSinglePokemon(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const pokemon = useSelector(state => state.pokemon);
  const isFetching = useSelector(state => state.isFetching);

  return <PokemonPage pokemon={pokemon} id={id} isFetching={isFetching} />;
};
export default ConnectedPokemonPage;
