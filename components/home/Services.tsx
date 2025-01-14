"use client"; // Esto indica que es un componente de cliente

import { Wrench, RotateCcw, Gauge, ShieldCheck, MessageSquare } from "lucide-react"; // Asegúrate de tener el icono de WhatsApp
import WhatsAppIcon from "../icons/whatsapp-icon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Wrench className="h-10 w-10 text-red-600" />,
    title: 'Cambio de Neumáticos',
    description: 'Servicio profesional de cambio de neumáticos para todo tipo de vehículos.'
  },
  {
    icon: <RotateCcw className="h-10 w-10 text-red-600" />,
    title: 'Rotación de Neumáticos',
    description: 'Maximiza la vida útil de tus neumáticos con nuestro servicio de rotación.'
  },
  {
    icon: <Gauge className="h-10 w-10 text-red-600" />,
    title: 'Alineación y Balanceo',
    description: 'Mejora el rendimiento y la seguridad de tu vehículo con nuestro servicio de alineación y balanceo.'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-red-600" />,
    title: 'Reparación de Pinchazos',
    description: 'Reparación rápida y eficiente de pinchazos para que vuelvas a la carretera lo antes posible.'
  }
];

export function Services() {
  const whatsappNumber = "1234567890"; // Reemplaza con tu número de WhatsApp

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hola, estoy interesado en un servicio personalizado. ¿Podemos coordinar?"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          ¿Necesitas una mano?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Nuestros expertos están listos para ayudarte con cualquier servicio
          que necesites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex flex-col justify-between"
            >
              <CardContent className="px-6 pt-6 flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              
              {/* Botón siempre al final del Card */}
              <div className="px-4 pb-4 bg-gray-50">
                <Button
                  variant="outline"
                  className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                  onClick={handleWhatsAppContact}
                >
                  <WhatsAppIcon className={"h-5 w-5 mr-2"}/>
                  Solicitar Servicio
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all"
            onClick={handleWhatsAppContact}
          >
            Solicitar un servicio personalizado
          </Button>
        </div>
      </div>
    </section>
  );
}
