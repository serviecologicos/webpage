import { Document } from "@contentful/rich-text-types";

export interface TextBlockProps {
  description: Document;
  className?: string;
  variant?: "default" | "compact" | "expanded";
}

export interface RichTextContent {
  nodeType: string;
  data: Record<string, unknown>;
  content: RichTextNode[];
}

export interface RichTextNode {
  nodeType: string;
  value?: string;
  marks?: Array<{ type: string }>;
  data: Record<string, unknown>;
  content?: RichTextNode[];
}

export type TextBlockVariant = "default" | "compact" | "expanded";