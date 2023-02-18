import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import User from "./User";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/user");
    }
  }, []);

  useEffect(() => {
    if (window?.location?.hash) {
      const queryString = window.location.hash;
      const urlParams = new URLSearchParams(queryString);
      const accessToken = urlParams.get("#access_token");
      const tokenType = urlParams.get("token_type");
      localStorage.setItem("token", accessToken);
      localStorage.setItem("tokenType", tokenType);
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
