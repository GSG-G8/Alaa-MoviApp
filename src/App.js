import React, { Component } from "react";
import "./App.css";
import Movies from "./components/moviesComponent";
import Search from "./components/formComponent";

class App extends Component {
  state = {
    items: [],
    original_title: ""
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=304ac5e762f0abd7fc2c27e96bd42840&query=movie"
    )
      .then(res => res.json())
      .then(result => {
        // console.log(result.results);
        this.setState({
          items: result.results
        });
      })
      .catch(console.log);
    }
    onChangeValue = e => this.setState({original_title: e.target.value});

    onClickSearch = () => {
      
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=304ac5e762f0abd7fc2c27e96bd42840&query=${this.state.original_title}`
        )
        .then(res => res.json())
        .then(result => {
        console.log(result.results);
        this.setState({
          items: result.results
        });
      })
      .catch(console.log);
    };
    
    render() {
      // console.log(this.state.items)
    if (this.state.items.length === 0) {
      return <h3> loading </h3>;
    } else {
      return (
        <div className="App">
          <h1>Search for a movie</h1>

          <Search onClickSearch={this.onClickSearch} onChangeValue={this.onChangeValue} title={this.state.original_title} />
          <Movies items={this.state.items} />
        </div>
      );
    }
  }
}

export default App;
