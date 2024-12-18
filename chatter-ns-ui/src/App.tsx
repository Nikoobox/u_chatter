import { RouterProvider } from "react-router-dom";

import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
} from "@mui/material";

import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from "./components/auth/Guard";

const darkTheme = createTheme({
  palette: { mode: "dark" },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Guard>
            <RouterProvider router={router} />
          </Guard>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
