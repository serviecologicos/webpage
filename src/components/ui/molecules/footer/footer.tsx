import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { NavbarProps } from "../navbar/navbar.types";

interface FooterComponentProps {
  footerContent: NavbarProps;
}

const Footer = ({ footerContent }: FooterComponentProps) => {
  const { linksCollection, logo } = footerContent;

  const menuItems = linksCollection.items;
  return (
    <footer className="bg-card/60 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src={logo.media.url}
                alt={logo.title}
                width={72}
                height={72}
              />
              <span className="text-xl font-bold text-foreground">
                SERVIECOLÓGICOS FRC
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Comprometidos con un futuro sostenible a través de soluciones
              innovadoras en gestión de residuos.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1Fg4zsAbpV/?mibextid=wwXIfr" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/serviecologicos/" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@serviecologicos.f" className="text-muted-foreground hover:text-primary transition-colors">
                <SiTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Navegación</h3>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="tetext-muted-foreground hover:text-primary transition-colors"
                    target={item.isExternalLink ? "_blank" : undefined}
                    rel={
                      item.isExternalLink ? "noopener noreferrer" : undefined
                    }
                  >
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span>+57 (300) 664-8523</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <span>serviecologicosfrc3@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>Cali - Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 Serviecológicos. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
