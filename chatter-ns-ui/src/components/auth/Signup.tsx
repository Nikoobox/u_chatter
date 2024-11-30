import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { Link as MUILink } from "@mui/material";

import { Auth } from "./";
import { useCreateUser } from "../../hooks/apollo-client";
import { extractErrorMessage } from "../../utils/errors";
import useLogin from "../../hooks/useLogin";

const Signup: FC = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState<string>("");
  const { login } = useLogin();

  return (
    <Auth
      submitLabel="Signup"
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          });
          await login({ email, password });
          setError("");
        } catch (e) {
          const errorMessage = extractErrorMessage(e);
          if (errorMessage) {
            setError(errorMessage);
            return;
          }
          setError("Unkwon error occured.");
        }
      }}
      error={error}
    >
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
