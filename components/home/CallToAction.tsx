import { Button } from "@/components/ui/button"
import WhatsAppIcon from "../icons/whatsapp-icon"

export function CallToAction() {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">
          ¿Listo para Mejorar la Seguridad de Tu Auto?
        </h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contáctanos hoy para una consulta gratuita y descubre cómo podemos mejorar el rendimiento y la seguridad de tu vehículo.
        </p>
        <Button className="bg-white text-red-600 hover:bg-gray-100">
          <WhatsAppIcon className={"fill-red h-10 w-10"} />
          Agendar Cita
        </Button>
      </div>
    </section>
  )
}

