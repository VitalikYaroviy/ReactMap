import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeStateProp} from '../../actions'
import Login from './login'

const mapStateToProps = ({main: {userToken}}, ownProps) => {
  return {
    userToken,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({changeStateProp}, dispatch)
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

// eslint-disable-next-line eol-last
export default LoginContainer