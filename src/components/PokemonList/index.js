import React from "react";
import { Link } from "react-router-dom";
import "./pokemon.css";

const Index = ({ id, name }) => {
  return (
    <div className="pokemon__Cards">
      <div className="card mb-4 mt-3">
        <Link
          to={`/pokemon/${id}`}
          className="pokemon__cards__href card-title text-capitalize"
        >
          <img
            alt=""
            className="card-img-top m-auto"
            src={process.env.PUBLIC_URL + `/sprites/${id}.png`}
          />
        </Link>
        <hr />
        <div className="card-body">
          <Link
            to={`/pokemon/${id}`}
            className="pokemon__cards__href card-title text-capitalize"
          >
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
