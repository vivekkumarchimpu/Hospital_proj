import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const AddDoctorDetail = () => {
    const navigate = useNavigate()


    const [doctor, setDoctor] = useState({
        fullname: "",
        department: "",
        phone: "",
        email: "",
        mstatus: "",
        joined: "",
        address: "",
        roomno: "",

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(" value = ", e.target.value)
        setDoctor({
            ...doctor,
            [name]: value
        })
    }


    const detailSubmit = () => {
        const { fullname, department, phone, email, mstatus, joined, address, roomno } = doctor
        if (fullname && department && phone && email && mstatus && joined && address && roomno) {
            alert("Posted")
            axios.post("http://localhost:8000/Api/v1/doctors/add", doctor).then(res => console.log(res))
            navigate("/admin/adminportal/doctorpanel")
        } else {
            alert("invalid input")
        }
    }



    return (
        <>
            <div className="register">


                <div className="doctordetail">
                    <h3 style={{ textAlign: "center" }}>Doctor Details</h3>
                    <hr className="h-line-drdetail"></hr>
                    <div className="row">
                        <div className="col-6">
                            <label>Doctor's Full Name</label>
                            <input type="text" name="fullname" value={doctor.fullname} onChange={handleChange}></input>
                        </div>
                        <div className="col-6">
                            <label>Department</label><br />
                            <select name="department" value={doctor.department} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Medicine">Medicine</option>
                                <option value="Gynecology">Gynecology</option>
                                <option value="Anesthesiology">Anesthesiology</option>
                                <option value="General surgery">General surgery</option>
                            </select>
                        </div>
                        {/* <div className="col-6">
                            <label> Enter Department</label>
                            <input type="text" name="department" value={doctor.department} placeholder="Enter department" onChange={handleChange}></input>
                        </div> */}
                    </div>

                    <div className="row py-3">
                        <div className="col-6">
                            <label>Phone Number</label>
                            <input type="text" name="phone" value={doctor.phone} onChange={handleChange}></input>
                        </div>
                        <div className="col-6">
                            <label>Email</label><br />
                            <input type="text" name="email" value={doctor.email} onChange={handleChange}></input>
                        </div>
                    </div>

                    <div className="row">
                        {/* <div className="col-6">
                            <label> Enter marrital status</label>
                            <input type="text" name="mstatus" value={doctor.mstatus} placeholder="Enter marrital status" onChange={handleChange}></input>
                        </div> */}
                        <div className="col-6">
                            <label>Select Marital Status</label><br />
                            <select name="mstatus" value={doctor.mstatus} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label>Date of joined</label><br/>
                            <input type="date" name="joined" value={doctor.joined}  onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-6">
                            <label>Full address</label>
                            <input type="text" name="address" value={doctor.address} placeholder="Enter full address" onChange={handleChange}></input>
                        </div>
                        <div className="col-6">
                            <label>House/Ward No</label>
                            <input type="text" name="roomno" value={doctor.roomno} placeholder="Enter room no." onChange={handleChange}></input>
                        </div>

                    </div>
                    <div className="button1" onClick={detailSubmit}>Add Doctor Details</div>
                </div>

            </div>


        </>
    )
}
export default AddDoctorDetail