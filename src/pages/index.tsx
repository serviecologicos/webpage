import { getNavbar } from "@/components/ui/molecules/navbar/navbar.service";
import { NavbarProps } from "@/components/ui/molecules/navbar/navbar.types";
import Navbar  from "@/components/ui/molecules/navbar/navbar";
import { GetStaticProps } from "next";
import MultiLayerParallax from "@/components/ui/molecules/parallax/multi-layer-parallax";
import { ParallaxProps } from "@/components/ui/molecules/parallax/parallax.types";
import { getParallax } from "@/components/ui/molecules/parallax/parallax.service";

interface HomePageProps {
  navbarContent: NavbarProps;
  parallaxContent: ParallaxProps;
}

export default function Home({ navbarContent, parallaxContent }: HomePageProps) {
  return (
      <>
        <Navbar navbarContent={navbarContent} />
        <MultiLayerParallax parallaxContent={parallaxContent} />
      </>
    );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const navbarContent = await getNavbar('home-header');
    const parallaxContent = await getParallax('home-parallax');
    
    return {
      props: {
        navbarContent,
        parallaxContent
      }
    };
  } catch (error) {
    console.error('Error fetching navbar content:', error);
    
    // Retornar props vacías en caso de error
    return {
      props: {
        navbarContent: {
          code: '',
          logo: {
            title: '',
            media: {
              height: 0,
              width: 0,
              url: ''
            }
          },
          linksCollection: { items: [] }
        },
        parallaxContent: {
          code: '',
          imagesCollection: {
            items: []
          }
        }
      }
    };
  }
};
