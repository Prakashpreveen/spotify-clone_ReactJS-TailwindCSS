import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams(); //useParams to get id
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <Navbar />

      {/* -------------------- ALBUM HEADER -------------------- */}
      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
        <img src={albumData.image} className="w-48 rounded" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img src={assets.spotify_logo} className="inline-block w-5 mr-1" />
            <b className="mr-4">Spotify</b>
            &#8226; 1,323,154 likes &#8226; <b>50 songs, </b>
            about 2 hrs 30 mins
          </p>
        </div>
      </div>

      {/* -------------------- ALBUM INFO -------------------- */}
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">Title</b>
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img src={item.image} className="inline w-10 mr-5" />
            {item.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 dyas ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
