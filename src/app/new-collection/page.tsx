import { FeedBackSection } from "@/components/module/feedbacksection/inex";
import { InnerCard } from "@/components/module/inner-cards";
import { InnerHero } from "@/components/module/inner-hero";
import { Post } from "@/components/module/posts";
import { ProductDescription } from "@/components/module/product-description";

export default function Home() {
  const breadcrumb = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "New Collection",
    },
  ];

  return (
    <>
      <InnerHero breadcrumb={breadcrumb} />
      <InnerCard />
      <Post />
      <ProductDescription />
      <FeedBackSection />
    </>
  );
}
