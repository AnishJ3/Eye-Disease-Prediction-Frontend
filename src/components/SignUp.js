import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav2 from "./Nav2";
import Foot2 from "./Foot2";

const SignUp = () =>
{
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        Axios.post('https://eye-disease-backend-6ion.onrender.com/register',{name,email,password})
        .then(result=> {
            console.log(result);
            navigate('/login')
        })
        .catch(err=>console.log(err))
    }

    return(
        <>
        
            <Nav2 />

            <div className="register-body">
            <div className = "register-container">

                <h1 className="title"> Sign Up </h1>
                <form onSubmit={handleSubmit}>

                    <div className="input-2">

                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>

                        <input 
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        onChange={(e) =>setName(e.target.value)}
                        />

                    </div>

                    <div className="input-1">

                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>

                        <input 
                        type="text"
                        placeholder="Enter Name"
                        name="email"
                        onChange={(e) =>setEmail(e.target.value)}
                        />

                    </div>

                    <div className="input-2">

                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>

                        <input 
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={(e) =>setPassword(e.target.value)}
                        />

                    </div>

                    <button className="register">Register</button>
                    
                    <Link to="/login" className="login-redirect">Already have an account?</Link>

                </form>

            </div>

            </div>
            <Foot2 />
        </>


    );

}

export default SignUp;