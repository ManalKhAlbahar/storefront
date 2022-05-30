import React from 'react'
import Categories from './components/Categories';
import Header from './components/Header';
import Products from './components/Products';
import ActiveCategories from './components/activeCategories';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <ActiveCategories />
      <Products />
      <Footer />

    </>
  )
}

export default App
