import "../styles/globals.css";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

let themeOptions = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#0097a7",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

themeOptions = responsiveFontSizes(themeOptions);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themeOptions}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
