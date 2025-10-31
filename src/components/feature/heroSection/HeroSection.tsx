export interface IHeroSection {
  exampleProp: string;
}

const HeroSection = () => {
  return (
    <section className="w-full relative grid grid-rows-6">
      <div className="row-span-4 flex justify-center items-center">
        <h1 className="text-7xl p-4">TaniMousStudios</h1>
      </div>
      <div className="w-full row-span-2">
        <div className="flex justify-center p-4 gap-1">
          <input
            type="text"
            name="email"
            id=""
            className="border-2 border-amber-300 w-3/4 rounded-sm text-2xl p-2"
          />
          <button className="border-3 rounded-sm p-2">Click</button>
        </div>
        <h2 className="text-2xl flex justify-center">
          Register your email to book a meeting!
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
