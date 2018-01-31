import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeStateProp } from '../../actions'
import {newplace} from '../../actions/main'
import Googlemap from './googlemap'

const mapStateToProps = ({main: {userToken, places}}, ownProps) => {
    return {
        userToken,
        places,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({changeStateProp, newplace}, dispatch)
    }
}

const GoogleContainert = connect(
    mapStateToProps,
    mapDispatchToProps
)(Googlemap)

export default GoogleContainert