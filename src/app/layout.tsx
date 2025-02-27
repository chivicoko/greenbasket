import { ReactNode } from 'react';
import './globals.css';
import ScrollToTopButton from '@/components/button/ScrollToTopButton';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { ProductFormProvider } from '@/context/ProductFormContext';
import { UserFormProvider } from '@/context/UserFormContext';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--font-jost' });

export const metadata = {
  title: {
    default: "GreenBasket Stores | Online Store for Groceries of all sorts",
    template: "%s | GreenBasket Stores"
  },
  description: "GreenBasket Stores is the number 1 Online store for groceries of all sorts, making buying and selling of groceries of all sorts really easy for everyone.",
  keywords: "Next.js, TypeScript, TailwindCSS, E-commerce, Groceries, store, Product Listing, Product Management, CRUD, Admin",
  openGraph: {
    type: 'website',
    url: 'https://greenbasket-cyan.vercel.app',
    title: "GreenBasket Stores",
    description: "GreenBasket is the number 1 e-commerce product listing platform which makes buying and selling really easy for everyone.",
    // images: [
    //   {
    //     url: 'https://yourwebsite.com/path/to/image.jpg',
    //     // url: '/images/logo.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Open Graph Image',
    //   },
    // ], 
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "GreenBasket Store",
  //   description: "GreenBasket is the number 1 e-commerce product listing platform which makes buying and selling really easy for everyone.",
  //   image: 'https://yourwebsite.com/path/to/twitter-image.jpg',
  // },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body className='font-jost overflow-x-hidden bg-zinc-50'>
        <CartProvider>
          <WishlistProvider>
            <ProductFormProvider>
              <UserFormProvider>
                {children}
              </UserFormProvider>
            </ProductFormProvider>
          </WishlistProvider>
        </CartProvider>
        
        <ScrollToTopButton/>
      </body>
    </html>
  );
}
