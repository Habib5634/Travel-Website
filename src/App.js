import AboutLayout from "./Components/AboutLayout/AboutLayout";
import HomeLayout from "./Components/HomeLayout/HomeLayout";
import {  Routes, Route } from "react-router-dom"
import OfferLayout from "./Components/OffersLayout/OfferLayout";
import BlogLayout from "./Components/BlogLayout/BlogLayout";
import ContactLayout from "./Components/ContactLayout/ContactLayout";
import Rejister from "./Pages/RegisterLoginForms/Rejister";
import Login from "./Pages/RegisterLoginForms/Login";
import Dashboard from "./Admin/Dashboard";
import Sidebar from "./Admin/Sidebar/Sidebar";
import PublicRoute from "./Components/Routes/PublicRoute";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
    <Route path='/' element={
    // <PublicRoute>
    <HomeLayout/>
    // </PublicRoute>
    }/>
    <Route path='/aboutus' element={<AboutLayout/>}/>
    <Route path='/offer' element={<OfferLayout/>}/>
    <Route path='/blog' element={<BlogLayout/>}/>
    <Route path='/contact' element={<ContactLayout/>}/>
    <Route path='/register' element={<Rejister/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Sidebar/>}/>

    

      </Routes>
    </>
  );
}

export default App;
