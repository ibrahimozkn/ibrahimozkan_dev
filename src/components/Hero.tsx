import React from 'react';

function Hero() {
  return (
    <div className="container flex flex-col items-start justify-start">
      <h1 className="text-2xl font-bold text-white">
        <span className="text-primary mr-2">&gt;</span>Ibrahim Ozkan
        <span className="bg-primary animate-blink inline-block h-5 w-2"></span>
      </h1>
      <p className="mt-4 max-w-4xl text-base leading-normal font-normal text-gray-400">
        I'm Ibrahim Ozkan, a passionate software developer specializing in building exceptional
        digital experiences. Welcome to my personal website where I share my projects, blog posts,
        and more about my journey in tech.
      </p>
    </div>
  );
}

export default Hero;
