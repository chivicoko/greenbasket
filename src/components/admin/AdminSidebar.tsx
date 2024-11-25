'use client';

import { Product } from '@/utils/types';
import { Add, Campaign, HelpOutline, HomeOutlined, KeyboardArrowDown, Settings, Tungsten } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import ProductModal from './ProductModal';

interface SidebarProps {
    show?: string;
    closeSidebar?: () => void;
}
  
const AdminSidebar: React.FC<SidebarProps> = ({ show = 'hidden', closeSidebar = () => {} }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [modalMode, setModalMode] = useState<'view' | 'edit'>('view');
    

    const pathName = usePathname();
    // console.log(pathName);

    const menuItems = [
        {title: "Overview", icon: <HomeOutlined />, path: '/admin' },
        {title: "Product", icon: <Campaign />, path: '/admin/products' },
        {title: "Market Intelligence", icon: <Tungsten />, path: '/admin/market-intelligence' },
        {title: "Settings", icon: <Settings />, path: '/admin/settings' },
    ];

    const isActivePath = (route: string | null) => {
        if (!route) return false;
    
        if (route === '/admin') {
            return pathName === route;
        } else {
            return pathName.startsWith(route);
        }
    };


    const addProduct = (p) => {
        console.log(null);
        // console.log('Adding product',p);
    }


    const updateProduct = (po,p) => {
        console.log('Updating product', po,p);
    }
    
  const handleAddEditProduct = (product?: Product) => {
    setSelectedProduct(product || null);
    setModalMode(product ? 'edit' : 'edit');
    setIsModalOpen(true);
  };

    
  const handleSaveProduct = (product: Product) => {
    if (selectedProduct) {
      updateProduct(selectedProduct.id, product);
    } else {
      addProduct(product);
    }
    setIsModalOpen(false);
  };


        return (
    <nav className={`overflow-auto ${show === 'block' ? 'fixed lg:hidden' : 'hidden'} lg:block top-0 left-0 z-50 lg:z-auto w-4/5 sm:w-3/5 lg:w-1/5 min-h-screen bg-[#F0F4F4] flex flex-col justify-start items-center transition-transform duration-200`}>
        <button className='self-end mr-3 md:mr-8 mt-2 text-3xl lg:hidden' onClick={closeSidebar}>&times;</button>
        <div className="flex flex-col justify-start items-center gap-8 lg:gap-12 pb-6 lg:py-6">
            <Link href="/admin" className="flex items-center justify-start gap-2">
                <div className="relative w-[48px] h-[48px]">
                    <Image
                        src="/images/logo.png"
                        alt="GreenBasket's Logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <h1 className='text-2xl xl:text-3xl text-[#064f38] font-bold'>GreenBasket</h1>
            </Link>
            
            <div className="flex items-center justify-end md:hidden">
                <span className="px-2 flex items-center justify-between gap-2">
                    <span className="text-[#333333]"><AccountCircleIcon /></span>
                    <button className="text-[#666666] flex items-center justify-between gap-1 text-sm">
                    Big Tech
                    <span className="text-[#333333]"><KeyboardArrowDown /></span>
                    </button>
                </span>
            </div>

            <div className="tabs px-2">
                <button  onClick={() => handleAddEditProduct()} className="flex items-center text-white w-full hover:text-[#064f38] bg-[#064f38] hover:bg-transparent border border-transparent hover:border-[#064f38] py-2 px-14 lg:px-10 xl:px-14 rounded-[4px] text-sm font-semibold">
                    <Add /> New Product
                </button>

                <ul className="flex flex-col items-center gap-3 mt-10 w-full">
                    {menuItems.map(item => 
                        <li key={item.title} className={`${isActivePath(item.path) ? "text-[#064f38] bg-[#cee1af90]" : "text-[#455454]"} w-full py-2 px-8 rounded-[4px] text-sm text-[#455454] lg:hover:text-[#064f38] lg:hover:bg-[#cee1af90] group transition-all duration-300 ease-linear`}>
                            <Link href={item.path} className="flex items-center gap-3">
                                <span className="">{item.icon}</span>
                                <span className="font-semibold">{item.title}</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            <div className="card bg-white w-5/6 py-8 px-10 rounded-[4px] flex flex-col items-center gap-2">
                <span className="text-[#064f38]"><HelpOutline /></span>
                <div className="relative w-[72px] h-[20px] border border-transparent">
                <Image
                    src="/needhelp.svg"
                    alt="needhelp svg"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                </div>
                <p className="text-xs text-center text-[#666666]">We are readily available to provide help</p>
                <button className="text-xs border border-[#064f38] text-[#064f38] hover:text-white bg-transparent hover:bg-[#064f38] hover:border-transparent rounded-[4px] py-2 px-6">Get help</button>
            </div>
        </div>

        {isModalOpen && (
            <ProductModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              product={selectedProduct}
              onSave={handleSaveProduct}
              mode={modalMode}
            />
        )}

    </nav>
  );
};

export default AdminSidebar;
