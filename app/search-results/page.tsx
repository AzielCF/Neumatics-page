"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Footer } from "@/components/Footer";
import { ProductDetail } from "@/components/search/ProductDetail";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { products } from "@/constans/products";
import SearchLayout from "@/components/search/Layout";

const brands = [
  "Todas",
  "Michelin",
  "Goodyear",
  "Bridgestone",
  "Continental",
  "Pirelli",
  "OZ Racing",
  "Castrol",
  "K&N",
];
const categories = ["Todos", "Neumático", "Llanta", "Aceite", "Filtro"];
const types = [
  "Todos",
  "Deportivo",
  "Todo Terreno",
  "Ecológico",
  "Invierno",
  "Verano",
  "Aleación",
  "Motor",
  "Aire",
];

const banners = [
  {
    id: 1,
    image:
      "https://loja.magnumtires.com.br/medias/banner-nossas-marcas.png?context=bWFzdGVyfHJvb3R8OTU4Mzk3fGltYWdlL3BuZ3xhREV3TDJobVlTODVNalUwTURreE56VXhORFUwTDJKaGJtNWxjaTF1YjNOellYTXRiV0Z5WTJGekxuQnVad3wzMjJjYzk5ZDdmNTJkNzljOTliZThlMGIwNmU4NmJjNjI3Y2RlMzllZmQ3ODI4ODYzMGRhODc5NGRhOTRiMWFj",
    alt: "Oferta especial en neumáticos",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/vector-premium/banner-venta-llantas-automovil-compre-1-obtenga-1-gratis-folleto-servicio-llantas-automovil-fondo-promocional-publicidad-venta-llantas_41737-1182.jpg",
    alt: "Nuevas llantas de aleación",
  },
  {
    id: 3,
    image:
      "https://as2.ftcdn.net/v2/jpg/04/61/70/57/1000_F_461705747_EDisIfTydDLnHd409awRsqq0VnliEJfY.jpg",
    alt: "Descuento en servicios de mantenimiento",
  },
];

export default function SearchResults() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Todas");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedType, setSelectedType] = useState("Todos");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [cart, setCart] = useState([]);

  const searchParams = useSearchParams();
  const brand = searchParams.get("brand");
  const type = searchParams.get("type");

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedBrand === "Todas" || product.brand === selectedBrand) &&
        (selectedCategory === "Todos" || product.type === selectedCategory) &&
        (selectedType === "Todos" || product.category === selectedType) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  }, [searchTerm, selectedBrand, selectedCategory, selectedType, priceRange]);

  useEffect(() => {
    const productId = searchParams.get("productId");
    if (productId) {
      const product = products.find((p) => p.id === parseInt(productId));
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, [searchParams]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = (product, quantity?: number) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + (quantity ?? 1) }
          : item
      );
      setCart(updatedCart);
    } else {
      const newProduct = { ...product, quantity: quantity ?? 1 };
      setCart([...cart, newProduct]);
    }
  };

  return (
    <SearchLayout cart={cart} setCart={setCart}>
      <div className="flex flex-col min-h-screen bg-gray-100 ">
        <Carousel
          className="w-full"
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
        >
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="md:w-full h-250 md:h-[450px] object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <main className="container mx-auto px-8 py-16">
          <h1 className="text-3xl font-bold mb-4">{brand ? 'Resultados de búsqueda' : 'Productos'} </h1>
          {brand && (
            <p className="mb-8">
              Recomendados para: {brand} - {type}
            </p>
          )}


          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Input
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select onValueChange={setSelectedBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Marca" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div>
              <p className="mb-2">
                Rango de precio: ${priceRange[0]} - ${priceRange[1]}
              </p>
              <Slider
                min={0}
                max={300}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-lg hover:shadow-red-700 transition-shadow duration-300 ease-in-out relative"
              >
                <CardContent className="p-5 flex flex-col h-full">
                  {/* Imagen del producto */}
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover rounded-t-lg mb-6"
                    />

                    {/* Tag (si existe) */}
                    {product.tag && (
                      <span className="absolute top-2 left-0 text-xs font-semibold text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
                        {product.tag}
                      </span>
                    )}

                    {/* Porcentaje de descuento más predominante */}
                    {product.onSale && (
                      <span className="absolute top-2 right-0 text-xs font-bold text-white bg-red-600 px-2 py-1 rounded-full shadow-lg">
                        -{product.onSale.discountPercentage}%
                      </span>
                    )}
                  </div>

                  {/* Nombre del producto */}
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name.length > 40
                      ? `${product.name.slice(0, 40)}...`
                      : product.name}
                  </h2>

                  {/* Marca del producto */}

                  <p className="text-gray-800 text-md mb-4">{product.brand}</p>

                  {/* Precio y descuento */}
                  <div className="mt-auto flex justify-between items-center">
                    <div>
                      {product.onSale ? (
                        <>
                          <p className="text-red-600 font-bold text-lg">
                            $
                            {(
                              product.price *
                              (1 - product.onSale.discountPercentage / 100)
                            ).toFixed(2)}
                          </p>
                          <p className="text-gray-500 text-sm line-through">
                            ${product.price.toFixed(2)}
                          </p>
                        </>
                      ) : (
                        <p className="text-gray-800 font-bold text-lg">
                          ${product.price.toFixed(2)}
                        </p>
                      )}
                    </div>

                    {/* Botón de añadir al carrito */}
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-all duration-200 ease-in-out"
                      onClick={(e) => {
                        e.stopPropagation(); // Evitar que el clic del botón afecte a la tarjeta
                        addToCart(product);
                      }}
                    >
                      Añadir al carrito
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <Footer />
        {selectedProduct && (
          <ProductDetail
            addToCart={addToCart}
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </SearchLayout>
  );
}
