/* global FB */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Login extends Component {
    constructor(props) {
        super(props)
        this.checkLoginState = this.checkLoginState.bind(this)
        this.logIn = this.logIn.bind(this)
        this.logOut = this.logOut.bind(this)
    }

    checkLoginState () {
        let self = this
        console.log(self.props)
        FB.getLoginStatus(function (response) {
            if(response.status === 'connected') {
                console.log(self.props)
                console.log(response.authResponse.accessToken)
                self.props.login(response.authResponse.accessToken)
            }
        })
    }

    logIn() {
        FB.login(this.checkLoginState())
    }

    logOut () {
        FB.logout(response => {
            console.log('log out')// user is now logged out
            this.props.logout()
        })
    }

    render() {
        if(!this.props.userToken) {
            return (
                <div>
                    <button onClick={this.logIn} className='login'>Login</button>
                </div>
            )
        }else {
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
  logIn: () => {},
  logOut: () => {}
}

export default Login