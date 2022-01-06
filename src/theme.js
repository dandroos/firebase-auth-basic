import { createTheme, responsiveFontSizes } from "@mui/material"

let theme = createTheme({
  palette: {
    primary: {
      main: "#222",
    },
    secondary: {
      main: "#555",
    },
    background: {
      default: "#fffbf1",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "dense",
      },
    },
  },
})

export default responsiveFontSizes(theme)
