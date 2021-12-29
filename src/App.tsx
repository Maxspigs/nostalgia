import { AppBar } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './features/header/Header';
import { Home } from './features/home/Home';

function App() {
  return (
    <div className="App" >
      <Header />   
    </div>
  );
}

export default App;
