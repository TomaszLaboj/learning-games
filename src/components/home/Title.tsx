import Authentication from "./Authentication";
import styles from "./Title.module.css";

type TitleProps = {
  loggedIn: boolean;
  logInOut: (logged: boolean) => void;
};

function Title({ loggedIn, logInOut }: TitleProps) {
  return (
    <div className={styles.background}>
      <div className={styles.title}>LEARNING GAMES</div>
      <Authentication loggedIn={loggedIn} logInOut={logInOut} />
    </div>
  );
}

export default Title;
