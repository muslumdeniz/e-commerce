import { Brands } from "@/components/module/brands";
import { ProfilePage } from "@/pages/profile-page";

export default function Home() {
  const breadcrumb = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Profile",
    },
  ];
  return (
    <>
      <ProfilePage title="Profile" breadcrumb={breadcrumb} />
      <Brands />
    </>
  );
}
