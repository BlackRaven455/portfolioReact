import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import { Provider } from "./context/UserContext.jsx";

function App() {
  return (
    <div className={"App"}>
      <Provider>
        <BrowserRouter>
          <Navbar />
          <div className={"main"}></div>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/contacts"} element={<Contacts />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
