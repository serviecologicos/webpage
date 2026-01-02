import { GetStaticProps } from "next";
import { getGlobalProps } from "@/lib/global-props";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Recycle,
  Factory,
  CheckCircle2,
  ArrowRight,
  Truck,
  GraduationCap,
  Shield,
  Leaf,
  ClipboardCheck,
  Building2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const serviciosData = [
  {
    id: "recoleccion",
    icon: Recycle,
    title: "Recolección y Clasificación",
    subtitle: "Gestión integral de residuos reciclables",
    description:
      "Recolección, clasificación y disposición adecuada de desechos reciclables con personal calificado y equipo de protección completo.",
    features: [
      "Personal capacitado con EPP completo",
      "Clasificación en origen de materiales",
      "Pesaje y documentación detallada",
      "Frecuencias de recolección personalizadas",
      "Contenedores y bolsas proporcionados",
      "Reportes mensuales de volúmenes",
    ],
    materials: [
      "Cartón",
      "Papel",
      "Plástico",
      "Vidrio",
      "Metales",
      "Electrónicos",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    id: "capacitaciones",
    icon: GraduationCap,
    title: "Capacitaciones Gratuitas",
    subtitle: "Formación profesional para tu equipo",
    description:
      "Capacitación al personal por profesionales idóneos para mejorar procesos de selección, almacenamiento y despacho de materiales reciclables.",
    features: [
      "Talleres presenciales en tu empresa",
      "Material didáctico incluido",
      "Certificados de participación",
      "Seguimiento post-capacitación",
      "Evaluaciones de aprendizaje",
      "Actualizaciones normativas",
    ],
    topics: [
      "Separación en origen",
      "Normativa ambiental",
      "Manejo seguro",
      "Buenas prácticas",
      "Economía circular",
      "Huella de carbono",
    ],
    color: "from-accent/20 to-accent/5",
  },
  {
    id: "manejo-integral",
    icon: Factory,
    title: "Manejo Integral de Desechos",
    subtitle: "Soluciones completas para industrias",
    description:
      "Solución integral para industrias con inspecciones periódicas, informes detallados y planes de mejora continua para optimizar bodegas y procesos.",
    features: [
      "Diagnóstico inicial completo",
      "Plan de gestión personalizado",
      "Inspecciones programadas",
      "Informes de seguimiento",
      "Optimización de espacios",
      "Indicadores de desempeño",
    ],
    industries: [
      "Manufactura",
      "Comercio",
      "Hotelería",
      "Hospitales",
      "Educación",
      "Gobierno",
    ],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    id: "transporte",
    icon: Truck,
    title: "Transporte y Logística",
    subtitle: "Flota propia para evacuación eficiente",
    description:
      "Transporte propio para evacuación de materiales con flexibilidad de horarios y capacidad de respuesta inmediata ante sus necesidades.",
    features: [
      "Flota vehicular propia",
      "GPS y trazabilidad completa",
      "Horarios flexibles 24/7",
      "Respuesta inmediata",
      "Vehículos especializados",
      "Conductores certificados",
    ],
    vehicles: [
      "Camionetas",
      "Camiones",
      "Furgones",
      "Contenedores",
      "Compactadores",
      "Volquetas",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    id: "disposicion",
    icon: Shield,
    title: "Disposición Final Certificada",
    subtitle: "Garantía de destrucción asegurada",
    description:
      "Garantía de destrucción asegurada con alianzas estratégicas con empresas líderes como Empaques Industriales, Fibras Nacionales y Sidoc.",
    features: [
      "Certificados de destrucción",
      "Cadena de custodia documentada",
      "Alianzas con transformadores",
      "Cumplimiento legal garantizado",
      "Trazabilidad completa",
      "Auditorías disponibles",
    ],
    partners: [
      "Empaques Industriales",
      "Fibras Nacionales",
      "Sidoc",
      "Smurfit Kappa",
      "Papelsa",
      "Familia",
    ],
    color: "from-accent/20 to-accent/5",
  },
  {
    id: "asesoria",
    icon: ClipboardCheck,
    title: "Asesoría Ambiental",
    subtitle: "Acompañamiento experto continuo",
    description:
      "Apoyo integral en el proceso de reciclaje mediante inspecciones periódicas, confidencialidad total y prácticas amigables con el ambiente.",
    features: [
      "Consultoría especializada",
      "Auditorías ambientales",
      "Planes de mejora continua",
      "Reportes de sostenibilidad",
      "Cumplimiento normativo",
      "Indicadores ESG",
    ],
    certifications: [
      "ISO 14001",
      "LEED",
      "Carbono Neutro",
      "Economía Circular",
      "Gestión Ambiental",
      "RSE",
    ],
    color: "from-secondary/20 to-secondary/5",
  },
];

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <Image
            src={"/assets/banner.webp"}
            alt="Collage Serviecológicos"
            fill
            className="object-cover grayscale"
            priority
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/50 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-semibold">
                Soluciones Ecológicas Integrales
              </span>
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Transformamos residuos en oportunidades. Descubre cómo podemos
              ayudarte a implementar prácticas sostenibles en tu organización.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-secondary/30 sticky top-[80px] z-40 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {serviciosData.map((servicio) => (
              <button
                key={servicio.id}
                onClick={() => {
                  document
                    .getElementById(servicio.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium shadow-sm hover:shadow-md cursor-pointer"
              >
                <servicio.icon className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {servicio.title.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      <div className="py-20">
        {serviciosData.map((servicio, index) => (
          <section
            key={servicio.id}
            id={servicio.id}
            className={`py-20 ${
              index % 2 === 0 ? "bg-background" : "bg-secondary/50"
            }`}
          >
            <div className="container mx-auto px-4 relative z-10">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-8 ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <div className="space-y-4">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${servicio.color} shadow-lg`}
                    >
                      <servicio.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                      {servicio.title}
                    </h2>
                    <p className="text-xl text-primary font-medium">
                      {servicio.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {servicio.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {servicio.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="group" size="lg">
                    <Link href="/contacto">
                      Solicitar Información
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    
                  </Button>
                </div>

                {/* Visual Card */}
                <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <Card
                    className={`overflow-hidden shadow-2xl border-0 bg-gradient-to-br ${servicio.color}`}
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Building2 className="h-6 w-6 text-primary" />
                        {servicio.materials
                          ? "Materiales que procesamos"
                          : servicio.topics
                          ? "Temas que cubrimos"
                          : servicio.industries
                          ? "Sectores que atendemos"
                          : servicio.vehicles
                          ? "Nuestra flota"
                          : servicio.partners
                          ? "Nuestros aliados"
                          : "Certificaciones disponibles"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {(
                          servicio.materials ||
                          servicio.topics ||
                          servicio.industries ||
                          servicio.vehicles ||
                          servicio.partners ||
                          servicio.certifications
                        )?.map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-3 text-center shadow-sm hover:shadow-md transition-shadow hover:scale-105 transform transition-transform"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <div className="text-3xl font-bold text-primary">
                        100%
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Garantizado
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-accent/10">
                      <div className="text-3xl font-bold text-accent">24/7</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Disponibilidad
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-secondary/30">
                      <div className="text-3xl font-bold text-secondary-foreground">
                        15+
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Años
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contáctanos hoy y descubre cómo podemos transformar la gestión de
              residuos en tu empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Contáctanos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Servicios;
export const getStaticProps: GetStaticProps = getGlobalProps;
