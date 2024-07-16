import React from "react";
import { Link } from "react-router-dom";


const Adminportal = () => {

   

    return (
        <>
            <div className="container">
                <div className="row admin-header">
                    Admin Portal
                </div>
                <div className="box">
                    <Link to="/admin/adminportal/doctorpanel" className="link1">Doctor info</Link>
                </div>
                <div className="box">

                    <Link to="/admin/adminportal/patientpanel" className="link1">Patient info</Link>
                </div>
            </div>

        </>
    )
}
export default Adminportal;