import React from "react";
import { Link } from "react-router-dom";

const Doctorpanel = () => {
    return (
        <>
            <div className="container">
                <div className="row Doctorpanelheader">
                    Doctor Panel
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="box">
                            <Link to="/doctors/add" className="link1">Add Doctor Details</Link>
                           
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="box">
                        <Link to="/doctors/view" className="link1">View Doctor Details</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="box">
                           <Link to="/doctors/update" className="link1">Update Doctor Details </Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="box">
                            <Link to="/doctors/delete" className="link1">Delete Doctor Details </Link>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
export default Doctorpanel;