"use client";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import BurgerIcon from "./BurgerIcon";

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <div className="fixed h-20 w-full top-0 z-40 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="w-5 h-4 black lg:hidden"></div>
          <Link href="/">
            <Logo />
          </Link>

          <ul className="hidden lg:flex gap-6">
            <li>
              <Link href="/">
                <Dropdown />
              </Link>
            </li>
            <li>
              <Link href="/les-aides-financieres">
                <p
                  className={
                    currentRoute === "/les-aides-financieres"
                      ? "underline underline-offset-8 text-[#DF371E] decoration-2"
                      : ""
                  }
                >
                  Les aides financières
                </p>
              </Link>
            </li>
            <li>
              <Link href="/a-propos">
                <p
                  className={
                    currentRoute === "/a-propos"
                      ? "underline underline-offset-8 text-[#DF371E] decoration-2"
                      : ""
                  }
                >
                  Qui sommes nous ?
                </p>
              </Link>
            </li>
            <li></li>
          </ul>
          <div className="hidden lg:flex">
            <Link href="/mon-compte">
              <Button content="Mon compte" />
            </Link>
          </div>
          <BurgerIcon />
        </div>
      </div>
    </div>
  );
}
