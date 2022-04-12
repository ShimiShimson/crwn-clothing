import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navigation from 'routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from 'routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from 'routes/checkout/checkout.component';
import CategoryPage from 'components/category-page/category-page.component';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from 'utils/firebase/firebase.utils';

import { setCurrentUser } from 'store/user/user.action';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
    // dispatch never changes
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='category-page' element={<CategoryPage />} />
      </Route>
    </Routes>
  );
};

export default App;
