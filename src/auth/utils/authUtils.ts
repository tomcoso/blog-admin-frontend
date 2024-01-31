import { RequestArgs, RequestResponse } from "./authTypes";

const makeRequest = async (args: RequestArgs): Promise<RequestResponse> => {
  const response: RequestResponse = { status: "", body: {} };
  const headers = new Headers();
  if (args.method !== "get") {
    const jwt = sessionStorage.getItem("jwt");
    const expJwt = sessionStorage.getItem("expJwt");
    // 'Date.now()' returns a string, 'new Date()' returns a date object
    console.log(jwt, expJwt, Date.now());
    if (jwt && expJwt && +expJwt > Date.now()) {
      headers.append("Authorization", `Bearer ${jwt}`);
    } else {
      response.status = "badAuth";
      response.body = args;
      return response;
    }
  }
  if (args.data) {
    headers.append("ContentType", "application/json");
    args.data = JSON.stringify(args.data);
  }
  try {
    console.log(args);
    const res = await fetch(
      `https://tomcoso-blog.onrender.com/posts/${
        args.postid ? args.postid : ""
      }${args.commentid ? "/comments/" + args.commentid : ""}`,
      { headers: headers, method: args.method, body: args.data }
    );
    const resData: object = (await res.json()) as object;
    response.status = "ok";
    response.body = resData;
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};

export { makeRequest };
