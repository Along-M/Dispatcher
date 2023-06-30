import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Views/Home-page/HomePage";
import WelcomePage from "./components/Views/Welcome-Page/WelcomePage";

function App() {
  return (
    <Routes>
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="home-page" element={<HomePage />} />
      <Route path="/" element={<Navigate replace to="/welcome" />} />
    </Routes>
  );
}
export default App;
