import { Context, Dispatch, createContext } from "react";
import { ActionArg } from "../reducers/redirectReducer";

const RedirectContext = createContext("");

const RedirectDispatchContext: Context<Dispatch<ActionArg>> = createContext(
  {} as Dispatch<ActionArg>
);

export { RedirectContext, RedirectDispatchContext };
