import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewDoctorDetail = () => {


    const [doctors, setDoctors] = useState([])


    const doctorDetails = async () => {

        const response = await axios.get("http://localhost:8000/Api/v1/doctors/view");

        setDoctors(response.data.data)
    }
    useEffect(() => {
        doctorDetails();
    }, [])

    return (
        <>
            <div className="doctorDetail my-2" >






                <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th className="px-2">Doctor's Name</th>
                            <th className="px-2">Department</th>
                            <th className="px-2">Phone Number</th>
                            <th className="px-2">Email</th>
                            <th className="px-2">Joined Date</th>
                            <th className="px-2">Marrital Status</th>
                            <th className="px-2">House No/Ward No</th>
                            <th className="px-2">Address</th>
                        </tr>
                    </thead>

                    <tbody>


                        {
                            doctors.map((item) => (
                                <tr>
                                    <td className="py-1 px-3">{item.fullname}</td>
                                    <td className="py-1 px-3">{item.department}</td>
                                    <td className="py-1">{item.phone}</td>
                                    <td className="py-1">{item.email}</td>
                                    <td className="py-1 px-3">{item.joined}</td>
                                    <td className="py-1 px-3">{item.mstatus}</td>
                                    <td className="py-1">{item.roomno}</td>
                                    <td className="py-1">{item.address}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default ViewDoctorDetail;