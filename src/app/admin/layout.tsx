
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function Layout({ children }) {
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
