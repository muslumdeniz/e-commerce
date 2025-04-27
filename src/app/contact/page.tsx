import { Brands } from "@/components/module/brands";
import { ContactCard } from "@/components/module/contact-card";

export default function Home() {
  const breadcrumb = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
    },
  ];
  return (
    <>
      <ContactCard title="Contact" breadcrumb={breadcrumb} />
      <Brands />
    </>
  );
}
