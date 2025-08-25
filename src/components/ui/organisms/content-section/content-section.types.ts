import { Media } from "@/models/common.types"
import { Document } from "@contentful/rich-text-types";

export type HomeSectionProps = {
    code: string;
    title: string;
    subtitle: string,
    description: {
        json: Document
    }
    sliderCollection: SliderCollection,
    background: Background
}

export type SliderCollection = {
    items: {
        title: string,
        media: Media,
    }[]
}

export type Background = {
    title: string,
    media: Media,
}