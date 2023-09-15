import React, { useState } from "react";
import './lift.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faM, faDashboard, faClock, faTag,faDroplet,faBookmark, faCalendar, faCheck, faFootball, faSoccerBall, faGamepad, faMusic, faChalkboardTeacher, faMessage, faEnvelope, faBell, faCircle} from '@fortawesome/free-solid-svg-icons'
import Chat from "./chat";
import m1 from '../images/m1.svg'
import m3 from '../images/m3.svg'
import img from '../images/img.png'
import vectora from '../images/Vectora.svg'



const Liftbar = () =>{
const[isShaking, setIsShaking] = useState(false);
const handleClick = () =>{
    setIsShaking(true);
}
setTimeout(() => {
    setIsShaking(false);
}, 1000);



    return(
        <>
         

        <div className="liftcontainer">
            <div className="icons">
            <img src={m3} alt="logos"></img>  
        <img src={m1} alt="logos"></img>
        <div className="hut">
        <img src={img} className="hit" alt="logos"></img>
            <h6> Supremacy</h6>
            <img src={vectora} className="hit1" alt="logos"></img>
  
            </div>
           
        </div>
        <div className="pop">
            <div className="ch">
            <h4>chats</h4>
            <h5>14</h5>
            </div>
            <div className="d">
        <FontAwesomeIcon icon={faCircle} className="icon"/><h4>Ironmen<h6>When will the event be held? </h6></h4>
        </div><br></br>
        <div className="a">
        <FontAwesomeIcon icon={faCircle} className="icon"/>
        <h4>Araina Grande<h6>Alrigth then see you there</h6></h4>
        </div><br></br>
        <div className="b">
        <FontAwesomeIcon icon={faCircle} className="icon"/>
        <h4>Araina Grande<h6>Come and join to my party </h6></h4>
        </div><br></br>
        <div className="c">
        <FontAwesomeIcon icon={faCircle} className="icon"/>
        <h4>Araina Grande<h6>After that you can see me </h6></h4>
  </div>
                           
        </div>
        <Chat />
        </div>
        </>
    )
}


export default Liftbar;