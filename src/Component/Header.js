// import { useState } from 'react'
import Git from '../Asset/Git.png'
import Link from '../Asset/in.webp'
import Mail from '../Asset/mail.png'
import Verce from '../Asset/Ver.svg'
export default function Header() {

//   const [isbat, usestate]= useState(0);
// var a=0
// console.log(isbat)
// function Count(){
//   a=a + 1
//   usestate(isbat + 1)
//   console.log('Count',a)

  return (
    <div className="bg-gradient-to-r to-blue-500 from-red-400  text-white shadow-lg h-16 w-full flex justify-around items-center">
        <nav className="text-3xl font-extralight text-white">
            Gowrishankar G
        </nav>
        <div className="flex gap-4">
        <a href="https://github.com/"><img className="w-6" src={Git} alt={Git}></img></a>
        <a href="https://www.linkedin.com/in/g-gowri-shankar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className="w-6" src={Link} alt={Link}></img></a>
        <a href="https://mail.google.com/mail/u/0/?ogbl#inbox"><img className="w-6" src={Mail} alt={Mail}></img></a>
        <a href=""><img className="w-6" src={Verce} alt={Verce}></img></a>
        </div>
        <div className="">
        <div className=" md:flex md:gap-4 md:justify-center hidden">
        <a href="#Details">Home</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>
        
        </div>
        </div>

    </div>
  )}

