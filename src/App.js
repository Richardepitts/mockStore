import './App.css';
import React from 'react';
import Products from './Products';
import Category from './R.Pages/R.Category/Category';
import SubProduct from './R.Pages/R.SubProduct/SubProduct';
import Shop from './R.Components/R.Shop/Shop';
import Categories from './Categories';
// import ProductCategory from './R.components/R.ProductCategory/ProductCategory';
import Nav from './Nav';
import Cart from './Cart';
import Store from './Store';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let stuff = `stuff`

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/Shop' element={<Shop/>}></Route>
          <Route path='/Shop/:category' element={<Category/>}></Route>
          <Route path='/Shop/:product/subproduct' element={<SubProduct/>}></Route>
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
