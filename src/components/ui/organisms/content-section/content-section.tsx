import Title from "../../atoms/title/title";
import Slider from "../../molecules/slider/slider";
import TextBlock from "../../molecules/text-block/text-block";
import { HomeSectionProps } from "./content-section.types";

interface SectionComponentProps {
  sectionContent: HomeSectionProps
}

export default function ContentSection({ sectionContent }: SectionComponentProps) {
  const { title, subtitle, sliderCollection, background } = sectionContent;
  const backgroundImage = background.media.url;
  const sliderImages = sliderCollection.items.map(item => item.media.url);
  return (
    <div
      className="w-full text-white py-16 md:py-24 relative overflow-hidden min-h-screen flex flex-col"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay difuminado */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)",
          background: "rgba(0,0,0,0.3)",
        }}
      />
      
      {/* Title */}
      <div className="relative z-10 2xl:mt-30 3xl:mt-70 mb-12 md:mb-20">
        <Title mainTitle={title} subtitle={subtitle} />
      </div>
      
      {/* Content Container */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="2xl:max-w-7xl 3xl:max-w-[100rem] w-full mx-auto px-6">
          <div className="flex  flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Imagenes */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <Slider images={sliderImages} />
            </div>
            {/* Texto */}
            <div className="w-full lg:w-1/2 flex items-center">
              <TextBlock/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
