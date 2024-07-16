import React from "react";
import { Link } from "react-router-dom";

const Patientpanel = () => {
    return (
        <>
            <div className="container">
                <div className="row Patientpanelheader">
                    Patient Panel
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="box">
                            <Link to="/patients/add" className="link1">Add Patient Details</Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="box">
                            <Link to="/patients/view" className="link1">View Patient Details</Link>
                        </div>
                    </div>
                </div>
                



            </div>
        </>
    )
}
export default Patientpanel;