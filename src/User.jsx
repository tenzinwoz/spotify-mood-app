import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

export default function User() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Profile token={token} />
    </div>
  );
}
