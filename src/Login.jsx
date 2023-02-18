import React, { useEffect } from "react";

export default function Login() {
  const CLIENT_ID = "0488d6cf182842f39b700107193dc752";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URI = "http://localhost:3000";
  const RESPONSE_TYPE = "token";
  const SCOPE = [
    "ugc-image-upload",
    "user-read-playback-state",
    "playlist-read-private",
    "user-top-read",
    "playlist-modify-public",
    "playlist-modify-private",
  ];
  const SPACE_DELIMITER = "%20";
  const SCOPE_URL_PARAM = SCOPE.join(SPACE_DELIMITER);

  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_URL_PARAM}&response_type=${RESPONSE_TYPE}&show_dialog=true`;

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
