import React, { useState } from 'react'
import { Link,Navigate } from 'react-router-dom'
import "../Styles/Register.css"
import ApiRegister from './Api'
import { isAuthenticated } from './Authentication'
import LoadingOverlay from './Loading'
import StorageData from './StorageData'

const Register = () => {

    const initalErrors = {
        email: { required: false }, name: { required: false }, password: { required: false }
    }

    const [err, setErr] = useState(initalErrors)

    const [Loading, setLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        let err = initalErrors;
        let hasErrors = false;
        if (Input.name === "") {
            err.name.required = true;
            hasErrors = true;
        }
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
            ApiRegister(Input).then((response) => {
                StorageData(response.data.tokenID);
            }
            )
                .catch((error) => { 
                    if(error.response.data.error.message === "EMAIL_EXISTS"){
                        alert("Email already exists")
                    }

                 })
                .finally(() => { setLoading(false) })
        }
        setErr({...err})
    }

    const [Input, setInput] = useState({
        name: "", email: "", password: ""
    })

    const handleInput = (event) => {
        setInput({ ...Input, [event.target.name]: event.target.value })

    }

    if(isAuthenticated()){
        return <Navigate to="/dashboard" />

    }
    return (
        <>
            <div className="container">
                <div className='title'>
                    REGISTRATION
                </div>
                <div className='form'>
                    <form onSubmit={handleSubmit} action="">
                        <label className='heading'>Name</label>
                        <input type='text' name='name' onChange={handleInput}></input>
                        {err.name.required ? (
                            <div className='err'>Name required *</div>) : null
                        }

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
                            <button>Register</button>
                        </div>
                        <div className="signup">
                            Already Registered? <Link to="/login">Login</Link>
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

export default Register