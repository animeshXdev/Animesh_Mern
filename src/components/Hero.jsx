import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { RiArrowDownDoubleFill } from 'react-icons/ri';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
    <div
      id='home'
      className='relative flex flex-col-reverse sm:flex-row items-center justify-center w-full min-h-[95vh] bg-black text-white px-5 sm:px-12 py-12 gap-8 '
    >
      {/* Left Text Section */}
      <div className='w-full sm:w-1/2 flex flex-col gap-5 justify-center items-center sm:items-start text-center sm:text-left max-w-lg'>
        <h1 className='text-3xl sm:text-5xl font-semibold leading-snug'>
          I am <span className='font-serif text-emerald-400'>Animesh Pr.</span>
        </h1>
        <h2 className='text-xl sm:text-3xl font-medium'>
          A{' '}
          <span className='text-emerald-400'>
            <Typewriter
              words={['Web Developer', 'MERN Stack Dev', 'React Enthusiast']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className='text-sm sm:text-lg text-gray-300 max-w-md'>
          Passionate about building fast, responsive, and modern web apps.
        </p>
      </div>

      {/* Right Image Section */}
      <div className='w-full sm:w-1/2 flex justify-center'>
        <div className='h-48 w-48 sm:h-72 sm:w-72 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg'>
          <img
            src="https://w0.peakpx.com/wallpaper/239/52/HD-wallpaper-unknown-boy-cool-hidden-man-mystery-new.jpg"
            alt="Profile"
            className='h-full w-full object-cover'
          />
        </div>
      </div>

      {/* Triple Down Arrows */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-emerald-400">
        <RiArrowDownDoubleFill
          onClick={scrollToAbout}
          className="text-5xl animate-bounce delay-300 cursor-pointer hover:text-emerald-300 transition"
          aria-label="Scroll to About Section"
        />
      </div>
    </div>
  );
};

export default Hero;
