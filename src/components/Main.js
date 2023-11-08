import Axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import './css/Main.css'
import PatientRecords from "./PatientRecords";
import PastResults from "./PastResults";
import Upload from "./Upload";
import Slider from "./Slider";
import Footer from "./Footer";
import Footer1 from "./Footer1";

const Main = () =>
{

    const [data, setData] = useState([]);
    let doc = useLocation();
    const docEmail = doc.state.docEmail
    const newEmail = docEmail
    const [flag1, setFlag1] = useState(true)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)
    const [docVal ,setDocVal] = useState({name:"",id:"",email:""})
    const [pname, setPName] = useState("")

    const handleChange = (e) =>{

        if(e.target.id == 1)
        {
            setFlag1(true);setFlag2(false);setFlag3(false);
        }
        
    }

    useEffect(()=>{

        Axios.post('https://eye-disease-backend-6ion.onrender.com/findPatient', {docEmail} )
        .then((res) =>{
            if(res.status === 200)
            {
                setData(res.data)
            }
        })
        .catch(err=>alert(err))

    },[])

    useEffect(() =>{
        Axios.get("https://eye-disease-backend-6ion.onrender.com/custom/"  + newEmail)
        .then((res) =>{
            if(res.status === 200)
            {
                const {name,_id, email} = res.data;
                setDocVal({name,_id, email})
                console.log(res.data)
            }
            else
            {
                Promise.reject()
            }
        })
        .catch((err) => alert(err))

    }, [])

    return(

        <>
            <Navbar name={docVal.name} />

            <div className="main-container">
                <Sidebar handleChange={handleChange}/> 

                <div className="data-container">

                    {
                        flag1 && <PatientRecords data={data} setFlag1 = {setFlag1}  
                        
                        setFlag2 = {setFlag2}  setFlag3 = {setFlag3}  setPName={setPName} docEmail={docEmail} />
                    }
                    {
                        flag2 && <Upload name={docVal.name} pname={pname}  />
                    }
                    

                </div>

            </div>

            <Footer1 />
        
        </>
        
    )


}

export default Main;