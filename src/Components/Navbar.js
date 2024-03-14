import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/navbar.css'
import logo from '../assets/images/Logo.png';
import message from '../assets/images/message-question.png'
import settings from '../assets/images/setting-2.png'
import notification from '../assets/images/notification.png'
import down from '../assets/images/down.png'

const Navbar = ()=>{
    return(
        <div className='navbar'>
            <div className='logo'>
            <img src={logo} alt='Logo'/>
            </div>
            <div className='pages'>
            <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Products</li>
                <li>Orders</li>
                <li>Finance</li>
            </ul>
            </div>
            <div className='utilities'>
            <ul>
                <li><span className='u-n-li'>23</span><img src={notification} alt='notification'/></li>
                <li><img src={settings} alt='Settings'/></li>
                <li>
                <img src={message} alt='Mesages'/></li>
                <li className='u-li'><span className='u-span'></span> Store Name <img className='down' src={down} alt='down'/></li>
            </ul>

            </div>
        </div>
    )
}

export default Navbar;