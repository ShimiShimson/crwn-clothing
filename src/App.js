import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from 'routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from 'routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from 'routes/checkout/checkout.component';
import CategoryPage from 'components/category-page/category-page.component';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='category-page' element={<CategoryPage />} />
      </Route>

    </Routes>
  )
}

export default App;
