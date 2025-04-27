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
import Saved from "./saved";

export const Nav = () => {
  const { session, logout } = useAuth();
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);

  const toggleBasket = () => setIsBasketOpen((prev) => !prev);
  const toggleSaved = () => setIsSavedOpen((prev) => !prev);

  return (
    <nav
      className={classNames(
        "sticky top-0 bg-white/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] z-50",
        isBasketOpen || isSavedOpen
          ? "transition-none"
          : "transition-all duration-300"
      )}
    >
      <div className="container mx-auto relative flex items-center justify-between min-h-20">
        {/* Sol Menü Linkleri */}
        <div className="flex items-center gap-4">
          {Links.map((link, key) => (
            <Link
              key={key}
              href={link.href}
              className={classNames(
                "text-sm font-medium hover:underline transition-all",
                link.isNew && "text-danger-500 italic underline"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Orta Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image
              src="https://www.mavi.com/medias/logoyeni120.svg?context=bWFzdGVyfG1hdmljZG5pbWFnZXN8MTM2NXxpbWFnZS9zdmcreG1sfGFEWXlMMmhrWVM4eE1USXhNakF3TmprME9EZzVOQzlzYjJkdmVXVnVhVEV5TUM1emRtY3wyYTA5OGI4ZDRhZGFiZDhkODQzZDg0ZDUxM2FhYjY4NGUwZDRhZThiZmRhYjZmN2VkYjg4Mzc1NGU0YmViNjUw"
              alt="logo"
              className="w-28 h-11 cursor-pointer"
            />
          </Link>
        </div>

        {/* Sağ Butonlar */}
        <div className="flex items-center gap-2">
          {session.jwt ? (
            <>
              <Button
                variant="outline"
                isIconButton
                prefixIcon="User"
                className="bg-transparent text-primary hover:underline shadow-none px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80"
              />
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
              <Link href="/register" className="text-sm font-bold text-primary">
                Register
              </Link>
            </div>
          )}
          <Button
            prefixIcon="Magnifier"
            variant="outline"
            isIconButton
            className="bg-transparent text-primary hover:underline shadow-none px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80"
          />
          <Button
            label="1"
            prefixIcon="Handcart"
            variant="outline"
            isIconButton
            className="bg-transparent text-primary hover:underline shadow-none px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80"
            onClick={toggleBasket}
          />
          <Button
            label="1"
            prefixIcon="Heart"
            variant="outline"
            isIconButton
            onClick={toggleSaved}
            className="bg-transparent text-primary hover:underline shadow-none px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-80"
          />
        </div>
      </div>

      {/* Sepet ve Favori Overlay */}
      {(isBasketOpen || isSavedOpen) && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => {
            setIsBasketOpen(false);
            setIsSavedOpen(false);
          }}
        />
      )}

      {/* Sepet ve Favori Paneli */}
      <Basket
        isOpen={isBasketOpen}
        setIsOpen={setIsBasketOpen}
        className="fixed inset-0 z-40 bg-white overflow-auto" // Tam ekran
      />
      <Saved
        isOpen={isSavedOpen}
        setIsOpen={setIsSavedOpen}
        className="fixed inset-0 z-40 bg-white overflow-auto" // Tam ekran
      />
    </nav>
  );
};
