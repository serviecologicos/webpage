export type NavbarProps = {
    code: string;
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

export type Media = {
    height: number;
    width: number;
    url: string;
}