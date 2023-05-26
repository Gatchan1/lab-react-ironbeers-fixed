import './App.css';
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/beers" element={ <AllBeers /> }/>
      <Route path="/new-beer" element={<NewBeer />}/>
    </Routes>
    </div>
  );
}

export default App;
