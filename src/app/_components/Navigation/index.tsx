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
    <div className="sticky top-0 z-40 h-20 w-full bg-white shadow-sm">
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full items-center justify-between">
          <div className="black h-4 w-5 lg:hidden"></div>
          <Link href="/">
            <Logo />
          </Link>

          <ul className="hidden gap-6 lg:flex">
            <li>
              <Link href="/">
                <Dropdown />
              </Link>
            </li>
            <li>
              <Link href="/#">
                <p
                  className={
                    currentRoute === "/les-aides-financieres"
                      ? "text-[#DF371E] underline decoration-2 underline-offset-8"
                      : ""
                  }
                >
                  Les aides financières
                </p>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <p
                  className={
                    currentRoute === "/a-propos"
                      ? "text-[#DF371E] underline decoration-2 underline-offset-8"
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
            <Link href="/#">
              <Button content="Mon compte" />
            </Link>
          </div>
          <BurgerIcon />
        </div>
      </div>
    </div>
  );
}
