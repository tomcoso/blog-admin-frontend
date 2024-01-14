// login api calls
// https://tomcoso-blog.onrender.com

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
  return Promise.resolve();
};

export { handleLogin };
