import React from 'react'
import '../Styles/Navigation.css'
import { isAuthenticated } from './Authentication'
import { Link } from 'react-router-dom'
const Navigation = (props) => {
    return (

        (<nav>
            <h1> LOGIN LOUNGE</h1>
            <ul>
                {isAuthenticated() ? <li>
                    <Link className='navi' to="/dashboard">Dashboard</Link>
                </li> : null}
                {!isAuthenticated() ? <li>
                    <Link className='navi' to="/register">Register</Link>
                </li> : null}
                {isAuthenticated() ? <li>
                    <a className="navi"  onClick={props.logoutUser} style={{cursor:"pointer"}} >Logout</a>
                </li> : null}
            </ul>
        </nav>)

    )
}

export default Navigation