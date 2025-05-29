import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import { useNavigate } from 'react-router'

const CreatePost = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const [selectedTags,handleNewTags]=useState([]);
  const navigate=useNavigate();
  var file;

  const onSubmit=(data)=>{
    data.tags=selectedTags;
    data.file=file;
    console.log(data);
    navigate("/allposts");
  }

  const handleFile=(event)=>{
    file=event.target.files[0];
    console.log(file);
  }
  
  const options=[
    {value:"OS",label:"Operating Systems"},
    {value:"DSA",label:"Data Structures and Algorithms"},
    {value:"OOPs",label:"OOPs"},
    {value:"FullStack",label:"FullStack development"},
    {value:"FrontEnd",label:"Frontend development"}
  ]

  const handleChange=(val)=>{
    handleNewTags(val||[])
  }

  return (
    <>
    <Header/>
    <div className='w-full h-full mt-22 flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center w-full'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-1/3 max-lg:w-1/2 max-sm:w-full px-4 pt-3 pb-4 border-3 rounded-xl text-white bg-[black] border-[#d4be81] mx-3'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="title" className='font-bold text-2xl'>Title</label>
            <input type="text" name='title' {...register("title",{required:{value:true,message:"Title is required!"},maxLength:{value:50,message:"Title length should be less than 50!"}})} className='border-1 rounded-full text-white pl-3 py-2 text-xl'/>
            {errors.title && <p role='alert' className='text-red-500 text-center'>{errors.title.message}</p>}
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="content" className='font-bold text-2xl'>Content</label>
            <textarea name='content' className='resize-none border-1 rounded-2xl p-2 h-[250px] text-white' {...register("content",{required:{value:true,message:"Field cannot be empty!"}})}/>
            {errors.content && <p role='alert'className='text-red-500 text-center'>{errors.content.message}</p>}
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="tags" className='font-bold text-2xl'>Tags</label>
            <Select  name="tags" options={options} {...register("tags")} onChange={handleChange} className='bg-black text-black' value={selectedTags} isMulti styles={{control:(baseStyles)=>({
              ...baseStyles,
              borderColor:"white",
              color:"black",
              borderRadius:50,
              backgroundColor:"black"
            })}}/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="link" className='font-bold text-2xl'>Link (Youtube)</label>
            <input type="text" name='link' {...register("link",{required:{value:true,message:"Field cannot be empty!"}})} className='text-white border-1 rounded-full pl-3 py-2'/>
            {errors.link && <p role='alert' className='text-red-500 text-center'>{errors.link.message}</p>}
          </div>
          <div className='flex flex-col gap-1 '>
            <label htmlFor="file" className='font-bold text-2xl'>File (optional)</label>
            <div className='flex items-center justify-center'>
              <input type="file" onChange={handleFile} className='text-white border-1 rounded-full pl-3 py-2 w-1/3 duration-300 text-center hover:cursor-pointer hover:bg-black hover:text-white'/>
            </div>
          </div>
          <div className='flex items-center justify-center mt-4'>
            <input type="submit" className='rounded-full px-3 py-1 border-2 text-white w-1/2 bg-[#d4be81] border-black duration-300 hover:cursor-pointer hover:bg-black hover:text-[#d4be81] hover:border-[#d4be81]'/>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CreatePost