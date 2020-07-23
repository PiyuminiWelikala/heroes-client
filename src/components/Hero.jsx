import React, { Component } from "react";

class Hero extends Component {
  state = {
    heroId: 189,
    movies: ["Movie 1", "Movie 2", "Movie 3"],
    likeCount: 0
  };
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://p1.hiclipart.com/preview/707/869/118/the-a-avengers-logo-png-clipart.jpg"
          className="card-img-top" alt="No image"
        />
        <div className="card-body">
          <h5 className="card-title">Avengers Name</h5>
          <h6>Avenger Birth Name</h6>
          <ul>{this.showMovies()}</ul>
          <button className="btn btn-info" onClick={() => {this.likeAvenger(1)}}>
            Like{" "}
    <span className="badge badge-light">{this.state.likeCount}</span>
          </button>
        </div>
      </div>
    );
  }
  isHero() {
    //if (this.state.heroId < 0) return "Not an avenger";
    //else return "Is an avenger";

    return this.state.heroId < 0 ? "Not an avenger" : "Is an avenger";
  }
  showMovies() {
    if (this.state.movies.length === 0) return <p>No movie available</p>;
    return this.state.movies.map((movie) => <li key={this.state.movies.indexOf(movie)}>{movie}</li>);
  }
  likeAvenger = (likeCounter) => {
    //console.log("You have liked this Avenger!");
    this.setState({likeCount : this.state.likeCount + likeCounter});
  };
}

export default Hero;
