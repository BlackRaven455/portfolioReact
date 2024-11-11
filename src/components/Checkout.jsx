import { userContext } from "../context/UserContext.jsx";
import { useContext } from "react";

export default function Checkout() {
  const value = useContext(userContext);

  return <div>Checkout as {value.user}</div>;
}
