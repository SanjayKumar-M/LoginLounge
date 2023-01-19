import React, { useEffect, useState } from 'react'
import '../Styles/Dashboard.css'
import Navigation from './Navigation'
import { UserDetailsApi } from './Api'
import LoadingOverlay from './Loading'
import { Logout, isAuthenticated } from './Authentication'
import { Navigate, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [Detail, setDetail] = useState({ name: "", email: "", localId: "" })
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated()) {
            UserDetailsApi().then((response) => {
                setDetail({
                    name: response.data.users[0].displayName,
                    email: response.data.users[0].email,
                    localId: response.data.users[0].localId
                })
            })
        }

    }, [])

    const logoutUser = () => {
        Logout()
        navigate('/login')
    }
    if (!isAuthenticated()) {
        return <Navigate to='/login' />

    }
    return (
        <div>
            <Navigation logoutUser={logoutUser} />

            {Detail.name && Detail.email && Detail.localId ?
                (<>
                    <div className='dashcontainer'>


                        <div className='hello'>
                            Hello <span>{Detail.name}</span>, Welcome to LOGIN LOUNGE
                        </div>
                        <div className='idtoken'>
                            Your ID is <span>{Detail.localId}</span>
                            And good email <span>{Detail.email}</span> !!
                        </div>

                    </div>
                </>) : <LoadingOverlay />
            }


        </div>

    )
}

export default Dashboard