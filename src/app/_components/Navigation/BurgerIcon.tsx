import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

export default function BurgerIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSolution, setIsOpenSolution] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const solutionDropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdownSolution = () => {
    setIsOpenSolution(!isOpenSolution);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      solutionDropdownRef.current &&
      !solutionDropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setIsOpenSolution(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex lg:hidden  ">
      <button
        type="button"
        className="inline-flex w-full justify-center gap-2 "
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          width="20"
          height="20"
          src="https://img.icons8.com/ios-filled/50/menu--v6.png"
          alt="menu-burger"
        />
      </button>
      {isOpen && (
        <div
          className="absolute right-4 top-[85px] z-10 w-11/12 origin-top-right divide-y rounded-md bg-white text-lg font-semibold shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
          ref={dropdownRef}
        >
          <div className="">
            <details
              className="block px-4 py-2 text-gray-700 "
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              <summary
                className="flex items-center justify-between text-gray-700"
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
              <div className=" pt-2 text-base" ref={solutionDropdownRef}>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/chauffage.gif"
                    alt="logo-brico"
                    width={20}
                    height={20}
                  />
                  <p className="pt-1">Chauffage</p>
                </div>

                <div className="flex items-center py-2 pl-7">
                  <Image
                    width="8"
                    height="8"
                    src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
                    alt="expand-arrow--v2"
                    style={{ transform: "rotate(270deg)" }}
                  />
                  <p className="pl-3 text-sm  ">Pompe à chaleur</p>
                </div>

                <div className="flex items-center gap-2 ">
                  <Image
                    src="/images/solaire.gif"
                    alt="logo-brico"
                    width={20}
                    height={20}
                  />
                  <p>Solaire</p>
                </div>

                <div className="flex items-center py-2 pl-7">
                  <Image
                    width="8"
                    height="8"
                    src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png"
                    alt="expand-arrow--v3"
                    style={{ transform: "rotate(270deg)" }}
                  />
                  <p className="pl-3 text-sm ">Photovoltaique</p>
                </div>
              </div>
            </details>

            <p
              className="text-md block px-4 py-2 text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Les aides financières
            </p>

            <p
              className="text-md block px-4 py-2 text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Qui sommes nous ?
            </p>

            <div className="flex items-center justify-center px-4 py-2">
              <p
                className="text-md block text-gray-700  "
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
              >
                Mon compte
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
