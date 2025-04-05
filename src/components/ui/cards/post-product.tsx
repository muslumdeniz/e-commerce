import { Button } from "../button";
import Icons from "../icons";
import { Image } from "../image";

type Props = {
  src: string;
  alt: string;
};

const PostProduct = ({ src, alt }: Props) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2 relative h-full">
        <Image
          src={src}
          alt={alt}
          objectFit="cover"
          className="h-full w-full !aspect-[3/5]"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2.5 z-10">
          <Button
            className="!rounded-full !p-3 transition-transform transform hover:scale-110 hover:opacity-80"
            prefixIcon="Heart"
            color="light"
            size="sm"
            iconSize={16}
            isIconButton
          />
          <Button
            className="!rounded-full !p-3 transition-transform transform hover:scale-110 hover:opacity-80"
            prefixIcon="Handcart"
            color="light"
            iconSize={16}
            size="sm"
            isIconButton
          />
          <Button
            className="!rounded-full !p-3 transition-transform transform hover:scale-110 hover:opacity-80"
            prefixIcon="Eye"
            color="light"
            size="sm"
            iconSize={16}
            isIconButton
          />
        </div>
      </div>

      <div className="col-span-3">
        <div className="flex flex-col gap-2.5 p-6 h-full">
          <div className="flex items-center justify-between gap-2 ">
            <h6 className="font-bold text-primary text-sm">
              English Department
            </h6>
            <div className="bg-text-primary p-1 pl-1.5 pr-2 flex items-center gap-2.5 rounded-full">
              <Image
                src="/media/posts/star.png"
                alt="Star"
                className="w-3.5 h-3.5"
              />
              <span className="font-normal text-light-bg text-xs">4.9</span>
            </div>
          </div>
          <h6 className="font-bold text-base text-text-primary">
            Graphic Design
          </h6>
          <p className="font-normal text-sm text-text-secondary">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <span className="flex items-center gap-2.5 font-bold text-text-secondary text-sm">
            <Icons name="ExitDown" size={16} className="text-text-secondary" />
            15 Sales
          </span>
          <div className="flex items-baseline gap-1.5 py-1.5">
            <p className="font-bold text-base text-secondary">$6.44</p>
            <p className="text-xs text-text-muted line-through">$16.48</p>
          </div>
          <div className="flex gap-2.5">
            <div className="bg-primary w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
            <div className="bg-secondary w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
            <div className="bg-warning w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
            <div className="bg-text-primary w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
          </div>
          <div className="flex gap-3">
            <Icons name="Time" className="text-primary" size={16} />
            <p className="font-normal text-xs text-text-secondary">22 hour</p>
            <Icons name="Graph" className="text-warning" size={16} />
            <p className="font-normal text-xs text-text-secondary">
              64 Lessons
            </p>
            <Icons name="ChartLine" className="text-secondary" size={16} />
            <p className="font-normal text-xs text-text-secondary">Progress</p>
          </div>
          <Button
            label="Learn More"
            variant="outline"
            suffixIcon="Right"
            size="lg"
            isRounded
            className="w-fit mt-auto"
          />
        </div>
      </div>
    </div>
  );
};

export { PostProduct };
