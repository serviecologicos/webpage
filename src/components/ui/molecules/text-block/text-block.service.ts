import { Document, BLOCKS } from "@contentful/rich-text-types";
import { RichTextNode } from "./text-block.types";

/**
 * Servicio para manejar contenido rich text de Contentful
 */
export class TextBlockService {
  
  /**
   * Valida si un documento de Contentful es válido
   */
  static isValidDocument(document: Document): boolean {
    return (
      document &&
      typeof document === 'object' &&
      document.nodeType === 'document' &&
      Array.isArray(document.content)
    );
  }

  /**
   * Extrae el texto plano de un documento rich text
   */
  static extractPlainText(document: Document): string {
    if (!this.isValidDocument(document)) {
      return '';
    }

    const extractFromContent = (content: RichTextNode[]): string => {
      return content
        .map((node) => {
          if (node.nodeType === 'text') {
            return node.value || '';
          }
          if (node.content && Array.isArray(node.content)) {
            return extractFromContent(node.content);
          }
          return '';
        })
        .join('');
    };

    return extractFromContent(document.content as RichTextNode[]);
  }

  /**
   * Cuenta el número de párrafos en el documento
   */
  static countParagraphs(document: Document): number {
    if (!this.isValidDocument(document)) {
      return 0;
    }

    return document.content.filter(node => node.nodeType === 'paragraph').length;
  }

  /**
   * Extrae todas las palabras/frases en negrita del documento
   */
  static extractBoldText(document: Document): string[] {
    if (!this.isValidDocument(document)) {
      return [];
    }

    const boldTexts: string[] = [];

    const findBoldText = (content: RichTextNode[]): void => {
      content.forEach((node) => {
        if (node.nodeType === 'text' && node.marks) {
          const hasBold = node.marks.some((mark) => mark.type === 'bold');
          if (hasBold && node.value) {
            boldTexts.push(node.value);
          }
        }
        if (node.content && Array.isArray(node.content)) {
          findBoldText(node.content);
        }
      });
    };

    findBoldText(document.content as RichTextNode[]);
    return boldTexts;
  }

  /**
   * Crea un documento vacío válido para casos de fallback
   */
  static createEmptyDocument(): Document {
    return {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.PARAGRAPH,
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Contenido no disponible',
              marks: [],
              data: {}
            }
          ]
        }
      ]
    };
  }
}