import { PostProduct } from "@/components/ui/cards/post-product";

type Props = {};

const Post = ({}: Props) => {
  return (
    <section className="section-md">
      <div className="container">
        <div className="flex flex-col text-center my-24">
          <h6 className="font-bold text-primary text-sm mb-5">
            Practice Advice
          </h6>
          <h2 className="font-bold text-text-primary text-4xl">
            Featured Posts
          </h2>
        </div>
        <div className="row">
          <div className="col-span-6">
            <PostProduct src="/media/posts/post-1.png" alt="Post 1" />
          </div>
          <div className="col-span-6">
            <PostProduct src="/media/posts/post-2.png" alt="Post 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Post };
