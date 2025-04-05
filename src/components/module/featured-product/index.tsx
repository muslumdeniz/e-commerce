import Icons from "@/components/ui/icons";

type Props = {};

const FeaturedProduct = ({}: Props) => {
  return (
    <section className="container">
      <div className="flex flex-col gap-2.5 items-center mb-20 mt-20">
        <h4 className="font-normal text-text-secondary text-xl gap-2.5">
          Featured Products
        </h4>
        <h2 className="font-bold text-text-primary text-2xl gap-2.5">
          THE BEST SERVICES
        </h2>
        <p className="font-normal text-text-secondary gap-2.5">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-row gap-8 justify-center">
        <div className="flex flex-col items-center max-w-[328px] w-full mx-4 my-9">
          <Icons name="UserSquare" size={72} className="mb-4 text-primary" />
          <h2 className="font-bold text-text-primary text-2xl mb-5">
            Easy Wins
          </h2>
          <p className="font-normal text-center text-text-secondary">
            Get your best looking smile now!
          </p>
        </div>
        <div className="flex flex-col items-center max-w-[328px] w-full mx-4 my-9">
          <Icons name="BookOpen" size={72} className="mb-5 text-primary" />
          <h2 className="font-bold text-text-primary text-2xl mb-5">
            Concrete
          </h2>
          <p className="font-normal text-center text-text-secondary">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div className="flex flex-col items-center max-w-[328px] w-full mx-4 my-9">
          <Icons
            name="ArrowUpRefraction"
            size={72}
            className="mb-5 text-primary"
          />
          <h2 className="font-bold text-text-primary text-2xl mb-5">
            Hack Growth
          </h2>
          <p className="font-normal text-center text-text-secondary">
            Overcame any hurdle or any other problem.
          </p>
        </div>
      </div>
    </section>
  );
};

export { FeaturedProduct };
