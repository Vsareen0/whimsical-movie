import React, { Component } from "react";
import FormComponent from "./components/FormComponent";
import MovieComponent from "./components/MovieComponent";
import { fetchData, fetchNextData } from "./actions/data";
import InfiniteScroll from "react-infinite-scroll-component";

class App extends Component {
  state = {
    moviesData: [],
    totalResults: 0,
    currentPage: 1,
    values: {
      searchBy: "",
      searchValue: "",
      year: "",
      type: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { values } = this.state;

    fetchData(values).then((res) => {
      this.setState({ moviesData: [] });
      var newMoviesData = this.state.moviesData.concat(res.Search);
      this.setState({
        moviesData: newMoviesData,
        totalResults: res.totalResults,
      });
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      values: { ...prevState.values, [name]: value },
    }));
  };

  fetchMoreData = () => {
    const { values, currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
    fetchNextData(values, currentPage).then((res) =>
      this.setState({ moviesData: this.state.moviesData.concat(res.Search) })
    );
  };

  render() {
    return (
      <>
        <FormComponent
          values={this.state.values}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />

        <InfiniteScroll
          dataLength={this.state.moviesData.length}
          next={this.fetchMoreData}
          hasMore={this.state.moviesData.length < this.state.totalResults}
          loader={<h4>loading ...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="movies" style={styles.movies}>
            {this.state.moviesData.map((movie, index) => (
              <MovieComponent movie={movie} key={index} />
            ))}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

const styles = {
  movies: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

export default App;
