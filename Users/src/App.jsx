import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages imports
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import Abouts from "./Pages/Abouts";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import My_Appointments from "./Pages/My_Appointments";
import Appointment from "./Pages/Appointment";
// Components imports
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="login" element={<Login />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my_appointments" element={<My_Appointments />} />
        <Route path="/appointments/:docId" element={<Appointment />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
