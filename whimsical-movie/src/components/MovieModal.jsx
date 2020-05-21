import React, { Component } from "react";
import ReactImageAppear from "react-image-appear";
import StarRatingComponent from "react-star-rating-component";
import { fetchPlot } from "../actions/data";
import "./movie.css";

class MovieModal extends Component {
  state = {
    movieData: {},
    rating: 0,
  };

  componentDidMount() {
    const { imdbID } = this.props.data;
    fetchPlot(imdbID).then((res) => this.setState({ movieData: res }));

    if (localStorage.getItem(imdbID)) {
      this.setState({ rating: localStorage.getItem(imdbID) });
    } else {
      return 0;
    }
  }

  onStarClick(nextValue, prevValue, name) {
    const { imdbID } = this.props.data;
    if (typeof window !== "undefined") {
      localStorage.setItem(imdbID, nextValue);
    }
    this.setState({ rating: nextValue });
  }

  render() {
    const { data: movie } = this.props;
    const { movieData, rating } = this.state;
    console.log(this.state.rating);
    return (
      <div className="movie">
        <div id="movieCol-1">
          <ReactImageAppear
            src={movie.Poster}
            animation="zoomIn"
            animationDuration="1s"
            placeholder
          />
        </div>
        <div id="movieCol-2">
          <h2>Title</h2>
          <p>{movieData.Title}</p>
          <h2>Year</h2>
          <p>{movieData.Year}</p>
          <h2>IMDB Ratings</h2>
          <StarRatingComponent
            name="imdbRating"
            editing={false}
            starCount={10}
            value={parseInt(movieData.imdbRating)}
          />
          <h2>Rate yourself </h2>
          <StarRatingComponent
            name="useRating"
            starCount={10}
            value={parseInt(rating)}
            onStarClick={this.onStarClick.bind(this)}
          />
          <h2>Description: </h2>
          <p>{movieData.Plot}</p>
        </div>
      </div>
    );
  }
}

export default MovieModal;
