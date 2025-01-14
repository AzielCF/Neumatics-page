'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash, Plus } from "lucide-react";
import WhatsAppIcon from "../icons/whatsapp-icon";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartSidebarProps {
  cart: CartItem[];
  setCart: (newCart: CartItem[]) => void;
  whatsappNumber: string;
  isOpen: boolean;
  toggleSidebar: () => void;  // Nueva propiedad para manejar el toggle desde fuera
}

export function CartSidebar({
  cart,
  setCart,
  whatsappNumber,
  isOpen,
  toggleSidebar,  // Recibimos la función toggle desde fuera
}: CartSidebarProps) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleWhatsAppCheckout = () => {
    const message = `Hola, me gustaría comprar los siguientes productos:\n\n${cart
      .map(
        (item) =>
          `${item.quantity}x ${item.name} - $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n")}\n\nTotal: $${totalPrice.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart); // Actualizamos el carrito directamente
  };

  const handleDecreaseQuantity = (id: number) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const handleIncreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div
      className={`fixed top-20 md:top-0 right-0 h-full w-[280px] bg-white shadow-lg flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}
    >
      <div className="flex justify-between items-center p-4 mt-3 mb-2">
        <h2 className="text-2xl font-bold text-gray-900">
          Tu carrito {cart.length > 0 ? "(" + totalItems + ")" : null}
        </h2>
        {/* Solo se muestra el botón en pantallas pequeñas */}
        <Button onClick={toggleSidebar} className="p-2 bg-gray-200 rounded-full md:hidden">
          {isOpen ? "Cerrar" : "Abrir"} Carrito
        </Button>
      </div>

      <div className="px-4 overflow-y-auto z-10">
        {cart.map((item) => (
          <div key={item.id} className="mb-4  border-gray-300 pb-2 last:border-0">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm text-gray-900">{item.name}</p>
              <p className="font-normal text-sm ml-2 text-gray-800">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between ">
              <p className="text-sm"><span className="text-gray-600">Cantidad:</span> {item.quantity}</p>
              <div className="flex items-center">
                {item.quantity === 1 ? (
                  <Button className="bg-transparent hover:bg-red-200 text-white " onClick={() => handleRemoveItem(item.id)}>
                    <Trash className=" text-gray-700" />
                  </Button>
                ) : (
                  <Button className="bg-transparent hover:bg-gray-100 text-gray-700 text-2xl" onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </Button>
                )}
                <Button className="bg-transparent hover:bg-gray-100" onClick={() => handleIncreaseQuantity(item.id)}>
                  <Plus className="text-gray-700 text-2xl" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total y botón siempre al fondo */}
      {cart.length ? (
        <div className="mt-auto p-4 pb-24 md:pb-4 mb-2 shadow-inner">
          <p className="flex justify-between">
            <span className="font-bold text-gray-900">Total</span>{" "}
            <span>${totalPrice.toFixed(2)}</span>
          </p>

          <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white" onClick={handleWhatsAppCheckout}>
            <WhatsAppIcon className={"fill-white h-10 w-10"} />
            Pedir ahora
          </Button>
        </div>
      ) : (
        <div className="mt-auto px-4 flex-1 flex flex-col justify-center items-center">
          <ShoppingCart className="text-3xl text-gray-600" />
          <p className="text-gray-600">El carrito está vacío</p>
        </div>
      )}
    </div>
  );
}
