import React, { useState } from 'react'
import "../Styles/Register.css"
import LoadingOverlay from './Loading'
const Register = () => {

    const [err, setErr] = useState({
        email: { required: false }, name: { required: false }, password: { required: false }, API: null
    })

    return (
        <>
            <div class="container">
                <div className='title'>
                    REGISTRATION
                </div>
                <div className='form'>
                    <form action='#'>
                        <label className='heading'>Name</label>
                        <input type='text'></input>
                        {err.name.required ? (
                            <div className='err'>Name required *</div>) : null
                        }

                        <label className='heading'>Email</label>
                        <input type='text'></input>
                        {err.email.required ? (
                            <div className='err'>Email required *</div>) : null
                        }
                        <label className='heading'>Password</label>
                        <input type='password'></input>
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
            {err.API ? (
                <LoadingOverlay />) : null
            }
        </>
    )
}

export default Register