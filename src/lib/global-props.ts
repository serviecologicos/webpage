import { GetStaticProps } from "next";
import { getNavbar } from "@/components/ui/molecules/navbar/navbar.service";
import { NavbarProps } from "@/components/ui/molecules/navbar/navbar.types";

export interface GlobalProps {
  navbarContent: NavbarProps;
}

export const getGlobalProps: GetStaticProps<GlobalProps> = async () => {
  const navbarContent = await getNavbar('home-header');

  return {
    props: {
      navbarContent,
    },
    revalidate: 3600,
  };
};