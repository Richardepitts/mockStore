import './App.css';
import React from 'react';
import Products from './Products';
import Categories from './Categories';
import Nav from './Nav';
import Cart from './Cart';
import Store from './Store';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/products' element={<Products/>}></Route>
          <Route exact path='/categories' element={<Categories/>}></Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
          <Route exact path='/store' element={<Store/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
