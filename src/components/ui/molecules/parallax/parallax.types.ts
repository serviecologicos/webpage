import { Media } from "../navbar/navbar.types";

export type ParallaxProps = {
    code: string;
    imagesCollection: ImagesCollection;
}

export type ImagesCollection = {
    items: ParallaxImage[]
}

export type ParallaxImage = {
    media: Media;
}
