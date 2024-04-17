import React, {useState} from "react";
import './right.css'
// import * as Unicons from '@iconscout/react-unicons';
import Mask from '../images/Mask.svg'
import Group from '../images/Group.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDashboard, faClock, faTag, faBars, faBookmark, faCalendar, faCheck, faFootball, faSoccerBall, faGamepad, faMusic, faChalkboardTeacher, faXmark } from '@fortawesome/free-solid-svg-icons'
// import Home from '@iconscout/react-unicons/icons/uil-react'

import vector from '../images/Vector.jpg'
import Gpp from '../images/Gpp.svg'

import G5 from '../images/G5.svg'
import G6 from '../images/G6.svg'
import G7 from '../images/G7.svg'
import G8 from '../images/G8.svg'
import G9 from '../images/G9.svg'


import Gg from '../images/Gg.svg'
import Gk from '../images/Gk.svg'
import Gp from '../images/Gp.svg'
import Gr from '../images/Gr.svg'
import Gt from '../images/Gt.svg'


const Rightbar = () => {
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };



    return (
        <>

            <div className="rightcontainer">
                <h1>  <img src={vector} alt="logos"></img>Sedboi.euy</h1>
                <div className="menu-icon" onClick={toggleMenu} >
                    <FontAwesomeIcon icon={!showMenu ? faBars : faXmark} /></div>
                    {showMenu && (
                <ul className="list">
                    

                    <a hover><li ><img src={Group} className="sit" alt="logo" />Home</li></a>
                    <a hover><li><img src={G9} className="sit" alt="logo" />Timeline</li></a>
                    <a hover> <li>  <img src={Gg} className="sit" alt="logo" />Community</li></a>
                    <a hover><li><img src={Gt} className="sit" alt="logo" />Discovery</li></a>
                    <a hover><li><img src={Gr} className="sit" alt="logo" />Friends</li></a>
                    <a hover> <li> <img src={Gk} className="sit" alt="logo" />Bookmark</li></a>
                    <a hover> <li><img src={Gp} className="sit" alt="logo" />Event</li></a>
                    <a hover><li> <img src={Gpp} className="sit" alt="logo" />Discussion</li></a>
                </ul>
                    )}
                

                {showMenu && (
                    
                <ul className="list1">
                    <h3>Category</h3>
                    <a hover><li ><img src={G8} className="sit" alt="logo" />Sport</li></a>
                    <a hover> <li> <img src={G5} className="sit" alt="logo" />Gaming</li></a>
                    <a hover> <li> <img src={G6} className="sit" alt="logo" />Music</li></a>
                    <a hover> <li> <img src={G7} className="sit" alt="logo" />Tech & Science</li></a>

                </ul>
                    )}
            </div>
        </>
    )
}


export default Rightbar;