import React, { useEffect } from "react";

export default function Login() {
  const CLIENT_ID = "0488d6cf182842f39b700107193dc752";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URI = "http://localhost:3000";
  const RESPONSE_TYPE = "token";

  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`;

  //Authentication
  const handleLogin = () => {
    window.location = loginUrl;
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <button className="btn btn-primary" onClick={handleLogin}>
        Login to spotify
      </button>
    </div>
  );
}
