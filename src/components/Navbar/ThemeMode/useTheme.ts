import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html?.classList.add('dark');
      setTheme('dark');
    } else {
      html?.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return { theme, setTheme, handleThemeSwitch };
}

export default useTheme;
