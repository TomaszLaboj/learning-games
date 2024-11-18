interface AuthenticationProps {
  loggedIn: boolean;
  logInOut: (logged: boolean) => void;
}

const Authentication = ({ loggedIn, logInOut }: AuthenticationProps) => {
  const onLogClick = () => {
    logInOut(!loggedIn);
  };
  return (
    <>
      {loggedIn ? (
        <div>
          <button onClick={onLogClick}>Log Out</button>
        </div>
      ) : (
        <div>
          <button onClick={onLogClick}>Log In</button>
        </div>
      )}
    </>
  );
};

export default Authentication;
