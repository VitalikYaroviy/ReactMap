/* global FB */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import {changeStateProp} from "../../actions";

class Login extends Component {

  checkLoginState = () => {
    let self = this
    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        self.props.changeStateProp('userToken', response.authResponse.accessToken, 'main')
      }
    })
  }

  logIn = () => {
    FB.login(this.checkLoginState())
  }

  logOut = () => {
    this.props.changeStateProp('userToken', null, 'main')
    this.props.changeStateProp('places', [], 'main')
  }

  render () {
    if (!this.props.userToken) {
      return (
        <div>
          <button onClick={this.logIn} className='login'>Login</button>
        </div>
      )
    } else {
      return (
        <button onClick={this.logOut} className='login'>Log out</button>
      )
    }
  }
}

Login.propTypes = {
  changeStateProp: PropTypes.func.isRequired
}

Login.defaultProps = {
  logIn: () => {
  },
  logOut: () => {
  }
}

export default Login