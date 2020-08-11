import React, { Component } from "react";
import axios from "axios";
import Hero from "./Hero";

class Heroes extends Component {
  state = {
    allAvengers: [],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.allAvengers.map((avenger) => (
            <div className="col" key={avenger.id}>
              <Hero 
                key={avenger.id} 
                avenger={avenger}
                onDelete={() => this.deleteAvenger(avenger.id)}
                onLike={() => this.likeAvenger(avenger.id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  async likeAvenger(avenger){
    
    await axios.put(`http://localhost:5000/api/heroes/${avenger.id}`, {
      likeCount: avenger.likeCount + 1,
    });

    let allAvengers = [...this.state.allAvengers];
    let index = allAvengers.indexOf(avenger);
    allAvengers[index] = {...avenger };
    allAvengers(index).likeCount++;
    this.setState({allAvengers : allAvengers});
    
  }

  async deleteAvenger(avengertodeleteid){
    let newAvengers = this.state.allAvengers.filter(
      (avenger) => avenger.id !== avengertodeleteid
    );
    await axios.delete(`http://localhost:5000/api/heroes/${avengertodeleteid}`);
    this.setState({ allAvengers: newAvengers });
  }

  async componentDidMount() {
    let { data } = await axios.get("http://localhost:5000/api/heroes");
    console.log(data);

    let avengers = data.map((avenger) => {
      return {
        id: avenger._id,
        imgUrl: avenger.imgUrl,
        name: avenger.name,
        birthname: avenger.birthname,
        likeCount: avenger.likeCount,
        movies: avenger.movies,
      };
    });

    this.setState({ allAvengers: avengers });
  }
}

export default Heroes;
