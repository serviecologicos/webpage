import { Card, CardContent } from "../../atoms/card/card";

export default function TextBlock() {
  return (
    <div className="w-full">
      <Card className="shadow-2xl rounded-2xl border-0 bg-white/45 backdrop-blur-sm">
        <CardContent className="space-y-6 p-8 text-gray-700 leading-relaxed">
          <p className="text-base 3xl:text-2xl text-justify">
            <strong className="text-green-800 text-lg 3xl:text-3xl">Serviecológicos</strong> es una
            compañía vallecaucana con sede estratégica en la zona industrial de
            Acopi/Yumbo la cual se dedicada a brindar un servicio de gestión de
            residuos sólidos aprovechables y servicios medio ambientales.
          </p>
          <p className="text-base 3xl:text-2xl text-justify">
            Actualmente procesamos alrededor de{" "}
            <strong className="text-green-800 text-lg 3xl:text-3xl">400 toneladas mensuales</strong>, garantizando el correcto
            aprovechamiento e ingreso a la cadena productiva (Economía circular).
          </p>
          <p className="text-base 3xl:text-2xl text-justify">
            Contamos con una bodega de más de <strong className="text-green-800 text-lg 3xl:text-3xl">550mt2</strong>, circuito
            de vigilancia y monitoreo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}