import React, { useState } from 'react'
import "../Styles/Register.css"
import LoadingOverlay from './Loading'

const Register = () => {

    const initalErrors = {
        email: { required: false }, name: { required: false }, password: { required: false }, API: null
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

        setErr(err)
        if (!hasErrors) {
            setLoading(true);
            //call API here
            apiCall(Input, (error, response) => {
                if (error) {
                    // handle error
                } else {
                    // handle success
                }
                setLoading(false);
            });
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
                            Already Registered? <a href="index.html">Login</a>
                        </div>
                    </form>

                </div>

            </div>
            {Loading ? 
                (<div role='status'><LoadingOverlay /></div> ): null
            }
        </>
    )

}

export default Register