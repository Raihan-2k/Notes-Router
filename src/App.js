import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import Archive from './pages/Archive';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="app-container">
      <header>
      <Navigation/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/add' element={<AddPage/>}/>
          <Route path='/archive' element={<Archive/>}/>
          <Route path='/DetailPage/:id' element={<DetailPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
  