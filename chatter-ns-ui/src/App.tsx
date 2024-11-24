import { RouterProvider } from "react-router-dom";

import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
} from "@mui/material";

import router from "./components/Routes";

const darkTheme = createTheme({
  palette: { mode: "dark" },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
