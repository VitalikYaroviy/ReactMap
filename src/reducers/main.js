import update from 'immutability-helper'
import { CHANGE_STATE_PROP } from '../actions'
import { LOGIN, LOGOUT, NEWPLACE, REMOVEELEMENT, ADDINFO, CHANGEPOSITION, CHANGESORT } from '../constants/index'

const REDUCER = 'MAIN'
const defaultState = {
  value: 0,
  userToken: '',
  places: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case REDUCER + CHANGE_STATE_PROP:
      return update(state, {
        [action.state.prop]: {$set: action.state.value}
      })
    case LOGIN:
      return {
        ...state,
        userToken: action.data
      }
    case LOGOUT:
      return {
        ...state,
        userToken: null,
        places: []
      }
    case NEWPLACE:
      return {
        ...state,
        places: action.data
      }
    case REMOVEELEMENT:
      action.data.place.splice(action.data.index, 1)
      return {
        ...state,
        place: action.data.place
      }
    case ADDINFO:
      return {
        ...state,
        places: action.data
      }
    case CHANGEPOSITION:
      let {type, value, index} = action.data
      return update(state, {places: {[index]: {[type]: {$set: value}}}})
    case CHANGESORT:
      const {oldIndex, newIndex, places} = action.data
      const clone = places.slice(0)
      const num = clone[oldIndex]
      clone.splice([oldIndex], 1)
      clone.splice([newIndex], 0, num)
      return update(state, {places: {$set: clone}})
    default:
      return state
  }
}
