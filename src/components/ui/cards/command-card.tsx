import { Range } from "../range";
import { Image } from "../image";
type Props = {};

const CommandCard = ({}: Props) => {
  return (
    <div className="grid grid-cols-[52px_1fr] gap-6">
      <Image
        src="/media/feedback/feedback-1.jpg"
        alt="Feedback 1"
        className="h-13 w-13 rounded-full border overflow-hidden"
      />
      <div className="flex flex-col gap-5">
        <Range />
        <p className="font-bold text-sm text-light-bg">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
      </div>
    </div>
  );
};

export { CommandCard };
