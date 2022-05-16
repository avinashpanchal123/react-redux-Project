import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/home/Home';
import ProductDetails from './components/product/ProductDetails';


function App() {
  return (
  <>
  <Header/>
  <Routes>
  <Route exact path='/' element={<Home />}/>
  <Route exact path='/products/:id' element={<ProductDetails />}/>
  </Routes>
  
  </>
  );
}

export default App;
