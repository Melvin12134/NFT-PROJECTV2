import {CgHome} from 'react-icons/cg';
import {CgSearch} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import './Sidebar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {

    const [selected, setSelected] = useState(1);


        const toggleSelected = (index) => {
            setSelected(index)
        }
return (
    
    <div className="container">
        <div className="sidebar">
                <div className="logocontainer">
                    <div className="logo"></div>
                </div>
                <div className="space"></div>
            <div className="menu">
                <ul>
                    <li>
                        <NavLink exact to="/"><CgHome /><div className="text">Home</div></NavLink>
                        </li>
                    <li>
                        <NavLink exact to ="/explore"><CgSearch /><div className="text">Explore</div></NavLink>
                        </li>
                    <li>
                        <NavLink exact to ="/settings"><FiSettings /><div className="text">Settings</div></NavLink>
                    </li>
                </ul>
            </div>
        </div>
         <div className="seperator"></div>
    </div>
    
)

}