import React, { useState } from 'react'
import register from '../../Assets/login.png'
import { Link } from 'react-router-dom';
import { handleLogin} from '../../services/authService'



const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

   
    
     
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle form submission
    console.log();
    handleLogin(e, email, password)
  };
  return (
    <>
    <div className='flex w-full justify-center relative h-[100vh] p-12 bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25]'>
        <div className='hidden md:flex md:w-1/2'>
            <img src={register} alt='register' className='h-[90vh]' />
        </div>
        <div className='md:w-1/2 w-full '>
        <form className=" py-12 md:px-20 px-4  shadow-lg bg-white flex flex-col justify-center h-[90vh]">
            <h1 className='text-center text-4xl font-bold mb-2'>WHERE NEXT?</h1>
            <h2 className='text-center text-2xl mb-5 font-bold'>You Travel</h2>         
         <h3 className='text-xl fnt text-black font-semibold my-7 text-center'>Please Login Your Account</h3>
             
           
           <input
             type="email"
             name="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             style={{borderWidth: '3px'}}
             placeholder='Enter Your Email Address'
             className="border-[#4E1E6C] border w-full mb-4 py-2 pl-3 self-center"
             required
           />
          
          
           
           <input
             type="password"
             name="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             style={{borderWidth: '3px'}}
             placeholder='Password'
             className="border-[#4E1E6C] pl-3 border w-full py-2 self-center"
             required
           />
  
           <button
             type="submit"
             onClick={handleSubmit}
             className="bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25] fnt w-full  text-white font-semibold text-xl py-2 px-4 mt-10 "
           >
             Login...
           </button>
           
    <span className="ml-14 fnt font-bold text-2xl text-[#4E1E6C] self-center">Forgot Password?</span>
       

         <div className='flex justify-center items-center w-full mt-4'>
            <hr className='border border-[#4E1E6C]  w-5/12' style={{borderWidth: '2px'}}/>
            <p className='fnt text-xl text-center w-2/12'>Or</p>
            <hr className='border border-[#E38C25] w-5/12' style={{borderWidth: '2px'}}/>
         </div>



<div className='flex justify-center items-center w-full mt-10'>
<p className='w-1/2 text-xl fnt'>Don't Have an Account?</p>
<Link to='/register'>
<button
  type="submit"

  className="border border-b-[#4E1E6C]   border-t-[#cd14d0] border-l-[#E38C25] border-r-[#4E1E6C] fnt w-fit  font-semibold text-xl py-2 px-4  text-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25]" style={{borderWidth: '3px'}}
>
  
  Create Now...
</button>
</Link>

</div>


       </form>
        </div>
    </div>
    
    </>
  )
}

export default Login