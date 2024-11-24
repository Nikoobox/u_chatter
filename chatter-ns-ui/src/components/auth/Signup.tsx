import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { Stack, TextField, Button, Link as MUILink } from "@mui/material";

import { Auth } from "./";

const Signup: FC = () => {
  return (
    <Auth submitLabel="Signup" onSubmit={async () => {}}>
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
