import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/HomePage/NotFound';
import Products from './components/Products/Products';
import ProductPage from './components/ProductPage/ProductPage';
import Teams from './components/Teams/Teams';
import About from './components/About/About';
import './App.css'
function App() {
    return (
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:id' element={<ProductPage/>} />
            <Route path='/Teams' element={<Teams/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      );  
}

export default App;
