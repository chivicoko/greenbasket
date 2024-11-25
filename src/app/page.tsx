"use client";

import Categories from "@/components/Categories";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";


const HomePage: React.FC = () => {

  return (
    <div className="">
      <div className="">
        <Header />
        <Categories/>
        <Products/>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
