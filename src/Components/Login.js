import React, { useState } from 'react'
import "../Styles/Login.css"
import { Link, Navigate } from 'react-router-dom'
import { LoginApi } from './Api'
import { isAuthenticated } from './Authentication'
import LoadingOverlay from './Loading'
import StorageData from './StorageData'
const Login = () => {
    const initalErrors = {
        email: { required: false }, password: { required: false }
    }

    const [err, setErr] = useState(initalErrors)

    const [Loading, setLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        let err = initalErrors;
        let hasErrors = false;

        if (Input.email === "") {
            err.email.required = true;
            hasErrors = true;
        }
        if (Input.password === "") {
            err.password.required = true;
            hasErrors = true;
        }


        if (!hasErrors) {
            setLoading(true);
            LoginApi(Input).then((response) => {
                StorageData(response.data.idToken);
                
            }
            )
                .catch((error) => {
                    if (error.response.data.error.message === "INVALID_PASSWORD") {
                        alert("Password is incorrect")
                    }
                    if (error.response.data.error.message === "EMAIL_NOT_FOUND") {
                        alert("No user is Registered with this email.")
                    }

                })
                .finally(() => { setLoading(false) })
        }
        setErr({...err})
    }

    const [Input, setInput] = useState({
        email: "", password: ""
    })

    const handleInput = (event) => {
        setInput({ ...Input, [event.target.name]: event.target.value })

    }

    if (isAuthenticated()) {
        return <Navigate to="/dashboard" />

    }
    return (
        <>
            <div className="container">
                <div className='title'>
                    LOGIN
                </div>
                <div className='form'>
                    <form onSubmit={handleSubmit} action="">

                        <label className='heading' >Email</label>
                        <input type='text' name='email' onChange={handleInput}></input>
                        {err.email.required ? (
                            <div className='err'>Email required *</div>) : null
                        }
                        <label className='heading' >Password</label>
                        <input type='password' name='password' onChange={handleInput}></input>
                        {err.password.required ? (
                            <div className='err'>Password required *</div>) : null
                        }

                        <div className="btn" id="btn2">
                            <button disabled={Loading}>Login</button>
                        </div>
                        <div className="signup">
                            New to this application? <Link to="/register">Register</Link>
                        </div>
                    </form>

                </div>

            </div>
            {Loading ?
                (<div role='status'><LoadingOverlay /></div>) : null
            }
        </>
    )
}

export default Login