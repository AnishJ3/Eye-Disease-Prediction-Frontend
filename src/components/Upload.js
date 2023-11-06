import './css/Main.css'
import * as tf from '@tensorflow/tfjs';
import { useState,useEffect } from 'react';
import './css/Upload.css'
import UploadForm from './UploadForm';
import './mymodel/model.json'
import Prediction from './Prediction';
import Axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Upload = ({name, pname}) =>{

    const DocName = name;
    let doc = useLocation();
    // let Name = doc.state.Pname;
    console.log(pname)

    const [model, setModel] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [predictedClassLabel, setPredictedClassLabel] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [col,setCol] = useState("")
    const [patientname, setPatientName] = useState("")
    const [full ,setFull] = useState(false);
    var t = false;


    useEffect(()=>{

        const loadModel = async() =>
        {
            const model = await tf.loadGraphModel("Model2/model.json");  
            setModelLoaded(true);
            setModel(model);
        };

        loadModel();
    },[])

    const handleUpload = async( file) =>{

        if(!model)
        {
            console.log("Model not Loaded")
            return;
        }
        const imageUrl = URL.createObjectURL(file);
        const image = new Image();
        image.src = imageUrl;
        

        image.onload= async() =>{
            
            const img = await tf.browser.fromPixels(image).resizeNearestNeighbor([224,224]).toFloat();
            // const resizedImg = img.reshape([1, 224, 224, 3]);

            // const normalizedImg = resizedImg.div(255.0);
            // // Normalize image to range [0, 1]
                        
            // Expand dimensions to match model input shape (224x224x3)
            
            const better = img.expandDims(0);
            // Make prediction  
            const predictions = await model.predict(better);

            predictions.data().then(probabilities => {
                // Convert the probabilities to a regular array
                const probabilitiesArray = Array.from(probabilities);
                // Find the index of the highest probability
                const predictedClassIndex = probabilitiesArray.indexOf(Math.max(...probabilitiesArray));
                // Get the class label corresponding to the predicted index
                const classLabels = ['Cataract', 'Diabetic Retinopathy', 'Glacouma', 'Normal']; // Replace with your actual class labels
                setPredictedClassLabel(classLabels[predictedClassIndex]);
                // Display the predicted class label
                if(predictedClassLabel == "normal")
                {
                    setCol("green")
                }
                else
                {
                    setCol("red")
                }
                
              });
  
            // Convert tensor to JavaScript array
            setPredictions(predictions);
            setSubmitted(true)
            setFull(true)

        }
        
    }
    
    if(submitted && full && !t && predictedClassLabel!=="")
    {
        setFull(false)
        t = true;
        Axios.post('https://eye-disease-backend-6ion.onrender.com/changeResult', {PName:pname,result:predictedClassLabel})
            .then(result =>{
                console.log(result)
            })
            .catch(err => console.log(err))
    }
    
    return(

        <>
            <span className='head-title'>Upload Images</span>
            <div className='results-pic'>

                <UploadForm handleUpload={handleUpload} setSubmitted = {setSubmitted} />
                {modelLoaded &&  submitted && 
                    <span className='prediction-label' >
                        Predicted Class : <span style={{color:{col}}}>{predictedClassLabel}</span>
                    </span>
                }
            </div>
        </>
    )
}

export default Upload;