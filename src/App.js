import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage';
import { Routes,Route } from 'react-router-dom';
import Mealinfo from './Components/Mealinfo';

function App() {
  return (
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/:mealId' element={<Mealinfo/>} />
        </Routes>
  );
}

export default App;
