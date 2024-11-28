import { FC } from "react";
import { Link } from "react-router-dom";

import { Link as MUILink } from "@mui/material";

import { Auth } from "./";

const Login: FC = () => {
  return (
    <Auth submitLabel="Login" onSubmit={async () => {}}>
      <Link to="/signup" style={{ alignSelf: "center" }}>
        <MUILink>Signup</MUILink>
      </Link>
    </Auth>
  );
};

export default Login;
