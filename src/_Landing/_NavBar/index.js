import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import styles from './styles.scss';

export default class extends Component {
  render() {
    return (
      <header className="mb-auto">

        <Link to="/">
          <h3 className="navbar-brand" styleName="navbar-brand">TagPro Remake</h3>
        </Link>

        <nav className="nav" styleName="nav">
          <NavLink className="nav-link" styleName="nav-link" to="" activeClassName={styles.active} exact>Home</NavLink>
        </nav>

      </header>
    );
  }
}