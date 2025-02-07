"use client";

import Categories from "@/components/Categories";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import { useUserForm } from "@/context/UserFormContext";
import { useRouter } from "next/navigation";


const HomePage: React.FC = () => {
  const {userInfo} = useUserForm();
  const router = useRouter();
  
  if(!userInfo) router.push('/users/auth/register');

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
