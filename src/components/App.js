/* global FB myMap, google, myMap*/
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'
import logo from '../../assets/images/logo.svg'
// components
import ComponentAContainer from '../components/ComponentsA/ComponentAContainer'
import ComponentBContainer from '../components/ComponentsB/ComponentBContainer'
import GoogleContainert from '../components/googlemap/googlemapContainer'
import LoginContainer from './login/loginContainer'
// import LogOutContainer from './logout/logoutContainer'
// router
import {Route, Switch} from 'react-router'
import {HashRouter, Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <Route render={({staticContext}) => {
      if (staticContext) {
        staticContext.status = 404
      }
      return (<div>
        <h1>Sorry, can’t find that.</h1>
      </div>)
    }}/>
  )
}

function testAPI () {
  console.log('Welcome!  Fetching your information.... ')
  FB.api('/me', function (response) {
    console.log('Successful login for: ' + response.name)
    return true
  })
}

class App extends Component {
  componentDidMount() {
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
        version: 'v2.5'
      })
    }
  }

  render() {
    return (
      <HashRouter>
        <div className='App'>
          <div className='App-header'>
            {this.props.userToken ? <p>Welcome</p> : <img src={logo} className='App-logo' alt='logo'/>}
            <LoginContainer/>
          </div>
          {this.props.userToken ? <GoogleContainert/> : <div>Come in!</div>}
          <div>
            {/*<Switch>*/}
            {/*<Route exact path='/' render={() => {*/}
            {/*return (*/}
            {/*<div>*/}
            {/*<h2>Welcome to App</h2>*/}
            {/*<p className='App-intro'>*/}
            {/*<code>src/components/App.js</code>*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*Value: {this.props.value}*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*<button*/}
            {/*onClick={() => this.props.changeStateProp('value', 0, 'main')}>*/}
            {/*Reset to "0"*/}
            {/*</button>*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*)*/}
            {/*}} />*/}
            {/*<Route path='/componentA'*/}
            {/*component={ComponentAContainer} />*/}
            {/*<Route path='/componentB'*/}
            {/*component={ComponentBContainer} />*/}
            {/*<Route component={NotFound} />*/}
            {/*</Switch>*/}
          </div>
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
