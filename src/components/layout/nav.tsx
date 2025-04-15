"use client";

import { useState } from "react";
import Link from "next/link";
import { Image } from "../ui/image";
import Icons from "../ui/icons";
import { Button } from "../ui/button";
import { Links } from "@/constants/links";
import classNames from "classnames";
import { useAuth } from "@/contexts/auth-provider";
import Basket from "./basket";

export const Nav = () => {
  const { session, logout } = useAuth();
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  return (
    <nav className="container relative z-50">
      <div className="flex items-center gap-18 min-h-19.5">
        <Image
          src="https://www.mavi.com/medias/logoyeni120.svg?context=bWFzdGVyfG1hdmljZG5pbWFnZXN8MTM2NXxpbWFnZS9zdmcreG1sfGFEWXlMMmhrWVM4eE1USXhNakF3TmprME9EZzVOQzlzYjJkdmVXVnVhVEV5TUM1emRtY3wyYTA5OGI4ZDRhZGFiZDhkODQzZDg0ZDUxM2FhYjY4NGUwZDRhZThiZmRhYjZmN2VkYjg4Mzc1NGU0YmViNjUw"
          alt="logo"
          className="w-20 h-10"
        />

        <div className="flex flex-1 justify-between items-center gap-6">
          {/* Menü Linkleri */}
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

          {/* Sağ taraftaki butonlar */}
          <div className="flex items-center gap-2 px-4">
            {session.jwt ? (
              <>
                <Button variant="outline" isIconButton prefixIcon="User" />
                <Button
                  onClick={logout}
                  className="bg-transparent text-warning-500 hover:underline shadow-none px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80"
                  label="logout"
                  isIconButton
                  prefixIcon="ExitRight"
                  variant="outline"
                />
              </>
            ) : (
              <div className="flex items-center gap-1.5">
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 text-sm font-bold text-primary"
                >
                  <Icons name="User" size={16} />
                  Login
                </Link>
                <span className="text-sm font-bold text-primary">/</span>
                <Link
                  href="/register"
                  className="text-sm font-bold text-primary"
                >
                  Register
                </Link>
              </div>
            )}

            <Button prefixIcon="Magnifier" variant="outline" isIconButton />

            {/* Sepet Butonu */}
            <Button
              label="1"
              prefixIcon="Handcart"
              variant="outline"
              isIconButton
              onClick={() => setIsBasketOpen(true)}
            />

            {/* Favoriler */}
            <Button
              label="1"
              prefixIcon="Heart"
              variant="outline"
              isIconButton
            />
          </div>
        </div>
      </div>

      {/* Sepet arka planı blur ve siyah overlay */}
      {isBasketOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsBasketOpen(false)}
        />
      )}

      {/* Sepet Paneli */}
      <Basket isOpen={isBasketOpen} setIsOpen={setIsBasketOpen} />
    </nav>
  );
};
