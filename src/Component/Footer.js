import Git from '../Asset/Git.png'
import Link from '../Asset/in.webp'
import Mail from '../Asset/mail.png'

import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gradient-to-r to-blue-500 from-red-400  h-32 flex justify-around items-center text-white  ">
      <div className="flex gap-4 mt-5">
      <h1>Contact</h1>
      </div>
      <div className="flex gap-4 mt-5">
      <h1>Thank For Visit!!...</h1>
      </div>
      <div>
      <h1>Socialmedia</h1>
      <div className="flex gap-4 mt-5">
        <a href="https://github.com/"><img className="w-6" src={Git} alt={Git}></img></a>
        <a href="https://www.linkedin.com/in/g-gowri-shankar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className="w-6" src={Link} alt={Link}></img></a>
        <a href="https://mail.google.com/mail/u/0/?ogbl#inbox"><img className="w-6" src={Mail} alt={Mail}></img></a>
        </div>
      </div>
    </div>
  )
}
