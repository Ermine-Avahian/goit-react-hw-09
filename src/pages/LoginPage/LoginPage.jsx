import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Log In</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
