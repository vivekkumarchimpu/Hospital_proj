import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const UpdateDoctorDetail = () => {

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
            }
        })

        
    }
    const detailsUpdate = async () => {
        await axios.put("http://localhost:8000/Api/v1/doctors/update",  doctor).then(res => alert(res.data.message))
        navigate("/admin/adminportal/doctorpanel")

    }
    return (
        <>
            <div className="doctorDetail my-2" >
                <input type="text" name="phno" placeholder="Enter Dr's Phone No.." onChange={getPhonenumber}></input>
                <button onClick={submitPhonenumber}> Submit </button>
                <div className="detailHeader" id="head">
                            <label className="px-1">Doctor's Name</label>
                            <label className="px-5">Department</label>
                            <label className="px-1">Phone Number</label>
                            <label className="px-5">Email</label>
                            <label className="px-3">Joined Date</label>
                            <label className="px-2">Marrital Status</label>
                            <label className="px-1">House No/Ward No</label>
                            <label className="px-2">Address</label>
                </div>
                           


                {
                    doctors.map((item) => {
                        if (item.phone === phno) {

                            
                                //doctor.fullname = item.fullname
                                // doctor.phone = item.phone
                                // doctor.email = item.email
                                // doctor.joined = item.joined
                                // doctor.mstatus = item.mstatus
                                // doctor.roomno = item.roomno
                                // doctor.address = item.address
                              
                            return <div style={{fontSize: "12px"}}>

                              


                                <input id="name" type="text" name="fullname" placeholder={item.fullname} value={doctor.fullname} onChange={handleChange}></input>
                                <select name="department" placeholder={item.department} value={doctor.department} onChange={handleChange} >
                                    <option value="">Select</option>
                                    <option value="Medicine">Medicine</option>
                                    <option value="Gynecology">Gynecology</option>
                                    <option value="Anesthesiology">Anesthesiology</option>
                                    <option value="General surgery">General surgery</option>
                                </select>
                                <input type="text" name="phone" placeholder={item.phone} value={doctor.phone} onChange={handleChange}></input>
                                <input type="text" name="email" placeholder={item.email} value={doctor.email} onChange={handleChange}></input>
                                <input type="date" name="joined" placeholder={item.joined} value={doctor.joined} onChange={handleChange}></input>
                                <select name="mstatus" placeholder={item.mstatus} value={doctor.mstatus} onChange={handleChange} >
                                    <option value="">Select</option>
                                    <option value="Married">Married</option>
                                    <option value="Unmarried">Unmarried</option>
                                </select>
                                <input type="text" name="roomno" placeholder={item.roomno} value={doctor.roomno} onChange={handleChange}></input>
                                <input type="text" name="address" placeholder={item.address} value={doctor.address} onChange={handleChange} ></input>

                                

                            </div>
                        }



                    })
                }

                
            </div >

            <div>
                    <button className="button" onClick={detailsUpdate} style={{float: "right"}}>Update</button>
            </div>
        </>
    )
}
export default UpdateDoctorDetail;