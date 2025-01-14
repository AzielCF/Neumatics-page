export const products = [
  { 
    id: 1, 
    name: 'Neumático Deportivo X1', 
    price: 199.99, 
    image: 'https://th.bing.com/th/id/OIF.rF5xHloWNAMWjQ7100cxmA?rs=1&pid=ImgDetMain', 
    brand: 'Michelin', 
    type: 'Neumático', 
    category: 'Deportivo',
    description: 'Neumático de alto rendimiento para una conducción deportiva y segura.',
    rating: 4.5,
    tag: null,
    onSale: { discountPercentage: 15 },
    recommendedVehicles: [
      { brand: 'BMW', type: 'Deportivo' },
      { brand: 'Audi', type: 'Sedán' }
    ]
  },
  { 
    id: 2, 
    name: 'Neumático Todo Terreno Y2', 
    price: 249.99, 
    image: 'https://www.dunlop.co.id/files/media/76c64e9dfae21a78d36ff0d63222effa.png', 
    brand: 'Goodyear', 
    type: 'Neumático', 
    category: 'Todo Terreno',
    description: 'Diseñado para ofrecer un rendimiento excepcional en cualquier tipo de terreno.',
    rating: 4.7,
    tag: null,
    onSale: null,
    recommendedVehicles: [
      { brand: 'Toyota', type: 'SUV' },
      { brand: 'Jeep', type: 'Todo Terreno' }
    ]
  },
  { 
    id: 3, 
    name: 'Neumático Ecológico Z3', 
    price: 179.99, 
    image: 'https://70f402b497.cbaul-cdnwnd.com/c39a4002985a52e39700f8dc094d5ba7/200000032-2909d2a0b4/neu_web_Falken_ZE914.jpg?ph=70f402b497', 
    brand: 'Bridgestone', 
    type: 'Neumático', 
    category: 'Ecológico',
    description: 'Neumático de baja resistencia a la rodadura para un menor consumo de combustible.',
    rating: 4.3,
    tag: 'Derecha',
    onSale: { discountPercentage: 10 },
    recommendedVehicles: [
      { brand: 'Toyota', type: 'Sedán' },
      { brand: 'Honda', type: 'Híbrido' }
    ]
  },
  { 
    id: 4, 
    name: 'Neumático de Invierno W4', 
    price: 219.99, 
    image: 'https://s1.medias-norauto.es/images_produits/continental_conticrosscontact_winter/900x900/neumatico-4x4-continental-conticrosscontact-winter-245-65-r17-111-t-vw-xl--294658.jpg', 
    brand: 'Continental', 
    type: 'Neumático', 
    category: 'Invierno',
    description: 'Excelente agarre y rendimiento en condiciones invernales y superficies heladas.',
    rating: 4.8,
    tag: 'Atrás',
    onSale: null,
    recommendedVehicles: [
      { brand: 'Audi', type: 'SUV' },
      { brand: 'Volvo', type: 'Camioneta' }
    ]
  },
  { 
    id: 5, 
    name: 'Neumático de Verano S5', 
    price: 189.99, 
    image: 'https://zsmotorscl.vtexassets.com/arquivos/ids/182619/NE20550150001-1.jpg?v=637970407727030000', 
    brand: 'Pirelli', 
    type: 'Neumático', 
    category: 'Verano',
    description: 'Óptimo rendimiento y manejo en condiciones de verano y altas temperaturas.',
    rating: 4.6,
    tag: null,
    onSale: { discountPercentage: 20 },
    recommendedVehicles: [
      { brand: 'Ford', type: 'Sedán' },
      { brand: 'Mazda', type: 'Coupé' }
    ]
  },
  { 
    id: 6, 
    name: 'Llantas de Aleación R18', 
    price: 299.99, 
    image: 'https://www.selcus.com/1771-large_default/llanta-oz-rally-racing-dark-graphite.jpg', 
    brand: 'OZ Racing', 
    type: 'Llanta', 
    category: 'Aleación',
    description: 'Llantas de aleación ligera para mejorar el rendimiento y la estética de tu vehículo.',
    rating: 4.9,
    tag: 'Atrás',
    onSale: null,
    recommendedVehicles: [
      { brand: 'Mercedes-Benz', type: 'Coupé' },
      { brand: 'Lexus', type: 'Sedán' }
    ]
  },
  { 
    id: 7, 
    name: 'Aceite de Motor Sintético', 
    price: 49.99, 
    image: 'https://contentinfo.autozone.com/znetcs/product-info/es/MX/cas/1598B1/image/10/', 
    brand: 'Castrol', 
    type: 'Aceite', 
    category: 'Motor',
    description: 'Aceite sintético de alta calidad para una protección superior del motor.',
    rating: 4.7
  },
  { 
    id: 8, 
    name: 'Filtro de Aire de Alto Rendimiento', 
    price: 29.99, 
    image: 'https://th.bing.com/th/id/R.e4c5153d1daf8c839038c57d6acb6cf2?rik=CgM3EXZq%2b61t%2fQ&pid=ImgRaw&r=0', 
    brand: 'K&N', 
    type: 'Filtro', 
    category: 'Aire',
    description: 'Filtro de aire lavable y reutilizable para un mejor flujo de aire y rendimiento del motor.',
    rating: 4.5
  },
]

