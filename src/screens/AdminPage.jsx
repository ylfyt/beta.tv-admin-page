import Navbar from "../components/navbar";
import { Route, Routes, Navigate} from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import UserPanel from "../components/userPanel";
import VideoPanel from "../components/videoPanel";
import CategoryPanel from "../components/CategoryPanel";

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <section>
        <Routes>
          <Route path="/user" element={<UserPanel />} />
          <Route path="/video" element={<VideoPanel />} />
          <Route path="/kategori" element={<CategoryPanel />} />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      </section>
      <ToastContainer />
    </>
  )
}

export default AdminPage;