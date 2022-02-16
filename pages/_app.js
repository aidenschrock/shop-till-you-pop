import "../styles/globals.css";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import FirestoreProvider from "../context/firestoreContext";

let themeOptions = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#0070f3",
    },
    secondary: {
      main: "#EB367F",
    },
  },
});

themeOptions = responsiveFontSizes(themeOptions);

function MyApp({ Component, pageProps }) {
  return (
    <FirestoreProvider>
      <ThemeProvider theme={themeOptions}>
        <Component {...pageProps} />
      </ThemeProvider>
    </FirestoreProvider>
  );
}

export default MyApp;
