import React, { useEffect, useState } from 'react'
import '../Styles/Dashboard.css'
import { UserDetailsApi } from './Api'
import LoadingOverlay from './Loading'
const Dashboard = () => {
    const [Detail, setDetail] = useState({ name: "", email: "", localId: "" })
    useEffect(()=>{
        UserDetailsApi().then((response)=>{
            setDetail({
                name: response.data.users[0].displayName,
                email: response.data.users[0].email,
                localId: response.data.users[0].localId
            })
        })
    })
    return (
        <div>
            <div className='dash'>Dashboard</div>
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