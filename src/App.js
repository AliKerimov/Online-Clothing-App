import { Routes, Route } from 'react-router-dom';
import Category from './components/Category/Category';
import Navbar from './components/Navbar/Navbar';
import Pdp from './components/pdp/Pdp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Category/>}></Route>
        <Route path='/pdp' element={<Pdp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
