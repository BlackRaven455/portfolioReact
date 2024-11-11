import { useContext } from "react";
import { userContext } from "../context/UserContext.jsx";

export default function Logout() {
  const { user, dispatch } = useContext(userContext);
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "logout", payload: "guest" })}
      >
        Logout
      </button>
    </div>
  );
}
