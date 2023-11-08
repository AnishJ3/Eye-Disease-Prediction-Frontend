import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios"
import fundus from '../images/fundus-img.webp'
import './css/nav2.css'
import Nav2 from './Nav2';
import Foot2 from './Foot2';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('https://eye-disease-backend-6ion.onrender.com/login', { email, password })
            .then(result => {
                console.log(result);

                if (result.data === "Success") {
                    navigate('/home/' + JSON.stringify({ email }))
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
        
            <Nav2 />
            <div className='login-body'>

                <div className='login-content'>
                    <img className='login-image' src={fundus} />
                    <div className="login-container">

                        <h1 className="title"> Login </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-1">

                                <label htmlFor="email">
                                    <strong>Email</strong>
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                            </div>

                            <button className="register">Login</button>
                            <Link to="/register" className="login-redirect">Don't have an account?</Link>

                        </form>

                    </div>
                </div>


            </div>
            <Foot2 />
        </>
    );
}

export default Login;