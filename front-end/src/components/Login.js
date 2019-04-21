import React, { Component } from 'react';
import { firebase } from "../firebase/firebase";


class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  startLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((() => {
        console.log('success');
        this.props.history.push("/dashboard");
      }))
      .catch((err) => {
        console.log('failed', err);
        this.props.history.push("/");
      });
  };
  demoLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword("admin@gmail.com", "admin123")
      .then((() => {
        console.log('success');
        this.props.history.push("/dashboard");
      }))
      .catch(() => {
        console.log('failed');
        this.props.history.push("/");
      });
  }

  startLogout = () => {
    return () => {
      return firebase.auth().signOut();
    };
  };

  render() {
    return (
      <div className="App">

        <div className="container">
          <form className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn blue lighten-1 z-depth-0" onClick={this.startLogin}>Login</button>
              <button className="btn blue lighten-1 z-depth-0" onClick={() => this.props.history.push('/signup')}>SignUp</button>
              <button className="btn blue lighten-1 z-depth-0" onClick={this.demoLogin}>Test Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;



