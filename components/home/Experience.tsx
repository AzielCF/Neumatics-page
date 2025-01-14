import { CheckCircle, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function Experience() {
  return (
    <section className="py-16 bg-red-600 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/3807695[large].png)' }}>
      {/* Filtro rojo (overlay) */}
      <div className="absolute inset-0 bg-red-600 opacity-50"></div>

      {/* Contenido del componente */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-4xl font-bold mb-4 text-white">
            30 Años Cuidando de Tus Neumáticos
          </h3>
          <p className="text-xl text-gray-200">
            Brindando soluciones de calidad para conductores como tú desde 1993
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center shadow-lg">
              <CheckCircle className="h-12 w-12 text-red-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Calidad Garantizada</h4>
              <p className="text-gray-600">Todos nuestros productos pasan por rigurosos controles de calidad</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center shadow-lg">
              <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Innovación Constante</h4>
              <p className="text-gray-600">Siempre a la vanguardia en tecnología de neumáticos</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center shadow-lg">
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Servicio Personalizado</h4>
              <p className="text-gray-600">Atención especializada para cada cliente y sus necesidades</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
