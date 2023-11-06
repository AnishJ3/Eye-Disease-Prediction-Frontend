import './App.css';
import SignUp from './components/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Records from './components/Records';
import NewPatient from './components/NewPatient';
import Main from './components/Main';
import Landing from './components/Landing';
import Footer from './components/Footer'
import Upload from './components/Upload';
import EditPatient from './components/EditPatient';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Landing />}></Route>
        <Route path='/home/:email' element = {<Home />}> </Route>
        <Route path='/register' element = {<SignUp />}></Route>
        <Route path='/login' element ={<Login />}></Route>
        <Route path ='/records' element = {<Records />}></Route>
        <Route path='/patient' element = {<NewPatient />}></Route>
        <Route path='/main' element = {<Main />}></Route>
        <Route path = '/footer'element = {<Footer />}></Route>
        <Route path = '/upload' element = {<Upload />}></Route>
        <Route path = '/edit' element= {<EditPatient />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
