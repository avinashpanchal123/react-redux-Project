import Header from './components/layout/Header';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
  <Header/>
  <Routes>
  <Route exact path='/' element={<Home />}/>
  </Routes>
  
  </>
  );
}

export default App;
