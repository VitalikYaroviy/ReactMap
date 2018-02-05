import {REMOVEELEMENT, CHANGEPOSITION, CHANGESORT} from "../constants/index"

export function removeElement (place, index) {
  return dispatch => {
    dispatch({
      type: REMOVEELEMENT,
      data: {place, index}
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
