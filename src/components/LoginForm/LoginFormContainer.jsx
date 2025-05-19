import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { useApi } from "../../hooks/useApi";
const LoginFormContainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  const { login, isLoading } = useApi({ shouldLoadUser: false });

  return (
    <LoginForm
      onSubmit={handleSubmit}
      username={username}
      password={password}
      onEmailChange={(e) => setUsername(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      loading={isLoading}
    />
  );
};

export { LoginFormContainer };
