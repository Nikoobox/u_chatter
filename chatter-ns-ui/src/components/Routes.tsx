import { createBrowserRouter } from "react-router-dom";

import { Login, Signup } from "./auth";
import Home from "./home/Home";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
