import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function BurgerIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSolution, setIsOpenSolution] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownSolution = () => {
    setIsOpenSolution(!isOpenSolution);
  };

  return (
    <div className="flex lg:hidden  ">
      <button
        type="button"
        className="inline-flex w-full justify-center gap-2 "
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        <Image
          width="20"
          height="20"
          src="https://img.icons8.com/ios-filled/50/menu--v6.png"
          alt="menu"
        />
      </button>
      {isOpen && (
        <div
          className="divide-y absolute w-11/12 z-10 top-16 right-4 origin-top-right rounded-md text-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-semibold"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="">
            <details
              className="text-gray-700 block px-4 py-2 "
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              <summary
                className="text-gray-700 flex items-center justify-between"
                onClick={toggleDropdownSolution}
              >
                Nos solutions
                <Image
                  width="12"
                  height="12"
                  src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
                  alt="expand-arrow--v1"
                  style={{
                    transform: isOpenSolution
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </summary>
              <div className=" pt-2 text-base">
                <Link href="/chauffage">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/chauffage.gif"
                      alt="logo-brico"
                      width={20}
                      height={20}
                    />
                    <p className="pt-1">Chauffage</p>
                  </div>
                </Link>
                <Link href="/chauffage/pompe-a-chaleur">
                  <div className="flex items-center pl-7 py-2">
                    <Image
                      width="8"
                      height="8"
                      src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
                      alt="expand-arrow--v1"
                      style={{ transform: "rotate(270deg)" }}
                    />
                    <p className="text-sm pl-3  ">Pompe à chaleur</p>
                  </div>
                </Link>
                <Link href="/solaire">
                  <div className="flex items-center gap-2 ">
                    <Image
                      src="/images/solaire.gif"
                      alt="logo-brico"
                      width={20}
                      height={20}
                    />
                    <p>Solaire</p>
                  </div>
                </Link>
                <Link href="/solaire/photovoltaique">
                  <div className="flex items-center pl-7 py-2">
                    <Image
                      width="8"
                      height="8"
                      src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
                      alt="expand-arrow--v1"
                      style={{ transform: "rotate(270deg)" }}
                    />
                    <p className="text-sm pl-3 ">Photovoltaique</p>
                  </div>
                </Link>
              </div>
            </details>

            <Link href="/les-aides-financieres">
              <p
                className="text-gray-700 block px-4 py-2 text-md"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
              >
                Les aides financières
              </p>
            </Link>
            <Link href="/a-propos">
              <p
                className="text-gray-700 block px-4 py-2 text-md"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
              >
                Qui sommes nous ?
              </p>
            </Link>
            <Link href="/mon-compte">
              <div className="flex items-center justify-center px-4 py-2">
                <p
                  className="text-gray-700 block text-md  "
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  Mon compte
                </p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
