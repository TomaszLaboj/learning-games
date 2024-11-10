import styles from "./Title.module.css";

type TitleProps = {
  loggedIn: boolean;
  logInOut: (logged: boolean) => void;
};

function Title({ loggedIn, logInOut }: TitleProps) {
  const onLogClick = () => {
    logInOut(!loggedIn);
    console.log("works");
  };
  return (
    <div className={styles.background}>
      <div className={styles.title}>LEARNING GAMES</div>
      {loggedIn ? (
        <div className={styles.login}>
          <button onClick={onLogClick}>Log Out</button>
        </div>
      ) : (
        <div className={styles.login}>
          <button onClick={onLogClick}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default Title;
