import React, { useState } from 'react'
import "../Styles/Register.css"
import LoadingOverlay from './Loading'
const Register = () => {

    const initalErrors = {
        email: { required: false }, name: { required: false }, password: { required: false }, API: null
    }

    const [err, setErr] = useState(initalErrors)

    const [loading, setLoading] = useState(false)

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

        setErr(err)
        if (!hasErrors) {
            setLoading(true);
            //call API here
            setLoading(false);
        }
    }

    const [Input, setInput] = useState({
        name: "", email: "", password: ""
    })

    const handleInput = (event) => {
        setInput({ ...Input, [event.target.name]: event.target.value })

    }

    return (
        <>
            <div class="container">
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
                       
                        <div class="btn" id="btn2">
                            <button>Register</button>
                        </div>
                        <div class="signup">
                            Already Registered? <a href="index.html">Login</a>
                        </div>
                    </form>

                </div>

            </div>
            {loading ? (<div>
                <LoadingOverlay /></div>) : null
            }
        </>
    )

}

export default Register