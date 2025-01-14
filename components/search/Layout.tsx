'use client';
import { Suspense } from 'react';
import { Navbar } from "@/components/search/Navbar";
import { useState } from "react";
import { CartSidebar } from "@/components/search/CartSidebar";
import { ReactNode } from "react";

const SearchLayout = ({
  children,
  cart,
  setCart,
}: {
  children: ReactNode;
  cart: any;
  setCart: any;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Alternar el estado del sidebar
  };
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar totalCartItems={totalCartItems}  isSidebarOpen={isSidebarOpen} toggleCartSidebar={toggleSidebar}/>
      <main className="flex-grow w-full md:w-[calc(100%-280px)]">
        <Suspense fallback={<div>Loading...</div>}>
          {children} {/* Esto es donde se renderizarán las páginas */}
        </Suspense>
      </main>

      <CartSidebar
        cart={cart}
        whatsappNumber="+51939043039"
        setCart={setCart}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
};

export default SearchLayout;
