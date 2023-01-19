import React,{useState} from 'react'
import "../Styles/Login.css"
import { Navigate } from 'react-router-dom'
import ApiRegister from './Api'
import { isAuthenticated } from './Authentication'
import LoadingOverlay from './Loading'
import StorageData from './StorageData'
const Login = () => {
    const initalErrors = {
        email: { required: false },  password: { required: false }
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
            ApiRegister(Input).then((response) => {
                StorageData(response.data.tokenID);
            }
            )
                .catch((error) => {
                    if (error.response.data.error.message === "EMAIL_EXISTS") {
                        alert("Email already exists")
                    }

                })
                .finally(() => { setLoading(false) })
        }
        setErr(err)
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
                            <button>Login</button>
                        </div>
                        <div className="signup">
                            New to this application? <a href="index.html">Register</a>
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