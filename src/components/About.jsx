import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si';

const skills = [
  {
    name: 'React.js',
    icon: <FaReact />,
    iconColor: 'text-blue-400',
    bg: 'bg-blue-100',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    iconColor: 'text-green-500',
    bg: 'bg-green-100',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    iconColor: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    iconColor: 'text-yellow-400',
    bg: 'bg-yellow-100',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    iconColor: 'text-cyan-400',
    bg: 'bg-cyan-100',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    iconColor: 'text-orange-500',
    bg: 'bg-orange-100',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
    iconColor: 'text-blue-500',
    bg: 'bg-blue-100',
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    iconColor: 'text-red-500',
    bg: 'bg-red-100',
  },
  {
    name: 'Database',
    icon: <FaDatabase />,
    iconColor: 'text-purple-500',
    bg: 'bg-purple-100',
  },
];

const About = () => {
  return (
<section id='about' className="w-full min-h-screen bg-black text-white px-6 sm:px-16 pt-28 pb-24">
      <div className="max-w-6xl mx-auto text-center sm:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-emerald-400">About</span> Me
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-12 max-w-3xl">
          Hi! I'm <span className="text-emerald-400 font-semibold">Animesh Prakash</span>, a passionate MERN Stack Developer
          who loves building seamless, responsive, and modern web applications. I focus on performance, UI detail, and clean code.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-emerald-600 text-white hover:bg-emerald-500 transition duration-300 p-5 rounded-xl flex flex-col items-center shadow-lg shadow-emerald-800/30"
            >
              <div className={`text-4xl p-3 rounded-full ${skill.bg} ${skill.iconColor} mb-3`}>
                {skill.icon}
              </div>
              <p className="text-sm sm:text-base font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
