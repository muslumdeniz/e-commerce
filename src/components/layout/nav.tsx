import Link from "next/link";
import { Image } from "../ui/image";
import Icons from "../ui/icons";
import { Button } from "../ui/button";
import { Links } from "@/constants/links";
import classNames from "classnames";

type Props = {};

export const Nav = ({}: Props) => {
  return (
    <nav className="container">
      <div className="flex items-center gap-18 min-h-19.5">
        <Image
          src="https://www.mavi.com/medias/logoyeni120.svg?context=bWFzdGVyfG1hdmljZG5pbWFnZXN8MTM2NXxpbWFnZS9zdmcreG1sfGFEWXlMMmhrWVM4eE1USXhNakF3TmprME9EZzVOQzlzYjJkdmVXVnVhVEV5TUM1emRtY3wyYTA5OGI4ZDRhZGFiZDhkODQzZDg0ZDUxM2FhYjY4NGUwZDRhZThiZmRhYjZmN2VkYjg4Mzc1NGU0YmViNjUw"
          alt="logo"
          className="w-20 h-10"
        />
        <div className="flex flex-1 justify-between items-center gap-6">
          <div className="flex items-center gap-3.5">
            {Links.map((link, key) => (
              <Link
                className={classNames(
                  "link",
                  link.isNew && "text-danger-500 font-medium italic underline"
                )}
                key={key}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-1.5 px-4">
              <Link
                href="/login"
                className="flex items-center gap-1.5 text-sm font-bold text-primary"
              >
                <Icons name="User" size={16} />
                Login
              </Link>
              <span className="text-sm font-bold text-primary">/</span>
              <Link href="/register" className="text-sm font-bold text-primary">
                Register
              </Link>
            </div>
            <Button prefixIcon="Magnifier" variant="outline" isIconButton />
            <Button
              label="1"
              prefixIcon="Handcart"
              variant="outline"
              isIconButton
            />
            <Button
              label="1"
              prefixIcon="Heart"
              variant="outline"
              isIconButton
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
