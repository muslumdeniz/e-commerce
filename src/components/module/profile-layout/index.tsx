"use client";

import { usePathname } from "next/navigation";
import { ProfileLinks } from "@/constants/links";
import Link from "next/link";
import classNames from "classnames";
import { useAuth } from "@/contexts/auth-provider";

const ProfileLayout = () => {
  const { logout } = useAuth();
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-10 border-r border-r-form-element-border">
      {ProfileLinks.map((linkGroup, index) => (
        <Link
          key={index}
          href={linkGroup.href}
          className={classNames(
            "text-text-secondary font-light",
            pathname === linkGroup.href &&
              "!font-bold !text-primary !border-r-2 border-r-primary"
          )}
        >
          {linkGroup.label}
        </Link>
      ))}
      <span
        onClick={logout}
        className="text-text-secondary font-light cursor-pointer"
      >
        Log Out
      </span>
    </div>
  );
};

export { ProfileLayout };
