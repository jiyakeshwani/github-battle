import React from "react";
import Header from "./Header";
import Repos from "./Repos";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      darkMode: false,
    };
  }
  handleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };
  render() {
    return (
      <>
        <div className={this.state.darkMode ? "dark" : "light"}>
          <div className="container">
            <Header
              darkMode={this.state.darkMode}
              handleDarkMode={() => this.handleDarkMode()}
            />
            <Repos />
          </div>
        </div>
      </>
    );
  }
}

export default App;
