import { useEffect, useState } from "react";
import Axios from "axios"
import DateObject from "react-date-object";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

var date = new DateObject()

const NewPatient = () =>{

    const [name,setName] = useState();
    const [age, setAge] = useState();
    const [email,setEmail] = useState();
    const [MobNo, setNo] = useState();
    const [Date, setDate] = useState();
    let doc = useLocation();
    const docEmail = doc.state.docEmail
 

    
    const nav = useNavigate()

    

    const handleSubmit = (e) =>{
        e.preventDefault()

        setDate(date.format())
        
        Axios.post('https://eye-disease-backend-6ion.onrender.com/newPatient', {name,age,email,MobNo,Date, docEmail, result:""})
        .then(result =>{

            console.log(result);
        }) 
        .catch(err =>console.log(err))    

        nav('/main', {state:{docEmail:docEmail}})
    
    }

    return(

        <div className="patient-container">

            <div className="patient-title"><span>New Patient </span></div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" 
                onChange={e => setName(e.target.value)}></input>

                <label htmlFor="age">Age</label>
                <input type="text" id="age"
                onChange={e => setAge(e.target.value)}></input>

                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                onChange={e => setEmail(e.target.value)}></input>

                <label htmlFor="no">Mob No.</label>
                <input type="text" id="no"
                onChange={e => setNo(e.target.value)}></input>

                <label htmlFor="date">Date of Visit</label>
                <input type="date" id="date"
                onChange={e => setDate(e.target.value)}></input>

                <button type="submit">Submit</button>

            </form>
        </div>
    )

}

export default NewPatient;