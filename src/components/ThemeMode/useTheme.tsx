import { useEffect, useState } from 'react';

function useTheme() {
  const localStorageMode = localStorage.getItem('mode');
  const [darkMode, setDarkMode] = useState<string>(localStorageMode || 'dark');
  const mode = darkMode;
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(mode);
    root.classList.add(darkMode || '');

    if (typeof window !== 'undefined') {
      localStorage.setItem('mode', mode);
    }
  }, [mode, darkMode]);

  return { darkMode, setDarkMode };
}

export default useTheme;
