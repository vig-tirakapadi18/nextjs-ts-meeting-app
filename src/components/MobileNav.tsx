"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[16.5rem]">
      <Sheet>
        <SheetTrigger>
          <IoMenu size={36} color="#ffffff" className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src={logo}
              width={32}
              height={32}
              alt="Voom Logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">Voom</p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose key={link.route}>
                      <Link
                        href={link.route}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg justify-start",
                          { "bg-rose-1": isActive }
                        )}
                      >
                        <span>{link.icon(24)}</span>
                        <div className="font-semibold text-lg">
                          {link.label}
                        </div>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
