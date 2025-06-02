import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    image: 'https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VicGFnZXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'A personal portfolio built with React, Tailwind, and Framer Motion to showcase my work and skills.',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://yourportfolio.com',
  },
  {
    title: 'Task Manager App',
    image: 'https://uizard.io/static/e5daa42c17923ec354ca0c0414827192/a8e47/320c8071bbbf30e4e49720dd798987a8896cbeb8-1440x835.png',
    description: 'A full-stack task management app using MERN stack with authentication and CRUD operations.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/yourusername/task-manager',
    live: '',
  },
  {
    title: 'Blog Platform',
    image: 'https://static.wixstatic.com/media/b917b3_93894b0f68ed491986e148464ba63b0c~mv2.webp?w=3840&q=50',
    description: 'Multi-user blog platform with rich text editor and comment system built using MERN.',
    tech: ['React', 'MongoDB', 'Node.js'],
    github: 'https://github.com/yourusername/blog-app',
    live: '',
  },
];

const Projects = () => {
  return (
    <section id='projects' className="w-full min-h-screen bg-black text-white px-6 sm:px-16 py-20 pt-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="text-emerald-400">My</span> Projects
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-emerald-900/20 backdrop-blur-md p-5 rounded-xl border border-emerald-800 shadow-lg hover:shadow-emerald-500/30 transition duration-300 ">
              <div className="overflow-hidden rounded-md mb-4 ">
                <img src={project.image} alt={project.title} className="rounded-md object-cover w-full h-48" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-2 cursor-pointer">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-600 text-white px-2 py-1 rounded text-xs  cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition text-lg">
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition text-lg">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
