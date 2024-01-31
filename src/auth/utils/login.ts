// login api calls
// https://tomcoso-blog.onrender.com

import { DateTime } from "luxon";

type tokenResponse = {
  message: string;
  token: string;
};

const handleLogin = async (email: string, password: string): Promise<void> => {
  const reqBody = JSON.stringify({ email, password });
  const res = await fetch("https://tomcoso-blog.onrender.com/auth/login", {
    method: "POST",
    body: reqBody,
    headers: { "Content-Type": "application/json" },
  });
  const resData = (await res.json()) as tokenResponse;
  console.log(resData.message);
  sessionStorage.setItem("jwt", resData.token);
  const expDt: DateTime = DateTime.now().plus({ hours: 12 }) as DateTime;
  sessionStorage.setItem("expJwt", expDt.toMillis().toString());
  return Promise.resolve();
};

export { handleLogin };
