import axios from "axios";
import React, { useEffect } from "react";

export default function Profile({ token }) {
  const getProfile = async () => {
    axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authentication: `Bearer ${token}`,
      },
    });
  };
  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  return <div>Profile</div>;
}
