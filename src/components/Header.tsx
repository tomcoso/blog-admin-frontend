import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      setUser(true);
    }
  }, []);

  return (
    <header className="header">
      <p>User {user ? "" : "no"} logged in</p>
      {!user && <a href="/login">Log In</a>}
    </header>
  );
};

export default Header;
