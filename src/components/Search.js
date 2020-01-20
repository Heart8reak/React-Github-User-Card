import React from 'react';
import axios from 'axios';

import FollowerCard from './FollowerCard';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      github: [],
      searchTerm: ''
    };
    console.log('hello');
  }

  getFollower = () => {
    axios
      .get(`https://api.github.com/users/${this.state.searchTerm}/followers`)
      .then(response => {
        this.setState({
          github: response.data
        });
        console.log(this.state);
        console.log(response.data);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.getFollower();
    this.setState({
      searchTerm: ''
    });
    console.log(this.getFollower());
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            placeholder="Search"
          ></input>
          <button>See who is Following</button>
        </form>

        <br />

        <div className="follower-section">
          {this.state.github.map(item => {
            return (
              <FollowerCard
                key={item.id}
                loginFollow={item.login}
                imgFollow={item.avatar_url}
                urlFollow={item.html_url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Search;
