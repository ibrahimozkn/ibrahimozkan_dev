import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-bold text-white transition-colors duration-300 hover:border-b ${
      isActive ? 'text-primary border-b border-primary' : 'hover:text-primary'
    }`;

  return (
    <nav className="relative mx-auto border-b border-solid border-white/10 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-primary text-xl font-bold">
            &lt;IO&gt;
          </Link>
          <Link to="/" className="font-bold text-white uppercase">
            <span className="text-primary font-extrabold">i</span>brahim
            <span className="text-primary font-extrabold">o</span>
            zkan.dev
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          <NavLink to="/projects" className={navLinkClass}>
            _projects
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            _blog
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            _about
          </NavLink>
          <Link
            to="/contact"
            className="border-primary bg-primary/30 text-primary border px-4 py-2 font-bold transition-colors duration-300 hover:bg-white/10"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
