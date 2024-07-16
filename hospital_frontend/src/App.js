import React, { useEffect, useState } from "react";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Gallery from "./pages/Gallery.js";
import Contact from "./pages/Contact.js";
import Admin from "./pages/Admin.js";
import Adminportal from "./pages/Adminportal.js";
import Doctorpanel from "./pages/Doctorpanel.js";
import Patientpanel from "./pages/Patientpanel.js";


import AddDoctorDetail from "./Doctor/AddDoctorDetail.js";
import ViewDoctorDetail from "./Doctor/ViewDoctorDetail.js";
import UpdateDoctorDetail from "./Doctor/UpdateDoctorDetail.js";
import DeleteDoctorDetail from "./Doctor/DeleteDoctorDetail.js";

import AddPatientDetail from "./Patient/AddPatientDetail.js";
import ViewPatientDetail from "./Patient/ViewPatientDetail.js";

import Header from "./common/Header.js";
import Menubar from "./common/Menubar.js";
import Leftsidebar from "./common/Leftsidebar.js";
import Footer from "./common/Footer.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Registration from "./user/Registration.js";
import LoginUser from "./user/LoginUser.js";
import PatientDetails from "./user/PatientDetails.js";


import UniverseVar, { DataAppContext } from "./UniverseVar.js";

function App() {


  return (
    <>
      <div className="container-fluid bg-primary">
        <BrowserRouter>
          <UniverseVar>
            <Header />
            <Menubar />

            <div className="row bg-info">
              <Leftsidebar />
              <div className="col-10 bg-info rside" >
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/register" element={<Registration />} />
                  <Route path="/login" element={<LoginUser />} />
                  <Route path="/login/patientdetails" element={<PatientDetails />} />
                  <Route path="/contact" element={<Contact />} />

                  <Route exact path="/admin" element={<Admin />} />
                  <Route exact path="/admin/adminportal" element={< Adminportal />} />

                  <Route path="/admin/adminportal/doctorpanel" element={<Doctorpanel />} />
                  <Route path="/doctors/add" element={<AddDoctorDetail />} />
                  <Route path="/doctors/view" element={<ViewDoctorDetail />} />
                  <Route path="/doctors/update" element={<UpdateDoctorDetail />} />
                  <Route path="/doctors/delete" element={<DeleteDoctorDetail />} />

                  <Route path="/admin/adminportal/patientpanel" element={<Patientpanel />} />
                  <Route path="/patients/add" element={<AddPatientDetail/>} />
                  <Route path="/patients/view" element={<ViewPatientDetail />} />
                </Routes>
              </div>
            </div>

            <div className="row">
              <Footer />
            </div>
          </UniverseVar>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;


