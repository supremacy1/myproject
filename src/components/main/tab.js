import React,{Table, Tag} from "react";
import './tab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircle, faDotCircle, faDroplet, faHandDots, faSearch} from '@fortawesome/free-solid-svg-icons'
 import Polygon from '../images/Polygon 1.jpg'
 import E1 from '../images/E1.svg'
 import E2 from '../images/E2.svg'
 import E3 from '../images/E3.svg'
 import E4 from '../images/E4.svg'
 import Group77 from '../images/Group 77.svg'
 import Group131 from '../images/Group 131.svg'

const Tablet = () =>{
    const data = [
        { Rank: 1, Name: 'Andrew', catogory: 'skarter', point: 2220},
        { Rank: 2, Name: 'Andrew', catogory: 'skarter', point: 2220},
        { Rank: 3, Name: 'Andrew', catogory: 'skarter', point: 2220},
        { Rank: 4, Name: 'Andrew', catogory: 'skarter', point: 2220},
    
    
    ]



    return(
        <div className="footer">
        {/* <h4>Friends Ranking</h4>
    <table>
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>catogory</th>
            <th>points</th>

        </tr>
        {data.map((val, key) => {
            return(
                <tr key={key}>
                    <td>{val.Rank}</td>
                    <td><FontAwesomeIcon icon={faCircle} className="icon"/>{val.Name}</td>
                    <td><FontAwesomeIcon icon={faCircle} className="icond"/>{val.catogory}</td>
                    <td>{val.point}</td>

                </tr>
            )
        })}
    </table> */}
    <div className="footer">
                        <h4>Friends Rank<img src={Group77}></img></h4>
                        <table>
                            <th>Rank</th>
                            <th className="pls">Names</th>
                            <th>Category</th>
                            <th>Points</th>
                            <tr>
                                <td><img src={Polygon} className="rit"></img></td>
                                <td className="got"><FontAwesomeIcon icon={faCircle} className="i"/>Mamang Ironmen<img src={Group131} className="bal"></img></td>
                                <td bgcolor="#E7F7F8"  className="pit" ><img src={E1} className="ball"></img>Skater</td>
                                <td>2.140</td>
                            </tr><br></br>
                            <tr>
                                <td>2</td>
                                <td className="got"><FontAwesomeIcon icon={faCircle} className="ic"/>Ariana Grande</td>
                                <td bgcolor="#DAFDFF" className="pit"><img src={E2} className="ball"></img>Cyclist</td>
                                <td>1.814</td>
                            </tr><br></br>
                            <tr>
                                <td>3</td>
                                <td className="got"><FontAwesomeIcon icon={faCircle} className="ico"/>Trent Alexander Arnold</td>
                                <td  bgcolor="#E7F7F8"  className="pit"><img src={E4} className="ball"></img>Yogas</td>
                                <td>1.620</td>
                            </tr><br></br>
                            <tr>
                                <td>4</td>
                                <td className="got"><FontAwesomeIcon icon={faCircle} className="icos"/><span></span>Shakira Wakawaka</td>
                                <td bgcolor="#FFECE8" className="pit"><img src={E3} className="ball"></img>Skater</td>
                                <td>1.280</td>
                            </tr>
                        </table>
                    </div>

    </div>
    )
}
export default Tablet;