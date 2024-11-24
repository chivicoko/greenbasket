import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import { ReactNode } from 'react';


export const metadata = {
  title: "Admin Area",
  description: "GreenBasket Stores is the number 1 Online store for groceries of all sorts, making buying and selling of groceries of all sorts really easy for everyone.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex bg-white">
      <AdminSidebar />
      <div className="w-full lg:w-4/5 min-h-screen pb-16">
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
}
