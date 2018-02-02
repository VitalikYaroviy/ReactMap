/* global FB */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Login extends Component {

  checkLoginState = () => {
    let self = this
    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        self.props.login(response.authResponse.accessToken)
      }
    })
  }

  logIn = () => {
    FB.login(this.checkLoginState())
  }

  logOut = () => {
    this.props.logout()
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
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

Login.defaultProps = {
  logIn: () => {
  },
  logOut: () => {
  }
}

export default Login