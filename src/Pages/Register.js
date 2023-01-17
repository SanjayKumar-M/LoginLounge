import React from 'react'
import "../Styles/Register.css"
function Register() {
    return (
        <div className='content'>
            <div class="container">
                <div class="name">Register Now</div>
                <form action="#">
                    <div class="data">
                        <label for="name">Name</label>
                        <input type="text" />

                        <label for="email">Email</label>
                        <input type="email" />

                        <label for="password">Password</label>
                        <input type="password" />

                       
                    </div>


                    <div class="btn" id="btn2">
                        <button>Register</button>
                    </div>
                    <div class="signup">
                        Already Registered? <a href="index.html">Login</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register