import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
function MultiLoginForm() {
    const [step,setStep]=useState(1)
    const { register, handleSubmit,getValues,trigger,formState:{errors} } = useForm()
    const onSubmit = (data) => console.log(data)
    const nextStep=async ()=>{
        let checkField=[]
        if(step==1) checkField=["name","age","gender"]
        if(step==2) checkField=["email","pnum"]
        const isValid=await trigger(checkField)
        if(isValid) setStep(prevstep=>prevstep+1)
    }
    const prevStep=()=>{
        setStep(nextstep=>nextstep-1)
    }
    
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 '>
    <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-2xl transition-all duration 300'>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    {
    step==1 && (
    <>
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fill in Personal Details</h2>
        <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input {...register("name",{required:"First Name is required"})} className={`mt-1 block w-full px-4 py-2 border ${errors.fname ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`} placeholder="Enter your name"/>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input {...register("age",{required:"First Name is required",min:{value:12,message:"You are under age!"}})} className={`mt-1 block w-full px-4 py-2 border ${errors.fname ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`} placeholder="Enter your age"/>
            {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Gender:</label>
            <select {...register("gender", { required: "Gender is required" })} className={`mt-1 block w-full px-4 py-2 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}>
                <option value="" className="block text-sm font-medium text-gray-700">Select</option>
                <option value="female" className="block text-sm font-medium text-gray-700">Female</option>
                <option value="male" className="block text-sm font-medium text-gray-700">Male</option>
                <option value="other" className="block text-sm font-medium text-gray-700">Other</option>
            </select>
            {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
        </div>
    </>
    )}

    {step==2 && (
    <>
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fill in your Contact Information</h2>
        <div>
        <label className="block text-sm font-medium text-gray-700">Email ID</label>
        <input {...register("email", { 
            required: "Email is required", 
            pattern: {  
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address"
            }})}
            className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}placeholder="you@example.com" />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input {...register("pnum", { 
            required: "Phone Number is required", 
            pattern: {  
                value: /^\d+$/,
                message: "Enter only numbers (digits 0-9)"
            },
            maxLength:{
                value:15,
                message:"Max length is 15"
            },
            minLength:{
                value:10,
                message:"Phone Number should be of 10 digits"
            }
            })}
            className={`mt-1 block w-full px-4 py-2 border ${errors.pnum ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}placeholder="1234567890" />
            {errors.pnum && <p className="mt-1 text-sm text-red-600">{errors.pnum.message}</p>}
        </div>
    </>
    )}
    {step==3 && (
        <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Review & Submit</h2>
            <div>
                <p className="block text-sm font-medium text-gray-700">Name : {getValues("name")} </p>
                <p className="block text-sm font-medium text-gray-700">Age : {getValues("age")} </p>
                <p className="block text-sm font-medium text-gray-700">Gender : {getValues("gender")} </p>
                <p className="block text-sm font-medium text-gray-700">Email Id : {getValues("email")} </p>
                <p className="block text-sm font-medium text-gray-700">Phone Number : {getValues("pnum")} </p>
            </div>
        </>
        )
    }
    <div className='flex gap-4'>
    {
        step>1 &&(
            <button type="button" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out mt-6"
            onClick={()=>prevStep()}>
                Back
            </button>

        )
    }
    {
        step<3 &&(
            <button type="button" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out mt-6"
            onClick={()=>nextStep()}>
                Next
            </button>

        )
    }
    {
        step==3 &&(
            <button type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out mt-6">
                Submit
            </button>

        )
    }
    </div>
    </form>

    </div>
</div>

  )
}

export default MultiLoginForm
