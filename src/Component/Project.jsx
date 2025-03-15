import React from 'react';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'This is a brief description of Project One.',
      imgSrc: 'https://via.placeholder.com/300',
      gitLink: 'https://github.com/user/project-one'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'This is a brief description of Project Two.',
      imgSrc: 'https://via.placeholder.com/300',
      gitLink: 'https://github.com/user/project-two'
    }
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="border rounded-lg shadow-lg p-4">
          <img src={project.imgSrc} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
          <h2 className="text-xl font-bold mt-4">{project.title}</h2>
          <p className="text-gray-600 my-2">{project.description}</p>
          <a
            href={project.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}
