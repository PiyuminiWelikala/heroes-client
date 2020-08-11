import React, { Component } from "react";

class Hero extends Component {
  state = {
    heroId: this.props.avenger.id,
    //movies: this.props.avenger.movies,
    //likeCount: this.props.avenger.likeCount,
  };
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={this.props.avenger.imgUrl}
          className="card-img-top"
          alt="No image"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.avenger.name}</h5>
          <h6>{this.props.avenger.birthname}</h6>
          <ul>{this.showMovies()}</ul>
          <button
            className="btn btn-info"
            onClick={() => {
              this.likeAvenger(1);
            }}
          >
            Like{" "}
            <span className="badge badge-light">
              {this.props.avenger.likeCount}
            </span>
          </button>{" "}
          <button className="btn btn-danger" onClick={this.props.onDelete}>
            Delete
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
    if (this.props.avenger.movies.length === 0)
      return <p>No movie available</p>;
    return this.props.avenger.movies.map((movie) => (
      <li key={movie}>{movie}</li>
    ));
  }
  likeAvenger = (likeCounter) => {
    //console.log("You have liked this Avenger!");
    //this.setState({ likeCount: this.props.avenger.likeCount + likeCounter });
  };
}

export default Hero;
