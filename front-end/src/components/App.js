import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class App extends Component {
  state = {
    currentPage: 'login',
  }
  handlePageChange = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <div>
      {
        this.state.currentPage === 'login' ? 
          <Login changePage={this.handlePageChange.bind(this)} /> : 
          <Signup changePage={this.handlePageChange.bind(this)}/>
      }
      </div>
    )
  };

}

export default App;
