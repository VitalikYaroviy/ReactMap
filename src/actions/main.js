export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const NEWPLACE = 'NEWPLACE'

export function increment () {
  return dispatch => {
    dispatch({
      type: INCREMENT
    })
  }
}

export function decrement () {
  return dispatch => {
    dispatch({
      type: DECREMENT
    })
  }
}

export function login (userToken) {
  console.log(userToken)
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

export function newplace (places) {
  return dispatch => {
    dispatch({
      type: NEWPLACE,
      data: places
    })
  }
}