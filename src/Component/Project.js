import React from 'react';
import GU from '../Asset/GU Datalogic.jpeg'
import Lux from '../Asset/Luxurya.jpeg'
import Wifi from '../Asset/WIFI DE.webp'

export default function Project() {
  const projects = [ 
    {
      title: 'GU Datalogic',
      image: GU,
      description: 'This is a one of Stsrtup Company in Sakthiyamanglam.',
      link:'gudatalogic.com'
    },
    {
      title:'Luxyrya Tours',
      image:Lux,
      description:'This is one of College & Family tuor Pakeages.',
      link:'https://luxurya-tours.vercel.app/'
    },
    {
        title:'Wifi Deauthor',
        image:Wifi,
        description:'This is one of College Hard Ware Project at (ECE) Electronic Communaction & Engineering. I SKCT (Sri Krishana College Of Techology)',
        link:'https://luxurya-tours.vercel.app/'
      }
  ];
  return (
    <div className="text-white ">
    <div className="bg-gradient-to-r to-blue-500 from-red-400">

<p className="text-3xl  font-bold text-center">Porojects</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">

        {projects.map((project,index) => (

          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">

            <img src={project.image} alt={project.image} className="w-full h-48 object-cover" />

            <div className="p-4">

              <h2 className="text-xl font-semibold">{project.title}</h2>

              <p className="text-gray-700">{project.description}</p>

              <a className="text-xl font-semibold cursor-pointer" href="#">{project.link}</a>

            </div>

            </div>

           
))}

      </div>

    </div>
 </div>
  )};



