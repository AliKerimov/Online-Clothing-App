import { Routes, Route } from 'react-router-dom';
import Category from './components/Category/Category';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Category/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
