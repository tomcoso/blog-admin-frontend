type HeaderProps = {
  authState: boolean;
};

const Header = ({ authState }: HeaderProps) => {
  return (
    <header className="header">
      <p>Admin {authState ? "" : "not"} logged in</p>
      {!authState && <a href="/login">Log In</a>}
    </header>
  );
};

export default Header;
