'use client';

import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import Products from '@/components/Products';
import Categories from '@/components/Categories';

const HomePage: React.FC = () => {

  return (
    <>
      <Header />

      <Categories/>

      <Products/>

      <Footer />
    </>
  );
};

export default HomePage;
