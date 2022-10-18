import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
