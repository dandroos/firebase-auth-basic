import { Button, Link, TextField, Typography } from "@mui/material"
import { signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { connect } from "react-redux"
import { auth } from "../firebase"
import { setError, setRegisterForm } from "../redux/actions"

const LoginForm = ({ dispatch }) => {
  const [fields, setFields] = useState({
    login_email: "",
    login_password: "",
  })

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.id]: e.target.value,
    })
  }

  const login = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(
        auth,
        fields.login_email,
        fields.login_password
      )
    } catch (error) {
      if (/auth\//gi.test(error.message)) {
        dispatch(
          setError({
            isOpen: true,
            msg: "Sorry. Login credentials are invalid.",
          })
        )
      } else {
        dispatch(
          setError({
            isOpen: true,
            msg: "Sorry, there was a glitch!",
          })
        )
      }
    }
  }

  return (
    <form onSubmit={login}>
      <TextField
        autoFocus
        required
        id="login_email"
        type="email"
        label="Email"
        value={fields.email}
        fullWidth
        margin="dense"
        onChange={handleChange}
      />
      <TextField
        required
        id="login_password"
        type="password"
        label="Password"
        value={fields.password}
        fullWidth
        margin="dense"
        onChange={handleChange}
      />
      <Button type="submit">Log in</Button>
      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
        No account?{" "}
        <Link
          component="span"
          underline="none"
          sx={{ cursor: "pointer" }}
          onClick={() => dispatch(setRegisterForm(true))}
        >
          Sign up!
        </Link>
      </Typography>
    </form>
  )
}

export default connect()(LoginForm)
