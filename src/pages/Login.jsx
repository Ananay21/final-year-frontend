import { useForm } from 'react-hook-form'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import BookIcon from '@mui/icons-material/Book';
import { useState } from 'react';

const Login = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();
    const [visiblity,changeVisiblity]=useState(false);
    
    const onSubmit=(data)=>{
        console.log(data);
    }
    // 


  return (
    <>
    <div className='w-full h-screen flex justify-between items-center gap-2 mt-10'>
        <div className='bg-black w-1/2 h-[600px] max-sm:hidden rounded-xl mr-3'>

        </div>
        <div className='bg-black w-1/2 h-[600px] max-sm:w-full flex items-center justify-center rounded-xl mx-3 flex-col'>
          <div className='flex flex-col gap-2 mb-7'>
            <div className='flex gap-2 items-center justify-center'>
                <BookIcon className='p-1 text-3xl text-[#d4be81] border-2 rounded-lg mt-[3px]'/>
                <div className='text-[#d4be81] text-3xl font-bold text-center'>
                    <h1>CRSP</h1>
                </div>
            </div>
            <div className='text-[#d4be81] text-xl flex justify-center'><p className='text-center'>Your community, your resources, shared</p></div>
          </div>  

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 text-white w-2/3 px-4 max-sm:w-4/5'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="emailId">Email ID</label>
                    <input type="email" name='emailId' className='bg-white text-black pl-3 py-2 rounded-lg' {...register("emailId",{required:{value:true,message:"Cannot be empty"}})}/>
                    {errors.emailId && <p role='alert' className='text-red-500'>{errors.emailId.message}</p>}
                </div>
                <div className='flex flex-col gap-1 '>
                    <label htmlFor="password">Password</label>
                    <div className="relative inline-block ">
                        <input type={visiblity?"text":"password"} name='password' className='bg-white w-full text-black pl-3 py-2 rounded-lg' {...register("password",{required:{value:true,message:"Cannot be empty"},minLength:{value:8,message:"Password length should be 8"}})}/>
                        <button onClick={()=>changeVisiblity(!visiblity)} className='absolute top-0 right-0 text-black pt-1 pr-1'>{visiblity?<VisibilityOffIcon/>:<VisibilityIcon/>}</button>
                    </div>
                    {errors.password && <p role='alert' className='text-red-500'>{errors.password.message}</p>}
                </div>
                <input type="submit" className='bg-white border-1 border-black text-black py-1 mt-3 rounded-lg hover:cursor-pointer hover:text-white hover:bg-black hover:border-white duration-300'/>
          </form>  
          <a href="/signup" className='text-[#d4be81] mt-10'>New User? Create an account</a>
        </div>
      </div>
    </>
  )
}

export default Login