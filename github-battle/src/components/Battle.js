import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
class Battle extends React.Component {
  constructor() {
    super();
    this.state = {
      user1: "",
      user2: "",
      user1Present: false,
      user2Present: false,
      user1Data: [],
      user2Data: [],
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.User1present !== this.state.User1present) {
      fetch(`https://api.github.com/users/${this.state.user1}`)
        .then((res) => res.json())
        .then((data) => this.setState({ user1data: data }));
    } else if (prevState.User2present !== this.state.User2present) {
      fetch(`https://api.github.com/users/${this.state.user2}`)
        .then((res) => res.json())
        .then((data) => this.setState({ user2data: data }));
    }
  }
  handleUser1 = ({ target }) => {
    this.setState({
      user1: target.value,
    });
  };
  handleUser2 = ({ target }) => {
    this.setState({
      user2: target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      user1Present: true,
      user2Present: true,
    });
  };
  handleDelete = () => {
    this.setState({
      user1Present: false,
      user2Present: false,
      user1: "",
      user2: "",
    });
  };
  handleUser1Display = () => {
    if (this.state.user1Present && this.state.user1Data) {
      return (
        <>
          <div>
            <img src={this.state.user1Data.avatar_url} alt="img" />
            <p>{this.state.user1data.login}</p>
            <i
              onClick={() => {
                this.handleDelete();
              }}
              class="far fa-times-circle"
            ></i>
          </div>
        </>
      );
    }
  };
  handleUser2Display = () => {
    if (this.state.user2Present && this.state.user2Data) {
      return (
        <>
          <div>
            <img src={this.state.user2Data.avatar_url} alt="img" />
            <p>{this.state.user2data.login}</p>
            <i
              onClick={() => {
                this.handleDelete();
              }}
              class="far fa-times-circle"
            ></i>
          </div>
        </>
      );
    }
  };
  render() {
    return (
      <div className="container">
        <Header />
        <div className="battle">
          <h1>Instructions</h1>
          <div className="flex">
            <div className="ins">
              <h5>Enter Two github Users</h5>
              <i className="fas fa-user-friends"></i>
            </div>
            <div className="ins">
              <h5>Battle</h5>
              <i className="fas fa-fighter-jet"></i>
            </div>
            <div className="ins">
              <h5>See the Winner</h5>
              <i className="fas fa-trophy"></i>
            </div>
          </div>
        </div>
        <div className="players">
          <h1>Players</h1>
          <div className="flex">
            <div>
              <h2>Player One</h2>
              <form onSubmit={this.handleSubmit()}>
                <input
                  type="username"
                  placeholder="github username"
                  value={this.state.user1}
                  onChange={this.handleUser1}
                />
                <button onClick={() => this.handleUser1Display()}>
                  Submit
                </button>
              </form>
              <h2>Player Two</h2>
              <form onSubmit={this.handleSubmit()}>
                <input
                  type="username"
                  placeholder="github username"
                  value={this.state.user2}
                  onChange={this.handleUser2}
                />
                <button onClick={() => this.handleUser2Display()}>
                  Submit
                </button>
              </form>
            </div>
          </div>
          <NavLink to="/battle/results">
            <button>Battle</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Battle;
