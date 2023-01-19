import React from 'react'
import '../Styles/Dashboard.css'
const Dashboard = ()=> {
  return (
    <div>
        <div className='dash'>Dashboard</div>
        <div className='dashcontainer'>
                <div className='hello'>
                    Hello <span>UserName</span>, Welcome to LOGIN LOUNGE
                </div>
                <div className='idtoken'>
                    Your ID is <span>Blablabla</span>
                </div>
        </div>


    </div>
   
  )
}

export default Dashboard