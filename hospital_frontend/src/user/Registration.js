import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        email: "",
        fullName: "",
        password: "",
       
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(" value = ", e.target.value)
        setUser({
            ...user,
            [name]: value
        })
    }


    const register = () => {
        const { username, email, fullName, password } = user
        if (username && email && fullName && password) {
            alert("Posted")
            axios.post("http://localhost:8000/Api/v1/users/register", user).then(res => console.log(res))
            navigate("/home")
        } else {
            alert("invalid input")
        }
    }

    return (
        <>
            <div className="register">
                <h1>Registration</h1>

                <div className="input">
                    
                        <input type="text" name="username" value={user.username} placeholder="Enter user name" onChange={handleChange}></input><br />
                        <input type="text" name="email" value={user.email} placeholder="Enter email" onChange={handleChange}></input><br />
                        <input type="text" name="fullName" value={user.fullName} placeholder="Enter full name" onChange={handleChange}></input><br />
                        <input type="text" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input><br />

                        
                    
                </div>
                <div className="button" onClick={register}>Register</div>
                <Link to="/login" className="link1"><div className="button">Login</div></Link>

            </div>

        </>
    )
}

export default Registration;