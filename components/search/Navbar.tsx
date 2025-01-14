"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ totalCartItems, isSidebarOpen, toggleCartSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-auto w-full md:w-[calc(100%-280px)] box-border z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/35 backdrop-blur-md" : "bg-transparent"
      } h-20`}
    >
      <div className="container mx-auto px-8 h-full flex justify-between items-center">
        <a href='/' className="text-2xl font-bold text-black">ProfessionalTires</a>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-black hover:text-red-400 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#"
            className="text-black hover:text-red-400 transition-colors"
          >
            Sobre Nosotros
          </a>
          <a
            href="#"
            className="text-black hover:text-red-400 transition-colors"
          >
            Contacto
          </a>
        </nav>
        <div className="space-x-6 md:hidden">
          <button onClick={toggleCartSidebar} className="relative">
            <ShoppingCart className="w-6 h-6" />
            <div className="bg-red-600 text-white w-5 h-5 rounded-full flex justify-center items-center absolute -top-2 -right-4">
              {totalCartItems}
            </div>
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className={`md:hidden fixed top-20 left-0 right-0 bg-black bg-opacity-90 z-40 ${
              isSidebarOpen ? "w-[calc(100%-280px)]" : "w-full"
            } `}
          >
            <nav className="flex flex-col items-center py-4">
              <a
                href="#"
                className="py-2 text-white hover:text-red-400 transition-colors"
              >
                Servicios
              </a>
              <a
                href="#"
                className="py-2 text-white hover:text-red-400 transition-colors"
              >
                Sobre Nosotros
              </a>
              <a
                href="#"
                className="py-2 text-white hover:text-red-400 transition-colors"
              >
                Contacto
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
