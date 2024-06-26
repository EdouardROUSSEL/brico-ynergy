import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navigation from "./_components/Navigation";
import PACbutton from "./_components/PACbutton";
import Footer from "./_components/Footer";

import Image from "next/image";
import Button from "./_components/Navigation/Button";
import Hh from "./_components/Hh";
import Link from "next/link";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "0m.studio for Ynergie",
  description: "Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="./../images/house.webp" as="image" />
      </Head>
      <body className="flex h-screen w-screen justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <p>Site suspendu, vous pouvez me contacter via</p>
          <Link href="mailto:edouard@0m-sudio" className="text-blue-600">
            edouard@0m-sudio
          </Link>
        </div>
        <footer className="absolute bottom-0 z-0 mb-2 text-sm drop-shadow-2xl">
          Developed with ❤️ by{" "}
          <Link href="https://0m.studio/" className="font-bold">
            0m.studio
          </Link>
        </footer>
      </body>
      {/* <body className={roboto.className}>
        <Navigation />
        <PACbutton />
        {children}
        <main className="bg-[#f2f2f2] text-[#453f3c]">
          <section className="flex flex-col space-y-5 p-3 lg:container md:space-y-8 md:py-8 lg:mx-auto lg:px-4">
            <Hh />
            <div className="grid-col-1 grid-row-2 grid w-full auto-rows-min space-y-5 md:space-y-8">
              <div className="flex w-full flex-col space-y-5 md:flex-row md:gap-8 md:space-y-0">
                <div className=" flex h-fit w-full flex-col items-start space-y-4 rounded-2xl bg-white p-8 shadow-lg md:w-1/2 md:rounded-3xl">
                  <div className=" rounded-lg bg-[#F7981C] px-4 py-2 text-sm font-semibold uppercase text-white">
                    Découvrir
                  </div>
                  <div className="flex h-full w-full flex-col space-y-8 ">
                    <p className="text-2xl font-bold md:text-3xl md:font-semibold">
                      La pompe à chaleur par&nbsp;
                      <span className="text-[#E6AF2E]">
                        Brico Dépôt et Ynergie
                      </span>
                    </p>
                    <ul className=" space-y-2 text-base">
                      <li className="flex items-start gap-2 md:gap-4">
                        <Image
                          width="20"
                          height="20"
                          src="/images/verifier.png"
                          alt=""
                          className="w-4  pt-1"
                        />
                        Une PAC air-eau de qualité à prix cassé
                      </li>
                      <li className="flex items-start gap-2 md:gap-4">
                        <Image
                          width="20"
                          height="20"
                          src="/images/verifier.png"
                          alt=""
                          className="w-4 pt-1"
                        />
                        Produit fourni posé par un professionnel RGE
                      </li>
                      <li className="flex items-start gap-2 md:gap-4">
                        <Image
                          width="20"
                          height="20"
                          src="/images/verifier.png"
                          alt=""
                          className="w-4  pt-1"
                        />
                        Un service client Service France Garanti
                      </li>
                    </ul>
                    <Button
                      content="En savoir plus"
                      className="place-self-center"
                    />
                  </div>
                </div>
                <div className="relative hidden h-full w-full overflow-auto rounded-3xl shadow-lg md:block md:h-auto md:w-1/2">
                  <Image
                    src={"/images/hh.webp"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="pompe à chaleur"
                    className="object-cover"
                  />
                </div>
                <Image
                  src={"/images/hh.webp"}
                  width={1000}
                  height={1000}
                  alt="pompe à chaleur"
                  className="h-56 rounded-2xl object-cover shadow-lg md:hidden md:h-auto"
                />
              </div>
              <div className="flex w-full flex-wrap justify-center space-y-5 md:flex-nowrap md:space-x-8 md:space-y-0">
                <div className="flex w-full space-x-5 md:w-1/2 md:space-x-8">
                  <div className="flex aspect-[1/1] flex-1 flex-col items-center justify-center space-y-5 rounded-2xl bg-white p-2 text-center shadow-lg md:rounded-3xl">
                    <Image
                      width="60"
                      height="60"
                      src="../svg/temperature.svg"
                      alt="Réduire icon"
                    />
                    <div className="space-y-1">
                      <p className="text-base font-bold md:text-xl">
                        Pour réduire
                      </p>
                      <p>ma facture d&apos;énergie</p>
                    </div>
                  </div>
                  <div className=" flex aspect-[1/1]  flex-1 flex-col items-center justify-center space-y-5 rounded-2xl bg-white p-2 text-center shadow-lg md:rounded-3xl">
                    <Image
                      width="60"
                      height="60"
                      src="../svg/wallet.svg"
                      alt="Portefeuille icon"
                    />
                    <div className="space-y-1">
                      <p className="text-base font-bold md:text-xl">
                        Pour valoriser
                      </p>
                      <p>mon logement</p>
                    </div>
                  </div>
                </div>

                <div className="flex w-full space-x-5 md:w-1/2 md:space-x-8">
                  <div className="  flex aspect-[1/1]  flex-1 flex-col items-center justify-center space-y-5 rounded-2xl  bg-white p-2 text-center shadow-lg md:rounded-3xl">
                    <Image
                      width="60"
                      height="60"
                      src="../svg/house.svg"
                      alt="House icon"
                    />
                    <div className="space-y-1">
                      <p className="text-base font-bold md:text-xl">
                        Pour améliorer
                      </p>
                      <p>mon confort</p>
                    </div>
                  </div>
                  <div className="  flex aspect-[1/1]  flex-1 flex-col items-center justify-center space-y-5 rounded-2xl bg-white p-2 text-center shadow-lg md:rounded-3xl">
                    <Image
                      width="60"
                      height="60"
                      src="../svg/carbon.svg"
                      alt="Polution icon"
                    />
                    <div className="space-y-1">
                      <p className="text-base font-bold md:text-xl">
                        Pour diminuer
                      </p>
                      <p>mon empreinte carbone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-col-1 grid-row-1 grid w-full ">
              <div className="flex w-full flex-col gap-5 md:flex-row md:gap-8 ">
                <div className="relative hidden h-full w-full overflow-auto rounded-3xl shadow-lg md:block md:h-auto md:w-1/2">
                  <Image
                    src={"/images/search2.webp"}
                    fill
                    alt="pompe à chaleur"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ transform: "scaleX(-1)" }}
                  />
                </div>
                <Image
                  src={"/images/search2.webp"}
                  width={700}
                  height={500}
                  alt="pompe à chaleur"
                  className="block h-56 w-full rounded-3xl object-cover shadow-lg md:hidden md:h-auto"
                  style={{ transform: "scaleX(-1)" }}
                />
                <div className="flex h-fit w-full flex-col items-start space-y-8 overflow-hidden rounded-2xl bg-white p-8 shadow-lg md:w-1/2 md:rounded-3xl">
                  <div className=" rounded-lg bg-[#F7981C] px-4 py-2 text-sm font-semibold uppercase text-white">
                    J&apos;AIME FAIRE, MAIS JE FAIS FAIRE
                  </div>
                  <div className="flex h-full w-full flex-col space-y-6">
                    <p className="text-2xl font-bold md:text-3xl md:font-semibold">
                      A toutes les étapes &nbsp;
                      <span className="text-[#E6AF2E]">Ynergie est là !</span>
                    </p>
                    <div className="space-y-2">
                      <p>
                        Je sollicite des experts qui m&apos;accompagnent sur:
                      </p>
                      <ul className="space-y-2 text-base">
                        <li className="flex items-start gap-2 md:gap-4">
                          <Image
                            width="20"
                            height="20"
                            src="/images/verifier.png"
                            alt=""
                            className="w-4  pt-1"
                          />
                          Les travaux à réaliser,
                        </li>
                        <li className="flex items-start gap-2 md:gap-4">
                          <Image
                            width="20"
                            height="20"
                            src="/images/verifier.png"
                            alt=""
                            className="w-4  pt-1"
                          />
                          Les aides financières,
                        </li>
                        <li className="flex items-start gap-2 md:gap-4">
                          <Image
                            width="20"
                            height="20"
                            src="/images/verifier.png"
                            alt=""
                            className="w-4  pt-1"
                          />
                          La réalisation et le suivi du chantier.
                        </li>
                      </ul>
                    </div>
                    <Button
                      content="En savoir plus"
                      className="place-self-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="grid-col-1 grid-row-2 md:grid-row-1 grid w-full overflow-hidden rounded-lg shadow-2xl md:rounded-3xl"
              style={{
                backgroundImage: "url(./../images/instalation.webp)",
                backgroundPosition: "68% 66%",
              }}
            >
              <div className="h-full w-full  bg-gray-700/20 backdrop-blur-sm">
                <div className="flex h-full w-full flex-col space-y-8 p-8 text-white ">
                  <div className="w-fit rounded-lg bg-[#F7981C] px-4 py-2 text-sm font-semibold uppercase text-white">
                    SIMULATION
                  </div>
                  <div className="flex w-full flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
                    <div className="w-full space-y-4 md:w-1/3">
                      <div className="flex h-full flex-col space-y-8 [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)] ">
                        <p className="text-2xl font-bold md:text-3xl md:font-semibold">
                          Illustration d&apos;installation d&apos;une pompe à
                          chaleur
                        </p>
                        <ul className="space-y-2 text-base font-semibold">
                          <li className="flex items-start gap-2 md:gap-4">
                            <Image
                              width="20"
                              height="20"
                              src="/images/verifier.png"
                              alt=""
                              className="w-4  pt-1"
                            />
                            Pour une maison individuelle de 120m² construite en
                            1979 et classée D
                          </li>
                          <li className="flex items-start gap-2 md:gap-4">
                            <Image
                              width="20"
                              height="20"
                              src="/images/verifier.png"
                              alt=""
                              className="w-4  pt-1"
                            />
                            Un couple au revenus très modestes
                          </li>
                          <li className="flex items-start gap-2 md:gap-4">
                            <Image
                              width="20"
                              height="20"
                              src="/images/verifier.png"
                              alt=""
                              className="w-4  pt-1"
                            />
                            Habitant en Charente Maritimes
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex h-auto w-full flex-wrap justify-center space-x-0 space-y-8 text-[#453f3c] md:w-2/3 md:px-8 xl:space-x-8 xl:space-y-0">
                      <div className="flex h-fit w-full flex-col items-start justify-between space-y-4 rounded-xl bg-white p-8 shadow-lg md:min-w-72 md:max-w-80">
                        <div className="w-full text-center font-semibold uppercase text-gray-700">
                          Montant{" "}
                          <span className="text-[#F7981C]">des travaux :</span>
                        </div>
                        <h6 className="w-full text-center text-4xl font-bold text-gray-600">
                          13 620 €
                        </h6>
                      </div>
                      <div className="flex h-fit w-full flex-col items-start justify-between space-y-4 rounded-xl bg-white p-8 pb-4 shadow-lg md:min-w-72 md:max-w-80 ">
                        <div className="w-full text-center font-semibold uppercase text-gray-700">
                          Montant{" "}
                          <span className="text-[#F7981C]">des aides :</span>
                        </div>
                        <h6 className=" w-full text-center text-4xl font-bold text-gray-600">
                          - 9 000 €
                        </h6>
                        <p className="w-full text-center text-xs text-gray-500">
                          La réglementation liée à la rénovation énergétique et
                          les aides dédiées évoluent régulièrement - données à
                          titre indicatif -
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-col-1 grid-row-1 grid w-full ">
              <div className="flex h-full w-full flex-col-reverse gap-4 md:flex-row  md:gap-8">
                <div className=" flex h-full w-full flex-col items-start  space-y-8 rounded-2xl bg-white p-5 shadow-lg md:w-1/2  md:rounded-3xl md:p-8">
                  <div className=" rounded-lg bg-[#F7981C] px-4 py-2 text-sm font-semibold uppercase text-white">
                    FAQ
                  </div>
                  <div className="flex flex-col justify-center  space-y-4">
                    <h6 className="text-3xl font-bold md:font-semibold">
                      Quelles sont&nbsp;
                      <span className="text-[#E6AF2E]">
                        les aides financières ?
                      </span>
                    </h6>
                    <div className="space-y-2">
                      <p>
                        Difficile de s’y retrouver avec toutes les aides
                        financières qui existent !
                      </p>
                      <p>
                        MaPrimeRenov&apos;, la prime énergie CEE,
                        l&apos;éco-prêt à taux zéro,...
                      </p>
                    </div>
                  </div>
                  <Button
                    content="En savoir plus"
                    className="place-self-center"
                  />
                </div>
                <div className="relative hidden h-full w-full overflow-auto rounded-3xl shadow-lg md:block md:h-auto md:w-1/2">
                  <Image
                    src={"/images/economy.webp"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="pompe à chaleur"
                    className="object-cover "
                  />
                </div>
                <Image
                  src={"/images/economy.webp"}
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="pompe à chaleur"
                  className="block h-56 w-full rounded-xl object-cover md:hidden md:h-auto"
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body> */}
    </html>
  );
}
