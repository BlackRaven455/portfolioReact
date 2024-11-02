import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import { Provider } from "./context/Context.jsx";

function App() {
  return (
    <div className={"App"}>
      <BrowserRouter>
        <Navbar />
        <div className={"main"}></div>
        <Routes>
          <Provider>
            <Route index element={<Homepage />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/contacts"} element={<Contacts />} />
          </Provider>

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
