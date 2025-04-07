import { Featured } from "@/components/module/featured";
import { InnerCard } from "@/components/module/inner-cards";
import { InnerHero } from "@/components/module/inner-hero";
import { SubPageHero } from "@/components/module/sub-page-hero";

export default function Home() {
  const breadcrumb = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "new",
    },
  ];

  return (
    <>
      <SubPageHero title="new" breadcrumb={breadcrumb} />
      <InnerHero />
      <InnerCard />
      <Featured />
    </>
  );
}
