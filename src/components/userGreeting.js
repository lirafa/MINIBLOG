import { useAuthValue } from "../context/AuthContext";
import styles from "./userGreeting.module.css";

const UserGreeting = () => {
  const { user } = useAuthValue();

  return (
    <>
      {user ? <p className={styles.user}>Olá, {user.displayName}! 👋</p> : null}
    </>
  );
};

export default UserGreeting;
