import React from 'react';
// import Game from '../game/game';
// import Store from '../store/store';
import { firebase } from '../firebase/firebase';

class Dashboard extends React.Component {
  // Name of user
  // game btn
  // store btn
  // logout btn

  // some kind of analytics:
    // items currently owned
    // how QTUM coins owned'
  startGame = () => {

  }

  openStore = () => {

  }

  startLogout = () => {
    firebase.auth().signOut();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <nav className="nav-wrapper grey darken-3" id='navBar'>
          <div className="container">
            <a href="/dashboard" className="brand-logo left blue-text text-lighten-2">Sickick</a>
            <ul className="right">
              <li><a href='http://127.0.0.1:5500/dist/index.html'><button className="button button--link" onClick={this.startGame}>Game</button></a></li>
              <li><button className="button button--link" onClick={this.openStore}>Store</button></li>
              <li><button className="button button--link" onClick={this.startLogout}>Logout</button></li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          <div className="col s3 m3">
            <div className="section hide-on-small-only">
              <div className="card z-depth-1 profile-summary">
                <div className="card-content grey-text text-darken-3">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
