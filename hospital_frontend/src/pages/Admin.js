import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate()
    

    const [admin, setAdmin] = useState({
        username:"",
        password:""
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        
       
        setAdmin({
            ...admin,
            [name]:value
        })
        
    }
    const login = () =>{
        const {username, password} = admin
        if(username && password){
            axios.post("http://localhost:8000/Api/v1/admins/loginadmin", admin)
            .then(res => alert(res.data.message))
            
            navigate("/admin/adminportal")

        } else {
            alert("Invailed username or password")
        }           
    }

    return (
        <>
            <div className="container">
                <div className="row admin-header">
                    Admin
                </div>
                <div className="input admin">
                <h2 style={{color: "white", fontFamily: "serif"}}>Admin login</h2>
                    <hr className="h-line"></hr>
                    <label className="label">UserName:</label>
                    <input type="text" name="username" value={admin.name} placeholder="Enter username" onChange={handleChange}></input><br/>
                    <label className="label">Password :</label>
                    <input type="password" name="password" value={admin.name} placeholder="Enter password" onChange={handleChange}></input><br/><br/>
                    <div className="admin-btn">
                    <button className="home mx-2 admin-bt">Home</button>
                    <button className="login mx-2 admin-bt" onClick={login}> Login</button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Admin;