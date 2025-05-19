import { IconSpinner } from "../icons/IconSpinner";
import style from "./LoginForm.module.css";
const LoginForm = ({
  username,
  password,
  onSubmit,
  onEmailChange,
  onPasswordChange,
  loading,
}) => {
  return (
    <form onSubmit={onSubmit} className={style.loginForm}>
      <input
        type="text"
        placeholder="enter email"
        value={username}
        onChange={onEmailChange}
        className={style.inputs}
        disabled={loading}
      />
      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={onPasswordChange}
        className={style.inputs}
        disabled={loading}
      />
      {loading ? (
        <IconSpinner />
      ) : (
        <button type="submit" onSubmit={onSubmit} disabled={loading}>
          Login
        </button>
      )}
    </form>
  );
};

export { LoginForm };
