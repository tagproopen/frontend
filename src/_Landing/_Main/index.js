import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initSocketConnection } from 'actions';

const mapDispatchToProps = dispatch => {
  return {
    initSocketConnection: () => dispatch(initSocketConnection()),
  };
};

class index extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus()
  }

  render() {
    return (
      <main role="main" className="cover">
        <form className="form" onSubmit={e => {
          e.preventDefault();
          this.props.initSocketConnection();
          this.input.current.value = '';
        }}>
          <div className="form-header">
            <h3>In Development</h3>
          </div>
          <div className="form-label-group has-warning has-feedback">
            <input type="text" ref={this.input} className="form-control" placeholder="Username" autoComplete="off" required />
            <label htmlFor="inputUser">Username</label>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-lg btn-secondary" type="submit">Go to Game</button>
          </div>
        </form>
      </main>
    );
  }
};

export default connect(null, mapDispatchToProps)(index);