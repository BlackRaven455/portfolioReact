import { useContext, useState } from "react";
import { userContext } from "../context/UserContext.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const { user, dispatch } = useContext(userContext);

  // const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "login", payload: email });
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type={"text"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <button type={"submit"}>Login</button>
      </form>
    </div>
  );
}
