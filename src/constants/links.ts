import { IconTypes } from "@/components/ui/icons/_model";

type SocialLinkType = {
  icon: IconTypes;
  href: string;
};

export const Links = [
  { href: "/", label: "Home" },
  { href: "#", label: "Shop" },
  { href: "#", label: "About" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Pages" },
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
