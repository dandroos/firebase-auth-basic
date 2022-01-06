import { SET_ERROR, SET_REGISTER_FORM } from "./types"

const initialState = {
  error: {
    isOpen: false,
    msg: "",
  },
  registerForm: false,
}

const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  switch (type) {
    case SET_ERROR:
      newState.error = payload
      break
    case SET_REGISTER_FORM:
      newState.registerForm = payload
      break
    default:
      break
  }

  return newState
}

export default reducer
