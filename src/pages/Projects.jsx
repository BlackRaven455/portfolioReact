import Login from "../components/Login.jsx";
import Checkout from "../components/Checkout.jsx";
import Logout from "../components/Logout.jsx";

export default function Projects() {
  return (
    <div>
      <h1>Projects and functionality </h1>
      Login function using context:
      <div>
        <Checkout></Checkout>
        <Login></Login>
        <Logout></Logout>
      </div>
      <div></div>
    </div>
  );
}
