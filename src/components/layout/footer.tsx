import Link from "next/link";
import { Image } from "../ui/image";
import Icons from "../ui/icons";
import { FooterLinks, Socials } from "@/constants/links";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {};
export const Footer = ({}: Props) => {
  return (
    <footer>
      <div className="flex bg-light-gray min-h-36">
        <div className="container flex items-center justify-between">
          <Image
            src="https://www.mavi.com/medias/logoyeni120.svg?context=bWFzdGVyfG1hdmljZG5pbWFnZXN8MTM2NXxpbWFnZS9zdmcreG1sfGFEWXlMMmhrWVM4eE1USXhNakF3TmprME9EZzVOQzlzYjJkdmVXVnVhVEV5TUM1emRtY3wyYTA5OGI4ZDRhZGFiZDhkODQzZDg0ZDUxM2FhYjY4NGUwZDRhZThiZmRhYjZmN2VkYjg4Mzc1NGU0YmViNjUw"
            alt="logo"
            className="w-20 h-10"
          />

          <div className="flex gap-5">
            {Socials.map((i, key) => (
              <Link key={key} className="text-primary" href={i.href}>
                <Icons name={i.icon} size={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-13 ">
        <div className="row ">
          {FooterLinks.map((linkGroup, index) => (
            <div key={index} className="col-span-2">
              <h4 className="font-bold text-base text-text-primary mb-5 ">
                {linkGroup.label}
              </h4>
              <div className="flex flex-col gap-2.5">
                {linkGroup.links.map((link, linkIndex) => (
                  <Link className="link" key={linkIndex} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="col-span-4">
            <h4 className="font-bold text-base text-text-primary mb-5 ">
              Get In Touch
            </h4>
            <div className="flex">
              <Input
                placeholder="Your Email"
                info="Lore imp sum dolor Amit"
                className="rounded-e-none"
              />
              <Button label="Subscribe" className="py-3.5! rounded-s-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-light-gray min-h-18">
        <div className="container flex items-center">
          <p className="link">Made With Love By Finland All Right Reserved </p>
        </div>
      </div>
    </footer>
  );
};
