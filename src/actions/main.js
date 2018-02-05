import {LOGIN, LOGOUT, NEWPLACE, REMOVEELEMENT, ADDINFO, CHANGEPOSITION, CHANGESORT} from "../constants/index"

export function login (userToken) {
  return dispatch => {
    dispatch({
      type: LOGIN,
      data: userToken
    })
  }
}

export function logout () {
  return dispatch => {
    dispatch({
      type: LOGOUT
    })
  }
}

export function newPlace (places) {
  return dispatch => {
    dispatch({
      type: NEWPLACE,
      data: places
    })
  }
}

export function removeElement (place, index) {
  return dispatch => {
    dispatch({
      type: REMOVEELEMENT,
      data: {place, index}
    })
  }
}

export function addInfo (places) {
  return dispatch => {
    dispatch({
      type: ADDINFO,
      data: places
    })
  }
}

export function changePosition (type, value, index) {
  return dispatch => {
    dispatch({
      type: CHANGEPOSITION,
      data: {type, value, index}
    })
  }
}

export function changeSort (oldIndex, newIndex, places) {
  return dispatch => {
    dispatch({
      type: CHANGESORT,
      data: {oldIndex, newIndex, places}
    })
  }
}