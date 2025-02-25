import React, { useState } from 'react'

export default function Login() {

  const [email, setemail]= useState('')
  const [password, setpassword]= useState('')

  console.log('setemail',email);
  console.log('setpassword',password);
  return (
    <div className="flex items-center justify-center bg-gradient-to-r to-blue-500 from-red-400 text-black">
        <form className=" p-6 rounded shadow-lg w-80">
            <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
            <div className="mb-4">
                <label className="block text-white" htmlFor="email">Email</label>
                <input type="email"id="email"value={email}onChange={(e) => setemail(e.target.value)}className="mt-1 block w-full p-2 border border-gray-300 rounded" required/>
            </div>
            <div className="mb-4">
                <label className="block text-white" htmlFor="password">Password</label>
                <input type="password"id="password"value={password}onChange={(e) => setpassword(e.target.value)}className="mt-1 block w-full p-2 border border-gray-300 rounded"required/>
            </div>
            <button type="submit" className="p-1 rounded-md hover:outline-cyan-300 outline outline-2 text-white text-1xl">
                Login
            </button>
        </form>
    </div>
);
};