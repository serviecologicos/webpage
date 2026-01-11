
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { getGlobalProps } from "@/lib/global-props";
import { useRouter } from "next/router";
import { Home, ArrowLeft, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.error("404 Error: User attempted to access non-existent route:", router.asPath);
  }, [router.asPath]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icono animado */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
            <Recycle className="w-16 h-16 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 w-40 h-40 mx-auto">
            <span className="text-8xl font-bold text-primary/20 select-none">404</span>
          </div>
        </div>

        {/* Mensaje principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Página no encontrada
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
        </p>

        {/* Ruta intentada */}
        {mounted && (
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block">
            <p className="text-sm text-muted-foreground">
              Ruta solicitada: <code className="bg-primary/10 px-2 py-1 rounded text-primary font-mono">{router.asPath}</code>
            </p>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="gap-2">
              <Home className="w-5 h-5" />
              Ir al inicio
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver atrás
          </Button>
        </div>

        {/* Links útiles */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">También puedes visitar:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="text-primary hover:underline text-sm">
              Inicio
            </Link>
            <Link href="/servicios" className="text-primary hover:underline text-sm">
              Servicios
            </Link>
            <Link href="/contacto" className="text-primary hover:underline text-sm">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
export const getStaticProps: GetStaticProps = getGlobalProps;