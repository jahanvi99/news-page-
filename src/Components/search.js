import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

class Search extends Component {
  constructor() {
    super();
    this.state = { values: "" };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(event) {
    this.setState({ value: event.target.value });
  }
  componentDidMount() {
    // Call our fetch function below once the component mounts
    //   fetch("/search-results-get")
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/search-results-get");
    const body = await response.json();
    const arti = body.value.map(articles => ({
      heading: articles.name,
      links: articles.url,
      descr: articles.description
    }));
    this.setState({ values: arti });
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div class name="body">
        <div class name="search">
          <form method="POST" action="/search-this">
            <input
              type="text"
              placeholder="Enter your news query"
              name="searchquery"
            />
            <button>ENTER</button>
          </form>
        </div>
        <div class name="search-body">
          <h1> News articles </h1>
          {this.state.values.map((article, index) => (
            <div class name="name">
              <li key={index}>
                <a href={`${article.url}`}>{article.name}</a>
              </li>
            </div>
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default Search;
