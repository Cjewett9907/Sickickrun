import React from 'react';
// import Game from '../game/game';
import { firebase } from '../firebase/firebase';

class Dashboard extends React.Component {
  // Name of user
  // game btn
  // store btn
  // logout btn

  // some kind of analytics:
    // items currently owned
    // how QTUM coins owned'

  startLogout = () => {
      firebase.auth().signOut();
      this.props.history.push('/');
  }

  render() {
    return (
      <div>
        {/* <Game /> */}
        {/* <Store /> */}
        <button className="button button--link" onClick={this.startLogout}>
          Logout
        </button>
      </div>
    )
  }
}

export default Dashboard;
