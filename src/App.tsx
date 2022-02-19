import './App.css';
import Content from './components/Content';
import NavBar from './components/NavBar';
import Slogan from './components/Slogan';

function App() {
  return (
    <div className="text-white overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700">
      <NavBar />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
