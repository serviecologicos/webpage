# TextBlock Component

Un componente React reutilizable para renderizar contenido rich text de Contentful de forma dinámica, con soporte para texto en negrita y diferentes variantes de presentación.

## Características

- ✅ Renderizado dinámico de contenido rich text de Contentful
- ✅ Soporte para texto en negrita con estilos personalizados
- ✅ Múltiples variantes de presentación (default, compact, expanded)
- ✅ Manejo de errores con fallback automático
- ✅ Componente totalmente reutilizable
- ✅ Tipos TypeScript incluidos
- ✅ Clases CSS personalizables

## Uso Básico

```tsx
import TextBlock from './components/ui/molecules/text-block/text-block';

function MyPage() {
  // El documento que llega desde Contentful
  const contentfulDocument = {
    nodeType: "document",
    data: {},
    content: [
      {
        nodeType: "paragraph",
        data: {},
        content: [
          {
            nodeType: "text",
            value: "En ",
            marks: [],
            data: {}
          },
          {
            nodeType: "text",
            value: "Serviecológicos FRC",
            marks: [{ type: "bold" }],
            data: {}
          },
          {
            nodeType: "text",
            value: " transformamos los desechos...",
            marks: [],
            data: {}
          }
        ]
      }
    ]
  };

  return (
    <TextBlock description={contentfulDocument} />
  );
}
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `description` | `Document` | Required | El documento rich text de Contentful |
| `variant` | `"default" \| "compact" \| "expanded"` | `"default"` | Variante de presentación |
| `className` | `string` | `""` | Clases CSS adicionales |

## Variantes

### Default
```tsx
<TextBlock description={document} variant="default" />
```
- Espaciado: `space-y-6`
- Padding: `p-8`
- Texto: `text-base 3xl:text-2xl`
- Texto en negrita: `text-lg 3xl:text-3xl`

### Compact
```tsx
<TextBlock description={document} variant="compact" />
```
- Espaciado: `space-y-3`
- Padding: `p-6`
- Texto: `text-sm 3xl:text-lg`
- Texto en negrita: `text-base 3xl:text-xl`

### Expanded
```tsx
<TextBlock description={document} variant="expanded" />
```
- Espaciado: `space-y-8`
- Padding: `p-12`
- Texto: `text-lg 3xl:text-3xl`
- Texto en negrita: `text-xl 3xl:text-4xl`

## Uso con Servicios Incluidos

```tsx
import { TextBlockService } from './text-block.service';

function MyComponent({ contentfulData }) {
  // Validar el documento antes de usar
  const isValid = TextBlockService.isValidDocument(contentfulData);
  
  if (!isValid) {
    return <div>Contenido no válido</div>;
  }

  // Extraer información adicional si es necesario
  const plainText = TextBlockService.extractPlainText(contentfulData);
  const boldTexts = TextBlockService.extractBoldText(contentfulData);

  return (
    <div>
      <TextBlock description={contentfulData} />
      
      {/* Información adicional extraída */}
      <div className="mt-4 text-sm text-gray-600">
        <p>Texto plano: {plainText.substring(0, 100)}...</p>
        <p>Textos destacados: {boldTexts.join(', ')}</p>
      </div>
    </div>
  );
}
```

## Servicios Incluidos

### TextBlockService

Utilidades para trabajar con documentos rich text:

```tsx
import { TextBlockService } from './text-block.service';

// Validar documento
const isValid = TextBlockService.isValidDocument(document);

// Extraer texto plano
const plainText = TextBlockService.extractPlainText(document);

// Contar párrafos
const paragraphCount = TextBlockService.countParagraphs(document);

// Extraer textos en negrita
const boldTexts = TextBlockService.extractBoldText(document);

// Crear documento vacío (fallback)
const emptyDoc = TextBlockService.createEmptyDocument();
```

## Integración con Contentful

El componente está diseñado para trabajar directamente con el formato de documento que devuelve Contentful:

```tsx
// Ejemplo de consulta GraphQL de Contentful
const query = `
  query {
    myContent {
      description {
        json
      }
    }
  }
`;

// Uso del resultado
function ContentPage({ data }) {
  return (
    <TextBlock description={data.myContent.description.json} />
  );
}
```

## Estilos Personalizados

```tsx
<TextBlock 
  description={document}
  className="max-w-4xl mx-auto shadow-lg"
  variant="expanded"
/>
```

## Manejo de Errores

El componente incluye manejo automático de errores:

- Si el documento no es válido, se muestra un contenido de fallback
- Si faltan propiedades, se usan valores por defecto
- Los errores de renderizado se capturan automáticamente

## Dependencias

- `@contentful/rich-text-react-renderer`
- `@contentful/rich-text-types`
- `react`

## Instalación de Dependencias

```bash
npm install @contentful/rich-text-react-renderer @contentful/rich-text-types
```

## Estructura de Archivos

```
text-block/
├── text-block.tsx           # Componente principal
├── text-block.types.ts      # Definiciones de tipos
├── text-block.service.ts    # Servicios y utilidades
└── README.md               # Documentación
```