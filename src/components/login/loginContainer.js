import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeStateProp } from '../../actions'
import {login, logout} from '../../actions/main'
import Login from './login'

const mapStateToProps = ({main: {userToken}}, ownProps) => {
    return {
        userToken,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // login: function (userToken) {
        //     // console.log(userToken)
        //     dispatch(login(userToken))
        // }
        ...bindActionCreators({changeStateProp, login, logout}, dispatch)
    }
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginContainer