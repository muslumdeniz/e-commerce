import { Button } from "@/components/ui/button";
import Icons from "@/components/ui/icons";
import { Image } from "@/components/ui/image";

type Props = {};

const Post = ({}: Props) => {
  return (
    <section className="container">
      <div className="flex flex-col text-center my-24">
        <h6 className="font-bold text-primary text-sm mb-5">Practice Advice</h6>
        <h2 className="font-bold text-text-primary text-4xl">Featured Posts</h2>
      </div>
      <div className="row">
        <div className="col-span-3 mb-20">
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/media/posts/post-1.png"
              alt="Post 1"
              className="w-full max-w-[100%] h-[428px]"
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
        </div>
        <div className="col-span-3">
          <div className="mt-5">
            <div className="flex items-center gap-14">
              <h6 className="font-bold text-primary text-sm">
                English Department
              </h6>
              <div className="bg-text-primary p-1 flex items-center gap-2.5 rounded-full">
                <Image
                  src="/media/posts/star.png"
                  alt="Star"
                  className="w-3.5 h-3.5"
                />
                <span className="font-normal text-light-bg text-xs">4.9</span>
              </div>
            </div>
            <h6 className="font-bold text-base text-text-primary mt-2.5">
              Graphic Design
            </h6>
            <p className="font-normal text-sm text-text-secondary mt-2.5 mb-2.5">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <span className="flex items-center gap-2.5 font-bold text-text-secondary text-sm">
              <Icons
                name="ExitDown"
                size={16}
                className="text-text-secondary"
              />
              15 Sales
            </span>
            <div className="flex gap-2.5 mt-2.5">
              <p className="font-bold text-base text-text-muted ">$16.48</p>
              <p className="font-bold text-base text-secondary">$6.44</p>
            </div>
            <div className="flex gap-2.5 mt-4">
              <div className="bg-primary w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-secondary w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-warning w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-text-primary w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
            </div>
            <div className="flex gap-3 mt-4">
              <Icons name="Time" className="text-primary" size={16} />
              <p className="font-normal text-xs text-text-secondary">22h...</p>
              <Icons name="Graph" className="text-warning" size={16} />
              <p className="font-normal text-xs text-text-secondary">
                64 Lessons
              </p>
              <Icons name="ChartLine" className="text-secondary" size={16} />
              <p className="font-normal text-xs text-text-secondary">
                Progress
              </p>
            </div>
            <div className="mt-10">
              <Button
                label="Learn More"
                variant="outline"
                suffixIcon="Right"
                size="lg"
                isRounded
                iconSize={30}
              />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/media/posts/post-2.png"
              alt="Post 2"
              className="w-full max-w-[100%] h-[428px]"
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
        </div>
        <div className="col-span-3">
          <div className="mt-5">
            <div className="flex items-center gap-14">
              <h6 className="font-bold text-primary text-sm">
                English Department
              </h6>
              <div className="bg-text-primary p-1 flex items-center gap-2.5 rounded-full">
                <Image
                  src="/media/posts/star.png"
                  alt="Star"
                  className="w-3.5 h-3.5"
                />
                <span className="font-normal text-light-bg text-xs">4.9</span>
              </div>
            </div>
            <h6 className="font-bold text-base text-text-primary mt-2.5">
              Graphic Design
            </h6>
            <p className="font-normal text-sm text-text-secondary mt-2.5 mb-2.5">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <span className="flex items-center gap-2.5 font-bold text-text-secondary text-sm">
              <Icons
                name="ExitDown"
                size={16}
                className="text-text-secondary"
              />
              15 Sales
            </span>
            <div className="flex gap-2.5 mt-2.5">
              <p className="font-bold text-base text-text-muted ">$16.48</p>
              <p className="font-bold text-base text-secondary">$6.44</p>
            </div>
            <div className="flex gap-2.5 mt-4">
              <div className="bg-primary w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-secondary w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-warning w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-text-primary w-4 h-4 flex items-center cursor-pointer rounded-full"></div>
            </div>
            <div className="flex gap-3 mt-4">
              <Icons name="Time" className="text-primary" size={16} />
              <p className="font-normal text-xs text-text-secondary">22h...</p>
              <Icons name="Graph" className="text-warning" size={16} />
              <p className="font-normal text-xs text-text-secondary">
                64 Lessons
              </p>
              <Icons name="ChartLine" className="text-secondary" size={16} />
              <p className="font-normal text-xs text-text-secondary">
                Progress
              </p>
            </div>
            <div className="mt-10">
              <Button
                label="Learn More"
                variant="outline"
                suffixIcon="Right"
                size="lg"
                isRounded
                iconSize={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Post };
