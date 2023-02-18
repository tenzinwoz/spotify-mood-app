import axios from "axios";
import React, { useEffect, useState } from "react";
import { JSONTree } from "react-json-tree";

export default function Profile({ token }) {
  const [profileData, setProfileData] = useState({});
  const [playList, setPlayList] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [audioFeatures, setAudioFeatures] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  const getProfile = async () => {
    try {
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfileData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlaylist = async () => {
    const res = await axios.get(
      `https://api.spotify.com/v1/users/${profileData?.id}/playlists?limit=50`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setPlayList(res?.data);
  };

  const getTopTracks = async () => {
    const res = await axios.get(
      `https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTopTracks(res?.data);
  };

  const getAudioFeatures = async () => {
    const idList = topTracks.items.map((item) => item.id);

    const res = await axios.get(
      `https://api.spotify.com/v1/audio-features/?ids=${idList.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setAudioFeatures(res?.data);
  };

  const getRecommendations = async () => {
    alert("Need example artist, genres, track ids");
    // const res = await axios.get(`https://api.spotify.com/v1/recommendations/`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    // });
    // setRecommendations(res?.data);
  };

  const createPlaylist = async () => {
    const parameter = {
      name: "Happy",
      description: "Happy mood playlist",
      public: false,
    };
    const playListData = parameter.toString();
    const res = await axios.post(
      `https://api.spotify.com/v1/users/${profileData?.id}/playlists`,
      parameter,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    await getPlaylist();
    console.log(res);
  };

  const addSongToPlaylist = async () => {
    alert("Achievable");
  };

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  return (
    <div className="container">
      <h1 className="">Profile Data</h1>
      <JSONTree data={profileData} />
      <br />
      <h1 className="">User Playlist</h1>
      <button onClick={getPlaylist} className="btn btn-primary">
        Get user playlist
      </button>
      <JSONTree data={playList} />
      <br />
      <h1 className="">User Top Tracks</h1>
      <button onClick={getTopTracks} className="btn btn-primary">
        Get user top tracks
      </button>
      <JSONTree data={topTracks} />
      <br />
      <h1 className="">Audio features for top tracks</h1>
      <button onClick={getAudioFeatures} className="btn btn-primary">
        Get Audio features
      </button>
      <JSONTree data={audioFeatures} />
      <br />
      <h1 className="">Music Recommendations</h1>
      <button onClick={getRecommendations} className="btn btn-primary">
        Get Recommendations
      </button>
      <JSONTree data={recommendations} />
      <br />
      <h1 className="">Create custom playlist (Happy,Sad,Energetic)</h1>
      <button onClick={createPlaylist} className="btn btn-primary">
        Create Playlist
      </button>
      <JSONTree data={playList} />
      <br />
      <h1 className="">Add song to playlist</h1>
      <button onClick={addSongToPlaylist} className="btn btn-primary">
        Add Song
      </button>
    </div>
  );
}
