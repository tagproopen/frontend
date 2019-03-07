import React from 'react';
import NavBar from './_NavBar';
import Main from './_Main';
import Footer from './_Footer';
import { connect } from 'react-redux';
import './styles.scss';

const mapStateToProps = state => {
  return state;
};

const Component = (props) => (
  <div styleName="landing">
    <NavBar />
    {console.log(props.meta)}
    <Main />
    <Footer />
  </div>
);


export default connect(mapStateToProps)(Component);