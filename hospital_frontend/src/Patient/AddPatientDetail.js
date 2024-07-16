import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddPatientDetail = () => {
    
    const navigate = useNavigate()
    
    
    const [patient, setPatient] = useState({
        pid: Math.floor(Math.random() * 10000),
        pname: "",
        gender: "",
        age: "",
        phone: "",
        gname: "",
        mstatus: "",
        appointment: "",
        wardno: "",
        address: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(" value = ", e.target.value)
        setPatient({
            ...patient,
            [name]: value
        })
    }
   
    const detailSubmit = () => {
        
        const { pid, pname, gender, age, phone, gname, mstatus, appointment, wardno, address } = patient
                        
        // console.log(patient.pid)
        // console.log(pid, pname, gender, age, phone, gname, mstatus, appointment, wardno, address)

        if (pid && pname && gender && age && phone && gname && mstatus && appointment && wardno && address) {
            alert("Posted")
            axios.post("http://localhost:8000/Api/v1/patients/add", patient).then(res => console.log(res))

            navigate("/admin/adminportal/patientpanel")
        } else {
            alert("All fiedls are required")
        }

    }

    return (
        <>
            <div className="register">


                <div className="patientdetail">
                    <h3 style={{ textAlign: "center" }}>Patient's Details</h3>

                    <div className="row">
                        <div className="col-6">
                            <label>Patient ID</label>
                            <input type="text" name="pid" value={patient.pid} placeholder= {patient.pid} readOnly></input>
                        </div>
                        <div className="col-6">
                            <label>Patient's Full Name</label>
                            <input type="text" name="pname" value={patient.pname} onChange={handleChange}></input>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-6">
                            <label>Gender</label><br />
                            <select name="gender" value={patient.gender} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label>Age</label><br />
                            <input type="text" name="age" value={patient.age} onChange={handleChange}></input>
                        </div>


                    </div>

                    <div className="row py-3">
                        <div className="col-6">
                            <label >Phone Number</label>
                            <input type="text" name="phone" value={patient.phone} onChange={handleChange}></input>
                        </div>
                        <div className="col-6">
                            <label>Guardian Name</label><br />
                            <input type="text" name="gname" value={patient.gname} onChange={handleChange}></input>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-6">
                            <label>Marital Status</label><br />
                            <select name="mstatus" value={patient.mstatus} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label>Date of appointment</label><br />
                            <input type="date" name="appointment" value={patient.appointment} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="row py-3">

                        <div className="col-6">
                            <label >Ward No</label>
                            <input type="text" name="wardno" value={patient.wardno} placeholder="Enter Ward no" onChange={handleChange}></input>
                        </div>
                        <div className="col-6">
                            <label>Full address</label>
                            <input type="text" name="address" value={patient.address} placeholder="Enter full address" onChange={handleChange}></input>
                        </div>


                    </div>
                    <div className="patient-sub-btn" onClick={detailSubmit}>Submit</div>
                </div>

            </div>
        </>
    )
}
export default AddPatientDetail;