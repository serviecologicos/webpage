interface TitleProps {
  mainTitle: string;
  subtitle: string;
}

const Title = ({ mainTitle, subtitle }: TitleProps) => {
  return (
    <h2 className="text-center relative z-10">
      <span className="text-2xl md:text-4xl 3xl:text-6xl font-extrabold tracking-wide text-green-700">
        {mainTitle}
      </span>
      <br />
      <span className="block mt-2 text-3xl md:text-5xl 3xl:text-7xl font-light leading-tight text-gray-300">
        {subtitle}
      </span>
      <div className="mt-3 w-24 h-1 mx-auto bg-green-500 rounded-full"></div>
    </h2>
  );
};

export default Title;
