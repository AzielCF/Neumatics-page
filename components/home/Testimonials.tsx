import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Lo que Dicen Nuestros Clientes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4">
                "ProfessionalTires ha sido fundamental para mantener nuestra flota en óptimas condiciones. Su servicio y productos son excepcionales."
              </p>
              <p className="font-semibold">Juan Pérez, Gerente de Logística</p>
              <p className="text-sm text-gray-500">Transportes Rápidos S.A.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4">
                "La calidad de los neumáticos y el servicio de ProfessionalTires han superado nuestras expectativas. Han mejorado significativamente la eficiencia de nuestra flota."
              </p>
              <p className="font-semibold">María Rodríguez, Directora de Operaciones</p>
              <p className="text-sm text-gray-500">Distribuidora Nacional Ltda.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

