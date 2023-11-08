import Footer from "./Footer";
import './css/landing.css'
import Logo from '../images/eyeimg.jpeg'
import gla from '../images/glac.jpeg'
import diabetic from '../images/diabetic.jpeg'
import cataract from '../images/cataract.jpeg'
import { useState } from "react";
import eyecare from '../images/eyecare.avif'
import eyetest from '../images/eyetest.jpg'
import { useNavigate } from "react-router-dom";


const Landing = () => {
    const nav = useNavigate();

    const [arr, setArr] = useState([false, false, false])
    const [learn, setLearn] = useState([false, false, false])

    const handleLogin = () => {
        nav('/login');
    }
    const handleSignup = () => {
        nav('/register')
    }

    const handleRead = (e) => {

        if (e.target.id == 1) {
            setArr([true, false, false])
        }
        if (e.target.id == 2) {
            setArr([false, true, false])
        }
        if (e.target.id == 3) {
            setArr([false, false, true])
        }
    }

    const handleLess = (e) => {
        setArr([false, false, false])
    }

    const handleLearn = (e) => {

        if (e.target.id == 1) {
            setLearn([true, false, false]);
        }
        if (e.target.id == 2) {
            setLearn([false, true, false]);
        }
        if (e.target.id == 3) {
            setLearn([false, false, true]);
        }
    }

    const closeLearn = () => {
        setLearn([false, false, false])
    }

    return (

        <div className="container-container">

            <div className="landing-nav">

                <div className="navbar-brand" >
                    <img className="logo" src={Logo} />
           
                </div>

                <div className="landing-items">
                    <a href="#about" className="about-us">About Us</a>
                    <button className="landing-login" onClick={handleLogin}>LOGIN</button>
                    <button className="landing-signup" onClick={handleSignup}>SIGNUP</button>
                </div>

            </div>

            <section className="welcome">
                <div className="welcome-container">
                    <img className="welcome-image" src={eyecare} />
                    <p className="welcome-text">Welcome to Kaustubh Eye Care!</p>
                    <p className="welcome-subtext">India's Leading Eye Disease Prediction Center</p>
                </div>
            </section>


            <section className="speciality">

                <p className="speciality-title">Our Specialities</p>

                <div className="speciality-items">

                    <div className="speciality-card">
                        <img className="card-pic" src={gla} />
                        <p className="card-title">
                            Glaucoma
                        </p>
                        <p className="card-text">Our team provides the earliest
                            diagnosis for Glaucoma looking at fundus images of eyes</p>
                        {arr[0] &&
                            <>
                                <p className="card-text">Thanks for listening to this</p>
                                <button id="1" onClick={handleLess} className="card-btn">Read Less</button>
                            </>

                        }
                        {
                            !arr[0] && <button id="1" onClick={handleRead} className="card-btn">Read More</button>
                        }


                    </div>

                    <div className="speciality-card">
                        <img className="card-pic" src={diabetic} />
                        <p className="card-title">
                            Diabetic retinopathy
                        </p>
                        <p className="card-text">Our team provides the earliest
                            diagnosis for Diabetic Retinopathy looking at fundus images of eyes</p>
                        {arr[1] &&
                            <>
                                <p className="card-text">Thanks for listening to this</p>
                                <button id="2" onClick={handleLess} className="card-btn">Read Less</button>
                            </>

                        }
                        {
                            !arr[1] && <button id="2" onClick={handleRead} className="card-btn">Read More</button>
                        }

                    </div>

                    <div className="speciality-card">
                        <img className="card-pic" src={cataract} />
                        <p className="card-title">
                            Cataract
                        </p>
                        <p className="card-text">Our team provides the earliest
                            diagnosis for Cataract looking at fundus images of eyes</p>
                        {arr[2] &&
                            <>
                                <p className="card-text">Thanks for listening to this</p>
                                <button id="3" onClick={handleLess} className="card-btn">Read Less</button>
                            </>

                        }
                        {
                            !arr[2] && <button id="3" onClick={handleRead} className="card-btn">Read More</button>
                        }

                    </div>

                </div>
                <p className="speciality-title">Learn More About Them</p>

                <div className="speciality-learn">

                    <div className="speciality-learn-items">
                        <p className="speciality-learn-title">Glaucoma</p>

                        {!learn[0] && <button id="1" onClick={handleLearn} className="speciality-btn">Read More about Glaucoma</button>}
                        {learn[0] &&
                            <>
                                <div className="speciality-box">

                                    <p className="speciality-text">
                                        Glaucoma is a group of eye diseases that can cause vision loss and
                                        blindness by damaging a nerve in the back of your eye called the
                                        optic nerve. The symptoms can start so slowly that you may not
                                        notice them. The only way to find
                                        out if you have glaucoma is to get a comprehensive dilated eye exam.
                                    </p>

                                </div>
                                <button onClick={closeLearn} className="Read-Less">Read Less</button>

                            </>
                        }

                    </div>

                    <div className="speciality-learn-items">
                        <p className="speciality-learn-title">Diabetic Retinopathy</p>

                        {!learn[1] && <button id="2" onClick={handleLearn} className="speciality-btn">Read More about  Diabetic Retinopathy</button>}
                        {learn[1] &&
                            <>
                                <div className="speciality-box">

                                    <p className="speciality-text">
                                        Diabetes is a chronic disease that occurs either when the
                                        pancreas does not produce enough insulin or when the
                                        body cannot effectively use the insulin it produces.
                                        Insulin is a hormone that regulates blood glucose
                                    </p>

                                </div>
                                <button onClick={closeLearn} className="Read-Less">Read Less</button>

                            </>
                        }
                    </div>
                    <div className="speciality-learn-items">
                        <p className="speciality-learn-title">Cataract</p>

                        {!learn[2] && <button id="3" onClick={handleLearn} className="speciality-btn">Read More about Cataract</button>}
                        {learn[2] &&
                            <>
                                <div className="speciality-box">

                                    <p className="speciality-text">

                                        A cataract is a cloudy area in the lens of your eye (the clear part of the eye that
                                        helps to focus light). Cataracts are very common as you get older.
                                        In fact, more than half of all Americans age 80 or older either have
                                        cataracts or have had surgery to get rid of cataracts.
                                    </p>

                                </div>
                                <button onClick={closeLearn} className="Read-Less">Read Less</button>

                            </>
                        }
                    </div>

                </div>

            </section>

            <section id="about" className="about">
                <div className="about-container">
                    <p className="about-title">About Us</p>
                    <div className="about-items">
                        <div className="about-item-text">
                            We are a dedicated team of two passionate individuals who share a common goal - to make a positive impact on healthcare through the application of cutting-edge technology. Our backgrounds in computer science and machine learning have provided us with the skills and knowledge necessary to tackle complex problems in the field of medical diagnostics.
                            Our mission is to revolutionize the early detection and diagnosis of eye diseases using the power of deep learning algorithms. We believe that leveraging artificial intelligence in the field of ophthalmology can lead to faster and more accurate diagnoses, ultimately improving patient outcomes and quality of life.
                            Through extensive research, data analysis, and model development, we are working towards creating a robust and reliable system that can predict a range of eye diseases based on diagnostic images. By leveraging state-of-the-art deep learning techniques, we aim to provide a tool that can assist healthcare professionals in their decision-making process, ultimately leading to better patient care.
                            We are open to collaborations with healthcare professionals, researchers, and organizations that share our vision for improving eye disease detection and diagnosis. Together, we can work towards a future where advanced technology plays a pivotal role in enhancing the quality of healthcare delivery.


                        </div>
                        <img className="about-item-pic" src={eyetest} />
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )



}

export default Landing;