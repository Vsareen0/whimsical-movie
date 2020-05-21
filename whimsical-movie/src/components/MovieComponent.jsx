import React, { useState } from "react";
import ReactImageAppear from "react-image-appear";
import ReactModal from "react-modal";
import MovieModal from "./MovieModal";

ReactModal.setAppElement("#root");

const MovieComponent = (props) => {
  const { movie = {} } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="movie-card"
        style={styles.movieCard}
        onClick={() => setShowModal(true)}
      >
        <ReactImageAppear
          src={movie.Poster}
          animation="zoomIn"
          animationDuration="1s"
          placeholder
        />
        <p style={styles.p}>{movie.Title}</p>
      </div>

      <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
        <button style={styles.modalBtn} onClick={() => setShowModal(false)}>
          Close Modal
        </button>
        <MovieModal data={movie} />
      </ReactModal>
    </>
  );
};

const styles = {
  movieCard: {
    flex: "1 0 21%",
    backgroundColor: "black",
    margin: "20px",
    textAlign: "center",
    minWidth: "300px",
    minHeight: "300px",
    borderRadius: "10px",
  },
  p: {
    color: "#fff",
    fontSize: "15px",
    fontWeight: "500",
    fontFamily: "sans-serif",
  },
  modalBtn: {
    height: "35px",
  },
};

export default MovieComponent;
