export interface IHeroSection {
  exampleProp: string;
}

const HeroSection = () => {
  return (
    <section className="w-full relative sm:flex h-full sm:h-3/4 justify-center items-center">
      <div>
        <h1>Social Media Marketing</h1>
      </div>
    </section>
  );
};

export default HeroSection;
