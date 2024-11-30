import { FC, useState, PropsWithChildren, useEffect } from "react";

import { Stack, TextField, Button } from "@mui/material";
import { useGetMe } from "../../hooks/useGetMe";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  submitLabel: string;
  onSubmit: (credentials: { email: string; password: string }) => void;
  error?: string;
}

const Auth: FC<PropsWithChildren<AuthProps>> = ({
  submitLabel,
  onSubmit,
  children,
  error,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { data: user } = useGetMe();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("user", user);
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleOnChangeEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };

  const handleOnChangePw = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value);
  };

  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "100%",
          sm: "50%",
          md: "30%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        type="email"
        label="email"
        value={email}
        onChange={handleOnChangeEmail}
        error={!!error}
        helperText={error}
      />
      <TextField
        type="password"
        label="password"
        value={password}
        onChange={handleOnChangePw}
        error={!!error}
        helperText={error}
      />
      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;
