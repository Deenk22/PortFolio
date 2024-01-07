import { useEffect, useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { GiDelighted } from 'react-icons/gi';

export default function Theme() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme
      ? storedTheme
      : // Interesantísimo!! prefers-color-scheme detecta el THEME que tenemos en nuestro sistema operativo, si este, es dark, la aplicación iniciará con el THEME dark, en caso contrario, iniciará con light.
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      {theme === 'dark' ? (
        <GiDelighted
          onClick={toggleChangeTheme}
          className="text-3xl text-white-section1 relative -bottom-14 -ml-4 md:bottom-0.5 md:ml-2 transition duration-200 flex justify-center cursor-pointer"
        />
      ) : (
        <CiLight
          onClick={toggleChangeTheme}
          className="text-3xl text-white-section1 relative -bottom-14 -ml-4 md:bottom-0.5 md:ml-2 transition duration-200 cursor-pointer"
        />
      )}
    </div>
  );
}
