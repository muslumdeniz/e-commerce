import { Brands } from "@/components/module/brands";
import { SavedPage } from "@/pages/saved-page";

export default function Home() {
  const breadcrumb = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Saved",
    },
  ];
  return (
    <>
      <SavedPage title="Saved" breadcrumb={breadcrumb} />
      <Brands />
    </>
  );
}
