import {useEffect, useState} from "react";
import {CiLight} from "react-icons/ci";
import {GiDelighted} from "react-icons/gi";

export default function Theme() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme
      ? storedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      {theme === "dark" ? (
        <GiDelighted
          onClick={toggleChangeTheme}
          className="text-3xl text-white-section1 relative -bottom-5 -ml-4 md:bottom-1 md:ml-16 transition duration-200 hover:text-hover-font flex justify-center"
        />
      ) : (
        <CiLight
          onClick={toggleChangeTheme}
          className="text-3xl text-white-section1 relative -bottom-5 -ml-4 md:bottom-0.5 md:ml-16 transition duration-200 hover:text-yellow-bee"
        />
      )}
    </div>
  );
}
