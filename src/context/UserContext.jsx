import { createContext, useReducer } from "react";

const userContext = createContext();

function Provider({ children }) {
  const [user, dispatch] = useReducer(reducer, "");

  function reducer(state, action) {
    if (action.type === "login") {
      return action.payload;
    } else if (action.type === "logout") {
      return action.payload;
    }
  }

  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export { Provider, userContext };
