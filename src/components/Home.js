import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Axios from "axios"
import { useNavigate } from "react-router-dom";
import './css/Home.css'
import Footer from "./Footer";
import Footer1 from "./Footer1";

const Home = () =>
{
    const [initialValue,setInitialValue] = useState({name:"",id:"",email:""});
    const {email} = useParams();
    const newE = JSON.parse(email);
    const newEmail = newE.email;
 
    const nav = useNavigate();
    
    
    
    useEffect(() =>{

        Axios.get("https://eye-disease-backend-6ion.onrender.com/custom/"  + newEmail)
        .then((res) =>{

            if(res.status === 200)
            {
                const {name, _id, email} = res.data;
                setInitialValue({name, _id,email})
               
            
            }
            else
                Promise.reject()
        })
        .catch((err) => alert(err))
        

    },[])

    const handleClick =() =>{

        nav('/patient', {state:{docEmail:initialValue.email}})
    }

    const handleMain = () =>{
        nav('/main', {state:{docEmail:initialValue.email}})
    }

    return(

        <>
            <Navbar name={initialValue.name} id={initialValue.id}/>

            <div className="container-home">

                <div className="item-home">

                    <button className="newpatient-btn" onClick={handleClick}>

                       Register New Patient

                    </button>
                </div>

                <div className="item-home">

                    <button className="existing-btn" onClick={handleMain}>
                        View Existing Patients

                    </button>
                </div>
            </div>

            <Footer1 />
            
        </>
    );
}

export default Home;