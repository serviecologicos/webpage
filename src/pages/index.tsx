import { getNavbar } from "@/components/ui/molecules/navbar/navbar.service";
import { NavbarProps } from "@/components/ui/molecules/navbar/navbar.types";
import Navbar  from "@/components/ui/molecules/navbar/navbar";
import { GetStaticProps } from "next";

interface HomePageProps {
  navbarContent: NavbarProps;
}

export default function Home({ navbarContent }: HomePageProps) {
  console.log('Navbar content received in component:', navbarContent);
  
  return (
      <Navbar navbarContent={navbarContent} />
    );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    console.log('Running getStaticProps...');
    
    const navbarContent = await getNavbar('home-header');
    
    console.log('Navbar content fetched:', navbarContent);
    
    return {
      props: {
        navbarContent,
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
      }
    };
  }
};
