import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";
import { Card, CardContent } from "../../atoms/card/card";
import { TextBlockProps } from "./text-block.types";
import { TextBlockService } from "./text-block.service";

export default function TextBlock({ 
  description, 
  className = "", 
  variant = "default" 
}: TextBlockProps) {
  
  // Validar el documento y usar fallback si es necesario
  const validDocument = TextBlockService.isValidDocument(description) 
    ? description 
    : TextBlockService.createEmptyDocument();

  // Configuración de estilos según la variante
  const getVariantStyles = () => {
    switch (variant) {
      case "compact":
        return {
          spacing: "space-y-3",
          padding: "p-6",
          text: "text-sm 3xl:text-lg",
          boldText: "text-green-800 text-base 3xl:text-xl"
        };
      case "expanded":
        return {
          spacing: "space-y-8",
          padding: "p-12",
          text: "text-lg 3xl:text-3xl",
          boldText: "text-green-800 text-xl 3xl:text-4xl"
        };
      default:
        return {
          spacing: "space-y-6",
          padding: "p-8",
          text: "text-base 3xl:text-2xl",
          boldText: "text-green-800 text-lg 3xl:text-3xl"
        };
    }
  };

  const styles = getVariantStyles();

  // Opciones para el renderizado del rich text
  const renderOptions: Options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => (
        <strong className={`${styles.boldText} font-bold`}>
          {text}
        </strong>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={`${styles.text} text-justify mb-4 last:mb-0`}>
          {children}
        </p>
      ),
    },
  };

  return (
    <div className={`w-full ${className}`}>
      <Card className="shadow-2xl rounded-2xl border-0 bg-white/45 backdrop-blur-sm">
        <CardContent className={`${styles.spacing} ${styles.padding} text-gray-700 leading-relaxed`}>
          {documentToReactComponents(validDocument, renderOptions)}
        </CardContent>
      </Card>
    </div>
  );
}