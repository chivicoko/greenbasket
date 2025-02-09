"use client";

import Categories from "@/components/Categories";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import { useUserForm } from "@/context/UserFormContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";


const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const {userInfo} = useUserForm();
  const router = useRouter();
  console.log(userInfo);
  
  useEffect(() => {
    if (userInfo === null) {
      setLoading(true);
    } else {
      setLoading(false);
      if(!userInfo) router.push('/users/auth/register');
    }
  }, [userInfo, router]);

  if (loading) {
    return <Loading/>;
  }

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
