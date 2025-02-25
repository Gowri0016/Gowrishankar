import React from 'react'
export default function Contact() {
  return (
  <div className="bg-gradient-to-r to-blue-500 from-red-400  text-white flex justify-center">
     <div className=" p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-white mb-2 ml-14">Email: <a href="mailto:gowridyk3@gmail.com" className="text-white">gowridyk3@gmail.com</a></p>
      <p className="text-white mb-2 ml-14">Phone: <a href="tel:+91 80568-89616" className="text-white">+91 80568-89616</a></p>
      <p className="text-white mb-2 ml-14">Address: Ayyampalayam Kavundhapadi 638455 Erode</p>
      <button className="w-32 mt-5 ml-40 rounded-md hover:outline-cyan-300 outline outline-2">Click Me</button>
    </div>
  </div>
  )
}