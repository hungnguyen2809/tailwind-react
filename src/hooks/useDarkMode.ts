import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const html = window.document.documentElement;

    const prev = isDarkMode ? 'light' : 'dark';
    html.classList.remove(prev);

    const next = isDarkMode ? 'dark' : 'light';
    html.classList.add(next);

    localStorage.setItem('theme', next);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode] as const;
};
