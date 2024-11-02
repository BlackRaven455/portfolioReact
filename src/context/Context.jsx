import { createContext, useReducer } from "react";

const context = createContext();
function Provider({ children }) {
  const [history, dispatch] = useReducer(reducer, "");

  function reducer(state, action) {}

  return <context.Provider value={dispatch}>{children}</context.Provider>;
}
export {Provider, context}