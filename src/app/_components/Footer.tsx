import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white flex flex-col items-center pt-8 p-4  space-y-8 md:text-start text-center z-40 relative">
      <div className="flex justify-around w-full flex-col md:flex-row items-center space-y-8 md:space-y-0 md:items-start">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div className="flex items-center">
            <Image
              src="/images/brico.webp"
              alt="logo-brico"
              width={100}
              height={100}
              className="md:w-20 w-16 p-0.5 bg-white"
            />
            <Image
              src="/images/ynergie-white.webp"
              alt="logo-ynergie"
              width={150}
              height={100}
              className=" w-30 "
            />
          </div>

          <p className="font-bold">Toujours à vos cotés !</p>
        </div>
        <ul className="space-y-1">
          <li className="text-lg font-semibold">Les aides financières</li>
          <li className="text-lg font-semibold">Qui sommes nous ?</li>
        </ul>
        <ul className="space-y-1">
          <li className="pb-2 text-lg font-semibold">Nos solution</li>
          <li className="text-sm font-light">Pompe à chaleur air-eau</li>
          <li className="text-sm font-light">Panneaux photovoltaïques</li>
        </ul>
        <ul className="space-y-1">
          <li className="pb-2 text-lg font-semibold">Tout savoir sur :</li>
          <li className="text-sm font-light">Isolation Thermique</li>
          <li className="text-sm font-light">Extérieure</li>
          <li className="text-sm font-light">Isolation des murs</li>
          <li className="text-sm font-light">Planchers bas</li>
          <li className="text-sm font-light">Combles</li>
          <li className="text-sm font-light">Poêle</li>
        </ul>
        <div className="space-y-4 text-center justify-center flex flex-col items-center">
          <p>Une question sur votre projet ? </p>
          <p>Contactez-nous au</p>
          <a href="tel:0971003131" className="text-2xl font-bold">
            09 71 00 31 31
          </a>

          <Image
            src="/images/certificat.png"
            alt="certificat"
            width={60}
            height={60}
          />
        </div>
      </div>
      <p className="text-center text-sm md:text-base">
        © 2023 – Tous Droits Réservés – Politique de confidentialité – Mentions
        légales – Politique des cookies – CGV – CGU
      </p>
    </footer>
  );
}
