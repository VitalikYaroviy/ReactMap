import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeStateProp} from '../../actions'
import {newPlace, removeElement, addInfo, changePosition, changeSort} from '../../actions/main'
import GoogleMap from './googlemap'

const mapStateToProps = ({main: {userToken, places}}, ownProps) => {
  return {
    userToken,
    places,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({changeStateProp, newPlace, removeElement, addInfo, changePosition, changeSort}, dispatch)
  }
}

const GoogleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMap)

// eslint-disable-next-line eol-last
export default GoogleContainer