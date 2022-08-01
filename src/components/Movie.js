import React from "react"
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVote = (vote) => {
    if (vote >= 7.5) {
        return "red";
    }
    else if (vote >= 5) {
        return "orange";
    }
    else {
        return "blue";
    }

}
const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <div className="movie-wrap">
            <img src={(poster_path) ? IMG_API + poster_path : "https://images.unsplash.com/photo-1558383745-6274e5c505c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"} alt={title} />
            <div className="movie-infor">
                <h3>{title}</h3>
                <span
                    className={`tag ${setVote(vote_average)}`} >{vote_average}</span>
            </div>
        </div>
        <div className="movie-overview">
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div >
)

export default Movie