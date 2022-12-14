import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper header__nav">
            <a href="#" className="brand-logo">
              React
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#">Sass</a>
              </li>
              <li>
                <a href="#">Components</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
