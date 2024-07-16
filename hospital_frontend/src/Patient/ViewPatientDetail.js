import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const ViewPatientDetail = () => {
    const navigate = useNavigate()

    const [patients, setPatients] = useState([])


    const patientDetails = async () => {

        const response = await axios.get("http://localhost:8000/Api/v1/patients/view");

        setPatients(response.data.data)
    }
    useEffect(() => {
        patientDetails();
    }, [])

    const editPatient = (id, row) => {
       console.log(id)
       console.log(row)
       const r = document.getElementsByClassName("trow")
        console.log(r)
    }
    const deletePatient = (id) => {

        axios.delete("http://localhost:8000/Api/v1/patients/view", { data: { _id: id } }).then(res => alert(res.data.message))
        
        navigate("/admin/adminportal/patientpanel")
    }
    return (
        <>
            <div className="doctorDetail" >
                <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Patient Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Phone No</th>
                            <th>Guardian</th>
                            <th>Marital Status</th>
                            <th>Appointment</th>
                            <th>Ward No</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>


                        {
                            patients.map((item, index) => (
                                <tr key={index} className="trow">                                
                                    <td>{item.pid}</td>
                                    <td>{item.pname}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.age}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.gname}</td>
                                    <td>{item.mstatus}</td>
                                    <td className="px-3">{item.appointment}</td>
                                    <td >{item.wardno}</td>
                                    <td className="px-3">{item.address}</td>
                                    <td className="px-3"><button onClick={() => editPatient(item._id, index)}>Edit</button></td>
                                    <td><button onClick={() => deletePatient(item._id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )

}
export default ViewPatientDetail;