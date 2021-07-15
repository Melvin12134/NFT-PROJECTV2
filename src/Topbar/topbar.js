import { Theme } from './Theme/Theme';
import './Topbar.css';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import { Login } from './Login/Login';
import {useState, useRef, useEffect} from 'react';



export const Topbar = () => {




const [isPopup, setIsPopup] = useState(false);

let menuRef = useRef();

useEffect (() => {
    document.addEventListener("mousedown", (event) => {
        if (!menuRef.current.contains(event.target)) {
            setIsPopup(false);
        }
    })
})

    return (
        <div ref={menuRef}>
            <div className="topcontainer">
                <div className="topbar">
                    <div className="topcontent">
                        <button onClick={() => setIsPopup(!isPopup)} className="login-btn">{isPopup === false ? "Login" : "Close"}</button>
                            <div className="seperator-three"></div>
                        {/*<button className="upload-btn"><AiOutlineCloudUpload /></button>
                            <div className="seperator-three"></div>*/}
                        <Theme />
                            <Login trigger={isPopup}></Login>
                    </div>
                </div>
              <div className="seperator-two"></div>
            </div>
         </div>
    )
}