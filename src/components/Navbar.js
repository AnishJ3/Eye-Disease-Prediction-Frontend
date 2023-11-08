import { useEffect, useState } from "react";
import Logo from "../images/eyeimg.jpeg"
import User from "../images/user.png"
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";


const Navbar = ({id,name}) =>{

    const nav = useNavigate()
    const [_id,setID] = useState();
    const [_name,setName] = useState();
    const [slider, setSlider] = useState(false);
    
    useEffect(()=>{
        setID(id);
        setName(name);
    })

    const handleClick = () =>{
        setSlider(!slider)
    }

    const handleClick1 = () =>{
        setSlider(false)
    }

    const handleHome = () =>{
        nav('/');
    }

    return(

        <>
            <div className="navbar" >
                <div className="navbar-brand" >
                    <img onClick = {handleHome} className="logo" src={Logo}/>
                    
                </div>

                <ul className="nav-items">
                    
                    <li>Hello {_name}</li>
                    <li><button className="user-btn" onClick={handleClick}>
                        
                        <img className="user-pic" src={User} />
                        {slider && <Slider />}</button></li>
                    
                </ul>
            </div>
        </>

    );
}

export default Navbar;