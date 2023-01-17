import React from 'react'
import "../Styles/Register.css"
function Register() {
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
                        <div className='err'>Name required *</div>

                        <label className='heading'>Email</label>
                        <input type='text'></input>
                        <div className='err'>Email required *</div>

                        <label className='heading'>Password</label>
                        <input type='password'></input>
                        <div className='err'>Password required *</div>

                        <div class="btn" id="btn2">
                            <button>Register</button>
                        </div>
                        <div class="signup">
                            Already Registered? <a href="index.html">Login</a>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Register