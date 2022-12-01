import { Link } from 'react-router-dom';

// Component
import ThemeMode from './ThemeMode/index';

function Navbar() {
  return (
    <nav className="navbar flex w-full  flex-row items-center justify-between py-[20px] px-6 shadow-md dark:bg-[#2b3945]">
      <Link to={'/'}>
        <h1 className="ml-[40px] text-[30px] font-bold dark:text-[white]">
          Where is the world
        </h1>
      </Link>
      <div className="themeColor mr-[40px]">
        <ThemeMode />
      </div>
    </nav>
  );
}

export default Navbar;
