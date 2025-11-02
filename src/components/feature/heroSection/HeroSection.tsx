import Image from "next/image";

export interface IHeroSection {
  exampleProp: string;
}

const HeroSection = () => {
  return (
    <section className="relative w-full flex mx-auto">
      <div className="pt-6 max-w-3/4">
        <h1 className="h-1/3 text-5xl font-extrabold mb-4">
          Social Media Marketing
        </h1>
        <p className="max-w-4/5 h-1/3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, iusto
          tenetur unde maxime fuga optio voluptatem nam nostrum eveniet atque?
        </p>
        <div className="flex my-4 items-center ">
          <div className="flex gap-2 border p-2 rounded-sm cursor-pointer">
            <div className="">Book Your Meeting</div>
            <Image
              src={"arrow_outward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"}
              height={20}
              width={20}
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image src={"/hero_image.jpg"} height={300} width={400} alt="arrow" />
      </div>
    </section>
  );
};

export default HeroSection;
