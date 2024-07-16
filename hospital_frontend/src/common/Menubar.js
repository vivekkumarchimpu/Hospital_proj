import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
    return (
        <>
            <div className="row mbar">
                <div className="col-12 menu">
                    <Link to="/home" className="mx-3 link1">Home</Link>
                    <Link to="/about" className="mx-3 link1">About Us</Link>
                    <Link to="/gallery" className="mx-3 link1">Gallery</Link>
                    <Link to='/register' className="mx-3 link1">Registration</Link>
                    <Link to="/contact" className="mx-3 link1">Contact Us</Link>
                    <Link to="/admin" className="mx-3 link-admin">Admin</Link>
                </div>
            </div>
        </>
    )
}

export default Menubar;