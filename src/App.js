import { Box, Button, Container, Typography } from "@mui/material"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useState } from "react"
import LoginForm from "./components/LoginForm"
import Toast from "./components/Toast"
import { auth } from "./firebase"
import logo from "./firebase.png"

function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  return (
    <>
      <Box minHeight="100vh" display="flex" alignItems="center">
        <Container maxWidth="sm" sx={{ pb: 6 }}>
          <img src={logo} alt="React logo" width={80} />
          <Typography
            variant="h3"
            variantMapping={{ h3: "h1" }}
            gutterBottom
          >
            Firebase Authentication
          </Typography>
          <Typography paragraph>
            {user
              ? `${user.email} is signed in!`
              : `No user signed in.`}
          </Typography>
          {user ? (
            <Button onClick={() => signOut(auth)}>Sign out</Button>
          ) : (
            <LoginForm />
          )}
        </Container>
        <Toast />
      </Box>
    </>
  )
}

export default App
