import { useState } from "react";
import { GetStaticProps } from "next";
import { getGlobalProps } from "@/lib/global-props";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/atoms/input/input";
import { Button } from "@/components/ui/atoms/button/button";
import { Textarea } from "@/components/ui/atoms/textarea/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Send,
  Recycle,
} from "lucide-react";
import { SiWhatsapp, SiTiktok } from "react-icons/si";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/molecules/sonner/sonner";
import Image from "next/image";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        // ← Cambio aquí
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await res.json();

      if (json.status === "success") {
        toast.success("Mensaje enviado", {
          description: "Nos pondremos en contacto contigo pronto.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.info("Algo salió mal", {
          description: "Intenta más tarde o escríbenos al whatsapp.",
        });
        console.log("Error al enviar el mensaje:", json.message);
      }
    } catch (error) {
      toast.error("Error al enviar el mensaje", {
        description: "Comuniquese con el administrador o al whatsapp.",
      });
      console.error("Error al enviar el mensaje:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contacto"
      className="relative py-36 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden"
    >
      <Toaster />
      {/* Hero Section with Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={"/assets/collage.webp"}
            alt="Collage Serviecológicos"
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-primary/20 blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Recycle className="h-12 w-12 text-primary animate-[float_3s_ease-in-out_infinite]" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Contáctanos
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje o comunícate
            directamente con nosotros
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="backdrop-blur-sm bg-card/95 shadow-xl border-2 hover:shadow-2xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Send className="h-6 w-6 text-primary" />
                Envíanos un Mensaje
              </CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos lo antes posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+57 300 123 4567"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone Card */}
            <Card className="backdrop-blur-sm bg-card/95 shadow-lg border-2 hover:shadow-xl transition-all hover:scale-[1.02] group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      Llámanos
                    </h3>
                    <a
                      href="tel:+573006648523"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      +57 300 664 8523
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lunes a Viernes: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="backdrop-blur-sm bg-card/95 shadow-lg border-2 hover:shadow-xl transition-all hover:scale-[1.02] group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#25D366]/10 rounded-lg group-hover:bg-[#25D366]/20 transition-colors">
                    <SiWhatsapp className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/573006648523"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#25D366] transition-colors text-lg"
                    >
                      +57 300 664 8523
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chat directo - Respuesta inmediata
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="backdrop-blur-sm bg-card/95 shadow-lg border-2 hover:shadow-xl transition-all hover:scale-[1.02] group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      Escríbenos
                    </h3>
                    <a
                      href="mailto:serviecologicos@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors text-lg break-all"
                    >
                      serviecologicosfrc3@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Respuesta en menos de 24 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="backdrop-blur-sm bg-card/95 shadow-lg border-2 hover:shadow-xl transition-all hover:scale-[1.02] group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      Visítanos
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Cali - Colombia
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Con cita previa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="backdrop-blur-sm bg-card/95 shadow-lg border-2">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 text-foreground">
                  Síguenos en Redes Sociales
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/1Fg4zsAbpV/?mibextid=wwXIfr"
                    className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all hover:scale-110 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/serviecologicos/"
                    className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all hover:scale-110 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@serviecologicos.f"
                    className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all hover:scale-110 group"
                    aria-label="LinkedIn"
                  >
                    <SiTiktok className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
export const getStaticProps: GetStaticProps = getGlobalProps;
