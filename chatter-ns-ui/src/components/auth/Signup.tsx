import { FC } from "react";
import { Link } from "react-router-dom";

import { Link as MUILink } from "@mui/material";

import { Auth } from "./";
import { useCreateUser } from "../../hooks/apollo-client";

const Signup: FC = () => {
  const [createUser] = useCreateUser();
  return (
    <Auth
      submitLabel="Signup"
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
      }}
    >
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
