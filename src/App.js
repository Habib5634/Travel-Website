import AboutLayout from "./Components/AboutLayout/AboutLayout";
import HomeLayout from "./Components/HomeLayout/HomeLayout";
import {  Routes, Route } from "react-router-dom"
import OfferLayout from "./Components/OffersLayout/OfferLayout";
import BlogLayout from "./Components/BlogLayout/BlogLayout";
import ContactLayout from "./Components/ContactLayout/ContactLayout";
import Rejister from "./Pages/RegisterLoginForms/Rejister";
import Login from "./Pages/RegisterLoginForms/Login";

function App() {
  return (
    <>
      
      <Routes>
    <Route path='/' element={<HomeLayout/>}/>
    <Route path='/aboutus' element={<AboutLayout/>}/>
    <Route path='/offer' element={<OfferLayout/>}/>
    <Route path='/blog' element={<BlogLayout/>}/>
    <Route path='/contact' element={<ContactLayout/>}/>
    <Route path='/register' element={<Rejister/>}/>
    <Route path='/login' element={<Login/>}/>

      </Routes>
    </>
  );
}

export default App;
