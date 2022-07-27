import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <header className="flex">
        <div className="flex">
          <NavLink to="/" exact className={this.state.active ? "active" : "h2"}>
            <h2 className={this.props.darkMode ? "white" : ""}> Popular</h2>
          </NavLink>
          <NavLink
            to="/battle"
            exact
            className={this.state.active ? "active" : "h2"}
          >
            <h2 className={this.props.darkMode? "white" : ""}>Battle</h2>
          </NavLink>
        </div>
        <button className="dark-mode" onClick={this.props.handleDarkMode}>
          {this.props.darkMode ? "💡" : "🔦"}
        </button>
      </header>
    );
  }
}
export default Header;
