import logo from "../public/logo.png";

function Navbar() {
  return (
    <nav className="relative border-b border-b-gray-400 max-w-2xl mx-auto">
      <div className="flex justify-between items-center p-5">
        <div className="flex space-x-3 items-center">
          <img src={logo} className="max-h-8" />
          <div className="text-white capitalize font-bold">
            ibrahimozkan.dev
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
