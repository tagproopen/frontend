import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initSocketConnection } from 'services/socketConnection/actions';

const mapStateToProps = (state) => {
  return state.socketConnection;
};

const mapDispatchToProps = dispatch => ({
    initSocketConnection: () => dispatch(initSocketConnection()),
    redirectGame: () => dispatch({type: 'GAMEUI_INIT_GAME'}),
});

class index extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    if (this.input.current) {
      this.input.current.focus()
    }
  }

  render() {
    let {initialized, connecting, socketConnected} = this.props;
    return (
      <main role="main" className="cover">
        <form className="form" onSubmit={e => {
          e.preventDefault();
          if (socketConnected) return this.props.redirectGame();
          this.props.initSocketConnection();
          this.input.current.value = '';
        }}>
          <div className="form-header">
            <h3>
              {!initialized &&
              'Welcome'}
              {connecting &&
              'Connecting to server...'}
              {(!connecting && socketConnected) &&
              'Connected!'}
            </h3>
          </div>
          {!socketConnected &&
            <div className="form-label-group has-warning has-feedback">
              <input type="text" ref={this.input} className="form-control" placeholder="Username" autoComplete="off" required={!socketConnected} />
              <label htmlFor="inputUser">Username</label>
            </div>
          }
          <div className="d-flex justify-content-center">
            <button className="btn btn-lg btn-secondary" type="submit">
            {socketConnected ? 'Go Back to Game' : 'Go to Game'}
            </button>
          </div>
        </form>
      </main>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(index);