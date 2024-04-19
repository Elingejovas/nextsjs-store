"use client";
import styles from "./LoginForm.module.sass";
import { handleLogin } from "app/actions";

export const LoginForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await handleLogin(formData);
  };

  return (
    <div className={styles.LoginForm}>
      <h1 className={styles.LoginForm__title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.LoginForm__form}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  );
};
