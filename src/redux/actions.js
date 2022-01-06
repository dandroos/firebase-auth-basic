import { SET_ERROR, SET_REGISTER_FORM } from "./types"

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
})

export const setRegisterForm = (payload) => ({
  type: SET_REGISTER_FORM,
  payload,
})
