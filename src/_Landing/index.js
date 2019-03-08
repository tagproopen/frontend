import React from 'react';
import NavBar from './_NavBar';
import Main from './_Main';
import Footer from './_Footer';
import './styles.scss';

export default (props) => (
  <div styleName="landing">
    <NavBar />
    <Main />
    <Footer />
  </div>
);
