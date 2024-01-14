// import { redirect } from "react-router-dom";

const checkAuth = (): boolean => {
  const token = sessionStorage.getItem("jwt");
  return !!token;
};

export { checkAuth };
