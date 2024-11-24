import { createBrowserRouter } from "react-router-dom";

import { Login, Signup } from "./auth";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
