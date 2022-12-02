import { Link } from 'react-router-dom';

// Component
import ThemeMode from './ThemeMode/index';

function Navbar() {
  return (
    <nav className="navbar flex w-full flex-col items-center justify-between py-[20px] px-6 shadow-md dark:bg-[#2b3945] sm:flex-row">
      <Link to={'/'}>
        <h1 className="ml-[0px] text-[30px]  font-bold dark:text-[white] sm:ml-[40px]">
          Where is the world
        </h1>
      </Link>
      <div className="themeColor mr-[0px]  sm:mr-[40px]">
        <ThemeMode />
      </div>
    </nav>
  );
}

export default Navbar;
