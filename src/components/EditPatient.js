import { useEffect, useState } from "react";
import Axios from "axios"
import DateObject from "react-date-object";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

var date = new DateObject()

const EditPatient = () =>{

    const [Name,setName] = useState("");
    const [Age, setAge] = useState("");
    const [Email,setEmail] = useState("");
    const [mobNo, setNo] = useState("");
    const [Date, setDate] = useState("");
    let doc = useLocation();
    const docEmail = doc.state.docEmail
    const ID = doc.state.id
    console.log(ID)
    const [initialValue, setInitialValue] = useState({name:"",age:"",email:"",
MobNo:"", docEmail:"", result:""})
    const nav = useNavigate()

    useEffect(()=>{
        Axios.get("https://eye-disease-backend-6ion.onrender.com/getPatient/" + doc.state.id)
        .then((res)=>{
            if(res.status === 200){
                
                // const {name:n,age:a,email:e,MobNo: m,docEmail:de, result:r } = res.data;
                // console.log(n)

                let {name:n, age:a,email:e,MobNo:m, docEmail:de,result:re} = res.data[0]

                 setName(res.data[0].name);setAge(res.data[0].age);
                // setEmail(res.data[0].email);setNo(res.data[0].MobNo);
                
              
                setInitialValue({name:n, age:a,email:e,MobNo:m, docEmail:de, result:re})
                setEmail(e); setNo(m);
                //setInitialValue(res.data[0])
                
                
                //setInitialValue({name,age,email,MobNo,docEmail, result });
                
            }
            else    
                Promise.reject();
        })
        .catch((err) => alert(err));

        
    },[doc.state.id])

    console.log(initialValue)
    const handleSubmit = (e) =>{
        e.preventDefault()

        setDate(date.format())
        
        Axios.put("https://eye-disease-backend-6ion.onrender.com/update-patient/" + ID, {name:Name, age:Age,email:Email,
        MobNo:mobNo,docEmail:docEmail})
        .then((res)=>{
            if(res.status==200)
            {
                console.log(res);
                nav('/main', {state:{docEmail:docEmail}})
            }
            else
            {
                Promise.reject()
            }
        })
        .catch((err) => alert(err))
    
    }

    return(

        <div className="patient-container">

            <div className="patient-title"><span>Edit Patient </span></div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input defaultValue={initialValue.name} type="text" id="name" 
                onChange={e => setName(e.target.value)}></input>

                <label htmlFor="age">Age</label>
                <input defaultValue={initialValue.age} type="text" id="age"
                onChange={e => setAge(e.target.value)}></input>

                <label htmlFor="email">Email</label>
                <input defaultValue={initialValue.email} type="email" id="email"
                onChange={e => setEmail(e.target.value)}></input>

                <label htmlFor="no">Mob No.</label>
                <input defaultValue={initialValue.MobNo} type="text" id="no"
                onChange={e => setNo(e.target.value)}></input>

                <label htmlFor="date">Date of Visit</label>
                <input type="date" id="date"
                onChange={e => setDate(e.target.value)}></input>

                <button type="submit">Submit</button>

            </form>
        </div>
    )

}

export default EditPatient;