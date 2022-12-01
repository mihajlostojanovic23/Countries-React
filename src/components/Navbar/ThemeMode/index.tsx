// Hook
import IconDark from '../../../assets/img/iconDark';
import IconLight from '../../../assets/img/iconLight';
import useTheme from './useTheme';

function Theme() {
  const { theme, handleThemeSwitch } = useTheme();

  return (
    <div>
      {theme === 'light' ? (
        <div
          className="flex cursor-pointer items-center justify-center font-bold text-[#3d3d3d]"
          onClick={handleThemeSwitch}
        >
          <IconDark />
          <span className="text-[20px] dark:text-[white]">Dark Mode</span>
        </div>
      ) : (
        <div
          className="flex cursor-pointer items-center justify-center font-bold text-[#3d3d3d]"
          onClick={handleThemeSwitch}
        >
          <IconLight />

          {'\u00A0'}
          <span className=" text-[20px] dark:text-[white]">Light Mode</span>
        </div>
      )}
    </div>
  );
}

export default Theme;
