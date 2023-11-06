
import { useState } from "react";
import './css/Upload.css'


const UploadForm = ({handleUpload, setSubmitted}) =>{

    const[file, setFile] = useState(null);
    const [url ,setURL] = useState();
    const [ avail, setAvail] = useState(false);
    const [patientName , setPatientName] = useState("")

    const handleChange = (e) =>{
        setFile(e.target.files[0])
        setURL(URL.createObjectURL(e.target.files[0]));
        setAvail(true)
        setSubmitted(false);
    }

    const handleSubmit = async(e) =>{
         e.preventDefault();
         console.log(patientName)
         if(file)
         {
            await handleUpload(file);
         }
    }

    const handleName = (e) =>{

        setPatientName(e.target.value)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>

                    {avail && <img className="img-preview" src={url}>

                    </img>}
                    <input type="file" onChange={handleChange} name="upload-img" required/>
                    <button type="submit" className="upl-btn">Upload Image</button>
            </form>
        </>
    )

}

export default UploadForm;