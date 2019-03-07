import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';

export default () => (
  <form className="form">
    <div className="form-header">
      <h3>Error 404</h3>
    </div>

    <div className="lead text-center">
      Page not found.
    </div>

    <Link className="loginBtn mt-4" to="/">
      <button className="btn btn-lg btn-secondary btn-block">Back to Home</button>
    </Link>
  </form>
);
