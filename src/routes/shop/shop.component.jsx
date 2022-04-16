import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { setCategories } from 'store/categories/category.action';

import CategoriesPreview from 'routes/categories-preview/categories-preview.component';
import Category from 'routes/category/category.component';

import { getCategoriesAndDocuments } from 'utils/firebase/firebase.utils';

import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
    // dispatch never changes, needed to disable warning
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
