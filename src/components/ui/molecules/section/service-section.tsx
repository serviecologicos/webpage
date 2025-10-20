import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../atoms/card/card";
import {
  Award,
  Droplets,
  Factory,
  Recycle,
  TrendingUp,
  Users,
} from "lucide-react";

const ServiceSection = ({ backgroundImage }: { backgroundImage: string }) => {
  return (
    <section
      id="servicios"
      className="relative py-20 md:py-52 bg-background"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "rgba(255, 255, 255, 0.6)",
        }}
      />
      <div className="container mx-auto px-4 2xl:pt-36 landscape:max-[800px]:pt-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluciones ecológicas adaptadas a tus necesidades
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Recycle className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Recolección y Clasificación</CardTitle>
              <CardDescription>
                Recolección, clasificación y disposición adecuada de desechos
                reciclables con personal calificado y equipo de protección
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Capacitaciones Gratuitas</CardTitle>
              <CardDescription>
                Capacitación al personal por profesionales idóneos para mejorar
                procesos de selección, almacenamiento y despacho de materiales
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Factory className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Manejo Integral de Desechos</CardTitle>
              <CardDescription>
                Solución integral para industrias con inspecciones, informes y
                planes de mejora optimizando bodegas y procesos
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Transporte y Logística</CardTitle>
              <CardDescription>
                Transporte propio para evacuación de materiales con flexibilidad
                de horarios y capacidad de respuesta inmediata
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Disposición Final Certificada</CardTitle>
              <CardDescription>
                Garantía de destrucción asegurada y alianzas con empresas como
                Empaques Industriales, Fibras Nacionales y Sidoc
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Droplets className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Asesoría Ambiental</CardTitle>
              <CardDescription>
                Apoyo en el proceso de reciclaje mediante inspecciones,
                confidencialidad y prácticas amigables con el ambiente
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
