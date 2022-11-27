import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/HomePage/NotFound';
import Stadiums from './components/Stadiums/Stadiums';
import StadiumPage from './components/StadiumPage/StadiumPage';
import Teams from './components/Teams/Teams';
import Contact from './components/Contact/Contact';
import './App.css'
function App() {
    return (
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/stadiums' element={<Stadiums/>} />
            <Route path='/stadiums/:id' element={<StadiumPage/>} />
            <Route path='/teams' element={<Teams/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      );  
}

export default App;
