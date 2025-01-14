import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation(); //to get the location of the current page
  const isAlbum = location.pathname.includes("album"); // to check currently in album page or not
  const albumId = isAlbum ? location.pathname.slice(-1) : ""; // getting album id
  const bgColor = albumsData[Number(albumId)].bgColor; //getting bg-color based on albumId

  //ASSIGNING BG-COLOR USING USEEFECT() AND USEREF() HOOKS
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} /> //ROUTE FOR HOME
        <Route path="/album/:id" element={<DisplayAlbum />} /> //ROUTE FOR
        DISPLAYING ALBUM THRO ID
      </Routes>
    </div>
  );
};

export default Display;
