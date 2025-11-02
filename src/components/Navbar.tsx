function Navbar() {
  return (
    <nav className="relative mx-auto border-b border-solid border-white/10 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-primary text-xl font-bold">&lt;IO&gt;</div>
          <div className="font-bold text-white uppercase">
            <span className="text-primary font-extrabold">i</span>brahim
            <span className="text-primary font-extrabold">o</span>
            zkan.dev
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <a
            href=""
            className="hover:text-primary font-bold text-white transition-colors duration-300 hover:border-b"
          >
            //projects
          </a>
          <a
            href=""
            className="hover:text-primary font-bold text-white transition-colors duration-300 hover:border-b"
          >
            //blog
          </a>
          <a
            href=""
            className="hover:text-primary font-bold text-white transition-colors duration-300 hover:border-b"
          >
            //about
          </a>
          <button className="border-primary bg-primary/30 text-primary border px-4 py-2 font-bold transition-colors duration-300 hover:bg-white/10">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
