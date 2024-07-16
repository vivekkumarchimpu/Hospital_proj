import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const LoginUser = () => {
    const navigate = useNavigate()
    

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        })

    }
    const login = () => {
        const {username, password} = user
        if(username && password) {
            axios.post("http://localhost:8000/Api/v1/users/login", user).then(res => alert(res.data.message))

            navigate("/login/patientdetails")            
        } else {
            alert("Invailed Username or Password")
        }
    }

    return(
        <>
           <div className="container">
        
                <div className="input user">
                <h2 style={{color: "white", fontFamily: "serif"}}>User login</h2>
                    <hr className="h-line"></hr>
                    <label className="label">UserName:</label>
                    <input type="text" name="username"  placeholder="Enter username" value={user.username} onChange={handleChange}></input><br/>
                    <label className="label">Password :</label>
                    <input type="password" name="password" placeholder="Enter password" value={user.password} onChange={handleChange} ></input><br/><br/>
                    <div className="user-btn">
                    <button className="home mx-2 user-bt">Home</button>
                    <button className="login mx-2 user-bt" onClick={login}> Login</button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginUser;