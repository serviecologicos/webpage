import { Media } from "@/models/common.types";


export type ParallaxProps = {
    code: string;
    imagesCollection: ImagesCollection;
    buttonsCollection: buttonsCollection;
    title: string;
    slogan: string;
}

export type ImagesCollection = {
    items: ParallaxImage[]
}

export type buttonsCollection = {
    items: ParallaxButton[]
}

export type ParallaxImage = {
    media: Media;
}

export type ParallaxButton = {
    name: string;
    code: string;
    text: string;
    link: string;
    isExternalLink: boolean;
}
