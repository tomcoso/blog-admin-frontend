import { useState } from "react";
import { handleLogin } from "./utils/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (email: string, password: string): void => {
    console.log("authenticating..");
    handleLogin(email, password)
      .then(() => {
        navigate("/posts");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="button" onClick={() => handleSubmit(email, password)}>
          Log in
        </button>
      </form>
    </>
  );
};

export default Login;
