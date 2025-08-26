import { GetStaticProps } from "next";

import MultiLayerParallax from "@/components/ui/molecules/parallax/home-parallax";
import Separate from "@/components/ui/atoms/separate/separate";
import ContentSection from "@/components/ui/organisms/content-section/content-section";

import { NavbarProps } from "@/components/ui/molecules/navbar/navbar.types";
import { ParallaxProps } from "@/components/ui/molecules/parallax/parallax.types";
import { HomeSectionProps } from "@/components/ui/organisms/content-section/content-section.types";
import { HomeSeparateProps } from "@/components/ui/atoms/separate/separate.types";

import { getParallax } from "@/components/ui/molecules/parallax/parallax.service";
import { getNavbar } from "@/components/ui/molecules/navbar/navbar.service";
import { getHomeSection } from "@/components/ui/organisms/content-section/content-section.service";
import { getHomeSeparate } from "@/components/ui/atoms/separate/separate.service";



interface HomePageProps {
  navbarContent: NavbarProps;
  parallaxContent: ParallaxProps;
  sectionContent: HomeSectionProps;
  separateContent: HomeSeparateProps;
}

export default function Home({ parallaxContent, sectionContent, separateContent }: HomePageProps) {
  return (
      <>
        <MultiLayerParallax parallaxContent={parallaxContent} />
        <Separate separateContent={separateContent} />
        <ContentSection sectionContent={sectionContent} />
      </>
    );
}

// export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
//   const navbarContent = await getNavbar('home-header');
//   const parallaxContent = await getParallax('home-parallax');
//   const sectionContent = await getHomeSection('home-section-who-where-are');
//   const separateContent = await getHomeSeparate('home-separate-image');

//   return {
//     props: {
//       navbarContent,
//       parallaxContent,
//       sectionContent,
//       separateContent
//     }
//   };
// };

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  console.log("SPACE:", process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
  console.log("TOKEN:", process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN?.slice(0, 5)); // imprime solo 5 chars para no filtrar todo
  console.log("ENV:", process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT);

  const navbarContent = await getNavbar('home-header');
  console.log("Navbar:", navbarContent);

  const parallaxContent = await getParallax('home-parallax');
  console.log("Parallax:", parallaxContent);

  const sectionContent = await getHomeSection('home-section-who-where-are');
  console.log("Section:", sectionContent);

  const separateContent = await getHomeSeparate('home-separate-image');
  console.log("Separate:", separateContent);

  return {
    props: {
      navbarContent,
      parallaxContent,
      sectionContent,
      separateContent,
    },
  };
};
