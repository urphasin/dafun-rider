import {useEffect, useState} from 'react'

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark" ||
      (("theme" in localStorage === false) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  })

  useEffect(() => {
    const root = document.documentElement;
    if (isDark === true) {
      root.classList.add("dark");
    }
    else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  
  return [isDark, setIsDark] as const;
}
