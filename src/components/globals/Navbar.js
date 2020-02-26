import React, { Component } from 'react'

import {Link} from "gatsby"

import navigationStyles from "../../modules/nav.module.scss"


export default class Navbar extends Component {
    state = {
      navbarOpen: false,
      css: "collapse navbar-collapse",
      links: [
        {
          id: 1,
          path: "/",
          text: "Home"
        },
        {
          id: 2,
          path: "/about",
          text: "About"
        }
      ]
    };
    navbarHandler = () => {
        this.state.navbarOpen
          ? this.setState({
              navbarOpen: false,
              css: "collapse navbar-collapse"
            })
          : this.setState({
              navbarOpen: true,
              css: "collapse navbar-collapse show"
            });
      };
    render() {
      return (
        <nav className={navigationStyles.nav}>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.navbarHandler}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={this.state.css}>
          <ul className="nav-list">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className={navigationStyles.nav_item}>
                  <Link to={link.path} className={navigationStyles.nav_link}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
