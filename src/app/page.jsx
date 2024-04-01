import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image Container */}
      <div className="h-1/2 lg:w-1/2 lg:h-full relative">
        <Image src={"/HayBK.png"} fill alt="hero" className="object-contain" />
      </div>
      {/* Text Container */}
      <div className=" h-1/2 lg:w-1/2 lg:h-full flex flex-col gap-8 justify-center item-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Degital Experiences, Gesigning Tomorrow
        </h1>
        {/* Description */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        {/* Buttons */}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
