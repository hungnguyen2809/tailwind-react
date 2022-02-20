import { useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { useDarkMode } from '../../hooks';

interface NavBarProps {
  isMobile?: boolean;
}

function NavBar({ isMobile }: NavBarProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        {isDarkMode ? (
          <BsSunFill
            color="#e9c46a"
            size={24}
            className="cursor-pointer"
            onClick={toggleDarkMode}
          />
        ) : (
          <FaMoon color="#e9c46a" size={24} className="cursor-pointer" onClick={toggleDarkMode} />
        )}
      </div>
      <ul className="ml-auto text-16 font-semibold md:flex md:gap-10">
        {openMenu && isMobile ? (
          <MdOutlineClose size={24} className="cursor-pointer" onClick={handleMenu} />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu size={24} className="cursor-pointer" onClick={handleMenu} />
        ) : (
          <>
            <li className="btn-hover">Features</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover ml-28">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute z-10 right-8 bg-white text-black p-8 text-center text-13">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">Our Story</li>
            <li className="cursor-pointer">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
