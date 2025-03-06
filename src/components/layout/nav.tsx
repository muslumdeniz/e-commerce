import Link from "next/link";
import { Image } from "../ui/image";
import classNames from "classnames";

type Props = {};
export const Nav = ({}: Props) => {
  const links = [
    { href: "#", label: "Home", className: "text-text-secondary" },
    { href: "#", label: "Shop", className: "text-text-secondary" },
    { href: "#", label: "About", className: "text-text-secondary" },
    { href: "#", label: "Blog", className: "text-text-secondary" },
    { href: "#", label: "Contact", className: "text-text-secondary" },
    { href: "#", label: "Pages", className: "text-text-secondary" },
    { href: "#", label: "New Collections 2025!", className: "text-primary" },
  ];
  return (
    <nav className="container">
      <div className="flex items-center justify-between">
        <Image
          src="https://www.mavi.com/medias/logoyeni120.svg?context=bWFzdGVyfG1hdmljZG5pbWFnZXN8MTM2NXxpbWFnZS9zdmcreG1sfGFEWXlMMmhrWVM4eE1USXhNakF3TmprME9EZzVOQzlzYjJkdmVXVnVhVEV5TUM1emRtY3wyYTA5OGI4ZDRhZGFiZDhkODQzZDg0ZDUxM2FhYjY4NGUwZDRhZThiZmRhYjZmN2VkYjg4Mzc1NGU0YmViNjUw"
          alt="logo"
          className="w-20 h-10"
        />
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3.5">
            {links.map((link, key) => (
              <Link
                className={classNames(
                  "text-sm font-bold hover:text-primary transition-colors",
                  link.className
                )}
                key={key}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>Login</div>
        </div>
      </div>
    </nav>
  );
};
