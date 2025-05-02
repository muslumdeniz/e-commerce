import { IconTypes } from "@/components/ui/icons/_model";
import { label } from "framer-motion/client";

type SocialLinkType = {
  icon: IconTypes;
  href: string;
};

export const Links = [
  { href: "/", label: "Home" },
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/children", label: "Children" },
  { href: "/new-collection", label: "New Collection", isNew: true },
  { href: "/contact", label: "Contact" },
];

export const Socials: SocialLinkType[] = [
  {
    icon: "Facebook",
    href: "#",
  },
  {
    icon: "Instagram",
    href: "#",
  },
  {
    icon: "Twitter",
    href: "#",
  },
  {
    icon: "Youtube",
    href: "#",
  },
];

export const ProfileLinks = [
  {
    href: "/profile",
    label: "My Profile",
  },

  {
    href: "/basket",
    label: "My Basket",
  },
  {
    href: "/saved",
    label: "My Saved",
  },
];

export const FooterLinks = [
  {
    label: "Company Info",
    links: [
      {
        href: "#",
        label: "About Us",
      },
      {
        href: "#",
        label: "Carrier",
      },
      {
        href: "#",
        label: "We are hiring",
      },
      {
        href: "#",
        label: "Blog",
      },
    ],
  },
  {
    label: "Legal",
    links: [
      {
        href: "#",
        label: "About Us",
      },
      {
        href: "#",
        label: "Carrier",
      },
      {
        href: "#",
        label: "We are hiring",
      },
      {
        href: "#",
        label: "Blog",
      },
    ],
  },
  {
    label: "Features",
    links: [
      {
        href: "#",
        label: "Business Marketing",
      },
      {
        href: "#",
        label: "User Analytic",
      },
      {
        href: "#",
        label: "Live Chat",
      },
      {
        href: "#",
        label: "Unlimited Support",
      },
    ],
  },
  {
    label: "Resources",
    links: [
      {
        href: "#",
        label: "IOS & Android",
      },
      {
        href: "#",
        label: "Watch a Demo",
      },
      {
        href: "#",
        label: "Customers",
      },
      {
        href: "#",
        label: "API",
      },
    ],
  },
];
