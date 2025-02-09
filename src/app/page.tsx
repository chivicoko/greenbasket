"use client";

import Categories from "@/components/Categories";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import { useUserForm } from "@/context/UserFormContext";
import { Suspense } from "react";
import Loading from "./loading";
import UserForms from "./users/auth/register/page";


const HomePage: React.FC = () => {
  const {userInfo} = useUserForm();
  // console.log(userInfo);

  return (
    <div className="">
      <Suspense fallback={<Loading/>}>
        {userInfo ? 
          <div className="">
            <Header />
            <Categories/>
            <Products/>
            <Footer />
          </div>
        : 
        <UserForms />}
      </Suspense>
    </div>
  );
};

export default HomePage;
