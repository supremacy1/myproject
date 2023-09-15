import React,{Table, Tag} from "react";
import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircle, faSearch} from '@fortawesome/free-solid-svg-icons'
import m6 from '../images/m6.svg'
import Gpp from '../images/Gpp.svg'
import G3 from '../images/G3.svg'
import G4 from '../images/G4.svg'
// import a from './components/images/a.jpg'
// import c from '../images/c.png'
// import a from '../images/a.jpg'
// import d from '../images/d.jpg'
import { render } from "@testing-library/react";
import Tablet from "./tab";

const Main = () => {




    return (
        <>
            <div className="maincontainer">
                <div className="nav">
                    <h2>Hey, Dustin<h6>Welcome back, nice to see you again? </h6></h2>
                    
                    
                        <div className="got">
                            <label>
                        <span className="button"><FontAwesomeIcon icon={faSearch} className="icon"/>
                        </span>
                        <input type="text"  placeholder="Search Here " ></input>
                        {/* <button><FontAwesomeIcon icon={faSearch} className="icon"/></button> */}
                    </label>
                    </div>
                
                    </div>
                    {/* <div className="d">
                    
                    <form><input type="text" placeholder="Search Here"></input>
                    </form>
                    </div> */}
                    <div className="images">
                    <div className="img">
                    <img src={G4} className="App-logo" alt="logo" />
                    <h3>Real Wild Cyclist</h3>
                    <h6>We are the wildest Cyclist</h6>
                    
                    </div>
                    <div className="img">
                    <img src={G3} className="App-logo" alt="logo" />
                    <h3>Yoga Forces</h3>
                    <h6>Welcome to the biggeest</h6>
                    </div>
                    <div className="img">
                    <img src={m6} className="App-logo" alt="logo" />
                    <h3>Skater Boys<h6>The best state of skaters</h6></h3>
                    </div>
                    </div>
                    <Tablet />
                    {/* <div className="footer">
                        <h4>Friends Rank</h4>
                        <table>
                            <th>Rank</th>
                            <th>Names</th>
                            <th>Category</th>
                            <th>Points</th>
                            <tr>
                                <td>1</td>
                                <td>Mamong Ironman</td>
                                <td>Skater</td>
                                <td>2,277</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mamong Ironman</td>
                                <td bgcolor="red" border='20px solid black' border-radius="30px">Skater</td>
                                <td>2,277</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mamong Ironman</td>
                                <td className="hy">Skater</td>
                                <td>2,277</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mamong Ironman</td>
                                <td>Skater</td>
                                <td>2,277</td>
                            </tr>
                        </table>
                    </div> */}


            </div>
        </>
    )
}


export default Main;