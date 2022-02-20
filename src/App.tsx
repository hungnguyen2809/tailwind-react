import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import NavBar from './components/NavBar';
import Slogan from './components/Slogan';

interface DimesionsWindow {
  width: number | undefined;
  height: number | undefined;
}

function App() {
  const [isMobile, setMobile] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<DimesionsWindow>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleSize();

    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  useEffect(() => {
    if (!windowSize.width) return;

    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
    <div className="dark:text-white text-black overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500 md:px-20">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
