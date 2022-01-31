import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import "../styles/movieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <div>
        <Link to={`${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="card__image"
            alt="cardImg"
          />
        </Link>
      </div>
      <div className="card__content">
        <div className="card__title">
          <div className="card__text">
            <strong>{movie.title}</strong>
          </div>
          <div>
            <i style={{ color: "#F7CD2E" }} className="bi bi-star-fill"></i>
            &nbsp;{movie.vote_average}
          </div>
        </div>
        <div style={{ color: "#758283" }}>
          <LinesEllipsis text={movie.overview} maxLine="2" ellipsis="..." />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
