/* global FB myMap, google, myMap*/
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'
import logo from '../../assets/images/logo.svg'
// components
import GoogleContainer from '../components/googlemap/googlemapContainer'
import LoginContainer from './login/loginContainer'
// router
// import {Route, Switch} from 'react-router'
import {HashRouter} from 'react-router-dom'

class App extends Component {
  componentDidMount () {
    (function (d, s, id) {
      const element = d.getElementsByTagName(s)[0]
      const fjs = element
      let js = element
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
    window.fbAsyncInit = () => {
      FB.init({
        appId: '1901596210152837',
        xfbml: true,
        cookie: true,
        version: 'v1.0'
      })
    }
  }

  render () {
    return (
      <HashRouter>
        <div className='App'>
          <div className='App-header'>
            {this.props.userToken ? <p className={'mainText'}>Welcome</p> : <img src={logo} className='App-logo' alt='logo' />}
            <LoginContainer />
          </div>
          {this.props.userToken ? <GoogleContainer /> : <div className={'mainText'}>Come in!</div>}
        </div>
      </HashRouter>
    )
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  userToken: PropTypes.string.isRequired,
  changeStateProp: PropTypes.func.isRequired,
  myCustomPropsFunc: PropTypes.func
}

App.defaultProps = {
  value: 0,
  userToken: '',
  changeStateProp: () => {
  },
  myCustomPropsFunc: () => {
  }
}

export default App
