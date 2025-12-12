import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
function Login() {
const [status,setSatus]=useState("signup")
const { register, handleSubmit,formState:{errors} } = useForm(
    {
        defaultValues:{
            name:"",
            email:""
        }
    }
)
const onSubmit = (data) => console.log(data)
// console.log(data)
return (
<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 '>
    <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-2xl transition-all duration 300'>
    {
    status=='signup' && (
    <>
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Your Account</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input {...register("name")} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" placeholder="Enter your name" />
        </div>
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
            <label className="block text-sm font-medium text-gray-700">UserName</label>
            <input {...register("uname", { required: "Username is required", maxLength: { value: 20, message: "Max length is 20" } })} className={`mt-1 block w-full px-4 py-2 border ${errors.uname ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`} placeholder="Choose a username" />
            {errors.uname && <p className="mt-1 text-sm text-red-600">{errors.uname.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" {...register("password", { required: "Password is required", minLength: { value: 8, message: "Min length is 8 characters" } })} 
            className={`mt-1 block w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
            placeholder="Minimum 8 characters" />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>
    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out mt-6">SignUp</button>
    </form>
    </>
    )}

    {status=='signin' && (
    <>
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Your Account</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">UserName</label>
            <input {...register("uname", { required: "Username is required", maxLength: { value: 20, message: "Max length is 20" } })} className={`mt-1 block w-full px-4 py-2 border ${errors.uname ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`} placeholder="Choose a username" />
            {errors.uname && <p className="mt-1 text-sm text-red-600">{errors.uname.message}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" {...register("password", { required: "Password is required", minLength: { value: 8, message: "Min length is 8 characters" } })} 
            className={`mt-1 block w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
            placeholder="Minimum 8 characters" />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>
    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out mt-6">SignUp</button>
    </form>
    </>
    )}
    <div className="mt-6 pt-4 border-t border-gray-200 text-center">
    <p className="text-sm text-gray-600 mb-2">
        {status === 'signup' ? 'Already have an account?' : 'Need an account?'}
    </p>
    <button onClick={() => setSatus(prevStatus => prevStatus === 'signup' ? 'signin' : 'signup')} className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-150 ease-in-out text-sm p-1" >
        {status === 'signup' ? 'Sign In here' : 'Sign Up here'}
    </button>
</div>
    </div>
</div>
)
}

export default Login
