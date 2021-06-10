import React from "react";
import axios from "axios";
import "./App.css";
import AllTweet from "./Cards/AllTweet.js";
import AllUsers from "./Cards/AllUsers.js";
import AllLinks from "./Cards/AllLinks.js";
import GetDetails from "./Cards/GetDetails.js";
import UserDetails from "./Cards/UserDetails.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Tweet: [],
      name: "",
      tweetId: "",
      username: "",
    };
  }

  AllTweet = (event) => {
    // for fetching all tweets
    this.setState({ name: event.target.value });
    axios.get("http://localhost:4000/api/tweetDetail/allTweet").then((res) => {
      this.setState({ Tweet: res.data });
    });
  };

  AllUsers = (event) => {
    // for fetching users info
    this.setState({ name: event.target.value });

    axios.get("http://localhost:4000/api/tweetDetail/allUsers").then((res) => {
      this.setState({ Tweet: res.data });
    });
  };
  AllLinks = (event) => {
    // for fetching external links
    this.setState({ name: event.target.value });
    axios.get("http://localhost:4000/api/tweetDetail/allLinks").then((res) => {
      this.setState({ Tweet: res.data });
    });
  };
  GetDetails = (event) => {
    // for fetching details by tweet id
    this.setState({ name: event.target.value });
    const id = this.state.tweetId;
    axios
      .post("http://localhost:4000/api/tweetDetail/getDetails", { id })
      .then((res) => {
        this.setState({ Tweet: res.data });
      });
  };
  UserDetails = (event) => {
    // for fetching user details by username
    this.setState({ name: event.target.value });
    const username = this.state.username;
    axios
      .post("http://localhost:4000/api/tweetDetail/userDetails", { username })
      .then((res) => {
        this.setState({ Tweet: res.data });
      });
  };
  render() {
    // conditional rendering
    if (this.state.name === "AllTweet") {
      return (
        <div>
          <AllTweet name={this.state.Tweet} />
        </div>
      );
    } else if (this.state.name === "AllUsers") {
      return (
        <div>
          <AllUsers name={this.state.Tweet} />
        </div>
      );
    } else if (this.state.name === "AllLinks") {
      return (
        <div>
          <AllLinks name={this.state.Tweet} />
        </div>
      );
    } else if (this.state.name === "GetDetails") {
      return (
        <div>
          <GetDetails name={this.state.Tweet} />
        </div>
      );
    } else if (this.state.name === "UserDetails") {
      return (
        <div>
          <UserDetails name={this.state.Tweet} />
        </div>
      );
    } else {
      return (
        <div className="app  container-fluid">
          <div className="shadow-lg p-3 mb-5 bg-body rounded container">
            <h1 className="home-head"> Twitter Data</h1>
            <button
              value="AllTweet"
              onClick={this.AllTweet}
              type="button"
              className="btn btn-secondary btn-lg"
            >
              Get All Tweets
            </button>
            <button
              value="AllUsers"
              onClick={this.AllUsers}
              type="button"
              class="btn btn-secondary btn-lg"
            >
              Get All Users
            </button>
            <button
              value="AllLinks"
              onClick={this.AllLinks}
              type="button"
              className="btn btn-secondary btn-lg"
            >
              Get All Links
            </button>
            <br />
            <form className="id-form" onSubmit={this.onFormSubmit}>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Enter Tweet ID
                </span>
                <input
                  required
                  value={this.state.tweetId}
                  onChange={(e) => this.setState({ tweetId: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Tweet ID"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
                <button
                  value="GetDetails"
                  onClick={this.GetDetails}
                  type="submit"
                  className="btn btn-search btn-secondary btn-lg"
                >
                  Get Details
                </button>
              </div>
            </form>
            <form className="id-form" onSubmit={this.onFormSubmit}>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                  Enter Username
                </span>
                <input
                  required
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
                <button
                  value="UserDetails"
                  onClick={this.UserDetails}
                  type="submit"
                  className="btn btn-search btn-secondary btn-lg"
                >
                  Get Details
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default App;
