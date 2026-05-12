import logo from "../assets/logo.png.png";
import searchIcon from "../assets/search.png";
import bagIcon from "../assets/bag.png";

const Navbar = () => {
  return (
    <nav className="absolute  left-0 w-full  z-50  top-[20px]">

      <div className="max-w-[1720px] mx-auto px-8 h-[110px] flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center">

          <img
            src={logo}
            alt="logo"
            className="w-[42px]"
          />

          <h1 className="text-white text-[18px] font-semibold tracking-wide">
            FloraVision.
          </h1>
        </div>

        {/* NAV LINKS */}
        <ul className="flex items-center gap-20 text-white/90 text-[22px] font-light">

          <li className="cursor-pointer hover:text-green-400 transition">
            Home
          </li>

          <li className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition">
            Plants Type
            <span className="text-[12px] mt-1">▼</span>
          </li>

          <li className="cursor-pointer hover:text-green-400 transition">
            More
          </li>

          <li className="cursor-pointer hover:text-green-400 transition">
            Contact
          </li>
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-12">

          {/* SEARCH */}
          <img
            src={searchIcon}
            alt="search"
            className="w-[26px] h-[26px] opacity-75 cursor-pointer hover:opacity-100 transition"
          />

          {/* BAG */}
          <img
            src={bagIcon}
            alt="bag"
            className="w-[26px] h-[26px] opacity-75 cursor-pointer hover:opacity-100 transition"
          />

          {/* MENU */}
          <div className="flex flex-col gap-[9px] cursor-pointer">

            <div className="w-[31px] border-[2px] border-white"></div>

            <div className="w-[23px] ml-auto border-[2px] border-white"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;