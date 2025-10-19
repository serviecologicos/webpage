import { Media } from "@/models/common.types";

export type NavbarProps = {
    code: string;
    title: string;
    logo: Logo;
    linksCollection: LinksCollection;
}

export type LinksCollection = {
    items: {
        text: string;
        link: string;
        isExternalLink?: boolean;
    }[];
}

export type Logo = {
    title: string;
    media: Media;
}

