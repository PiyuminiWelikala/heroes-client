import React, { Component } from "react";

class HeroDetails extends Component {
    state = {};
    render() {
        return (
            <div>
                <h1>Hero Details - {this.props.match.params.id} </h1>
                <button onClick={this.goHome}></button>
            </div>
        );
    };

    goHome = () => {
        this.props.history.push("/");
    };
}

export default HeroDetails;