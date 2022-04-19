import React, { useEffect } from "react";
import AddVideo from "../components/addVideo";
import AllVideo from "../components/allVideo";
import CategoryVideo from "../components/categoryVideo";
import DeleteVideo from "../components/deleteVideo";
import EditVideo from "../components/editVideo";
import Navbar from "../components/navbar";

function VideoPanel() {

  useEffect(() => {
    if(!window.sessionStorage.getItem('token')) {
      window.location.href = "/login";
    }
  }, [])

  return (
    <div>
      <Navbar/>
      <div className="w-full px-12 mt-8 mb-6 flex flex-col">
        <h1 className="mb-6 text-4xl text-buletinDarkBlue font-medium">
          Menu User
        </h1>
        <AddVideo/>
        <EditVideo/>
        <DeleteVideo/>
        <AllVideo/>
        <CategoryVideo/>
      </div>
    </div>
  );
}

export default VideoPanel;
