import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react';

interface iThemeValue {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<iThemeValue>({
  theme: '',
  setTheme: () => {},
});

const getinitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

export const ThemeProvider = ({ initialTheme, children }: any) => {
  const [theme, setTheme] = useState(getinitialTheme);
  const checkTheme = (existing: any) => {
    const root = window.document.documentElement;
    const isDark = existing === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(existing);

    localStorage.setItem('current-theme', existing);

    if (initialTheme) {
      checkTheme(initialTheme);
    }
  };
  useEffect(() => {
    checkTheme(initialTheme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
