import Icons from "../icons";
import { IconTypes } from "../icons/_model";

type Props = {
  icon: IconTypes;
  title: string;
  description: string;
};

const Service = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center max-w-[328px] w-full mx-4 my-9">
      <Icons name={icon} size={72} className="mb-4 text-primary" />
      <h2 className="font-bold text-text-primary text-2xl mb-5">{title}</h2>
      <p className="font-normal text-center text-text-secondary">
        {description}
      </p>
    </div>
  );
};

export { Service };
