import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const DeleteDoctorDetail = () => {
    const navigate = useNavigate()

    const [doctors, setDoctors] = useState([])

    const [phno, setPhone] = useState()
    let status = false




    const doctorDetails = async () => {

        const response = await axios.get("http://localhost:8000/Api/v1/doctors/view");

        setDoctors(response.data.data)
    }
    useEffect(() => {
        doctorDetails();
    }, [])

    const getPhonenumber = (e) => {
        setPhone(e.target.value)
    }
    const submitPhonenumber = () => {

        doctors.map((item) => {

            if (item.phone === phno) {
                status = true
                console.log("Doctors: ", item.phone)

            }
        })


    }
    const detailsDelete = async () => {

        const response = await axios.delete("http://localhost:8000/Api/v1/doctors/delete", { data: { phone: phno } }).then(res => alert(res.data.message))
        console.log(response)
        navigate("/admin/adminportal/doctorpanel")

    }
    return (
        <>
            <div className="doctorDetail my-2" >
                <input type="text" name="phno" placeholder="Enter Dr's Phone No.." onChange={getPhonenumber}></input>
                <button onClick={submitPhonenumber}> Submit </button>
                <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <td>Doctor's Name</td>
                            <td>Department</td>
                            <td>Phone Number</td>
                            <td>Email</td>
                            <td>Joined Date</td>
                            <td>Marrital Status</td>
                            <td>House No/Ward No</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            doctors.map((item) => {
                                if (item.phone === phno) {
                                    return <tr>
                                        <td>{item.fullname}</td>
                                        <td>{item.department}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.joined}</td>
                                        <td>{item.mstatus}</td>
                                        <td>{item.roomno}</td>
                                        <td>{item.address}</td>
                                    </tr>
                               }



                            })
                        }


                    </tbody>
                </table>
                {/* <div className="detailHeader" id="head">
                    <label className="px-4">Doctor's Name</label>
                    <label className="px-4">Department</label>
                    <label className="px-3">Phone Number</label>
                    <label className="px-5">Email</label>
                    <label className="px-5">Joined Date</label>
                    <label className="px-3">Marrital Status</label>
                    <label className="px-3">House No/Ward No</label>
                    <label className="px-3">Address</label>
                </div> */}



                {/* {
                    doctors.map((item) => {
                        if (item.phone === phno) {

                            return <div style={{ fontSize: "15px", color: "pink" }}>

                                <label className="px-4 py-4">{item.fullname}</label>
                                <label className="px-4">{item.department}</label>
                                <label className="px-3">{item.phone}</label>
                                <label className="px-3">{item.email}</label>
                                <label className="px-2">{item.joined}</label>
                                <label className="px-5">{item.mstatus}</label>
                                <label className="px-5">{item.roomno}</label>
                                <label className="px-5">{item.address}</label>
                            </div>
                        }



                    })
                } */}


            </div >

            <div>
                <button className="button" onClick={detailsDelete} style={{ float: "right" }}>Delete</button>
            </div>
        </>
    )
}
export default DeleteDoctorDetail;