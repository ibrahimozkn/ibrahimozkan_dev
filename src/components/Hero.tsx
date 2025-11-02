import { Link } from 'react-router-dom';
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

      <div className="mt-5 flex space-x-5">
        <Link
          to={'/projects'}
          className="bg-primary text-background-dark flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded px-4 text-sm leading-normal font-bold"
        >
          <span className="truncate">./view-projects</span>
        </Link>
        <Link
          to={'/blog'}
          className="flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded border border-white/20 bg-transparent px-4 text-sm leading-normal font-bold tracking-[0.015em] text-gray-300 hover:bg-white/10 hover:text-white"
        >
          <span className="truncate">./read-blog</span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
