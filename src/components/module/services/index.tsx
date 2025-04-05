import { Service } from "@/components/ui/cards/service";

type Props = {};

const Services = ({}: Props) => {
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
      <div className="flex flex-row gap-8 justify-evenly">
        <Service
          icon="UserSquare"
          title="Easy Wins"
          description="Get your best looking smile now!"
        />
        <Service
          icon="BookOpen"
          title="Concrete"
          description="Defalcate is most focused in helping you discover your most beautiful smile"
        />
        <Service
          icon="ArrowUpRefraction"
          title="Hack Growth"
          description="Overcame any hurdle or any other problem."
        />
      </div>
    </section>
  );
};

export { Services };
