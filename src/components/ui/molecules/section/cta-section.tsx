import Link from "next/link";
import { Button } from '../../atoms/button/button'


const CTASection = () => {
  return (
    <section id="contacto" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para hacer la diferencia?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos hoy y descubre cómo podemos ayudarte con soluciones ecológicas
          </p>
          <Link href="/contacto">
            <Button size="lg" variant="secondary" className="text-lg">
              Solicitar Información
            </Button>
          </Link>
        </div>
      </section>
  )
}

export default CTASection
