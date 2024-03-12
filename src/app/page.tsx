import Image from "next/image";
import Button from "./_components/Navigation/Button";
export default function Home() {
  return (
    <main className="bg-[#f2f2f2] text-[#453f3c]">
      <section className="flex flex-col space-y-5 p-3 lg:container md:space-y-8 md:py-8 lg:mx-auto lg:px-4">
        <div
          className="rounded-2xl bg-[length:250%] md:rounded-3xl md:bg-[length:120%] lg:bg-[length:120%] xl:bg-[length:100%]"
          style={{
            backgroundImage: "url(./../images/house.webp)",
            backgroundPosition: "68% 66%",
          }}
        >
          <div className="flex flex-col rounded-2xl bg-gray-700/20  p-5 py-8 shadow-xl [text-shadow:_0_1px_0_rgb(0_0_0_/_15%)] md:rounded-3xl md:px-12  md:py-12 ">
            <div className="w-5/6 space-y-8 md:w-8/12">
              <h6 className="w-full text-3xl font-bold leading-8 text-white md:text-5xl">
                Pour réduire ma consommation d&apos;énergie, pas besoin de
                diviser ma maison !
              </h6>

              <ul className="space-y-2 text-base font-bold text-white md:py-8 md:text-xl">
                <li className="flex items-start gap-2 md:gap-4">
                  <Image
                    width="20"
                    height="20"
                    src="/images/verifier.png"
                    alt=""
                    className="w-4 pt-1 md:w-6"
                  />
                  Prix cassé
                </li>
                <li className="flex items-start gap-2 md:gap-4">
                  <Image
                    width="20"
                    height="20"
                    src="/images/verifier.png"
                    alt=""
                    className="w-4 pt-1 md:w-6"
                  />
                  Pompe à chaleur air/eau à partir de 1490€*
                </li>
                <li className="flex items-start gap-2 md:gap-4">
                  <Image
                    width="20"
                    height="20"
                    src="/images/verifier.png"
                    alt=""
                    className="w-4 pt-1 md:w-6"
                  />
                  Fournie posée par un professionnel RGE
                </li>
              </ul>
              <Button content="Je veux être appelé !" />
            </div>
          </div>
        </div>
        <div className="grid-col-1 grid-row-2 grid w-full auto-rows-min space-y-5 md:space-y-8">
          <div className="flex w-full flex-col space-y-5 md:flex-row md:gap-8 md:space-y-0">
            <div className=" flex h-fit w-full flex-col items-start space-y-4 rounded-2xl bg-white p-8 shadow-lg md:rounded-3xl">
              <div className=" rounded-lg bg-[#F7981C] px-4 py-2 text-sm font-semibold uppercase text-white">
                Découvrir
              </div>
              <div className="flex h-full w-full flex-col space-y-8 ">
                <p className="text-2xl font-bold md:text-3xl md:font-semibold">
                  La pompe à chaleur par&nbsp;
                  <span className="text-[#E6AF2E]">Brico dépôt et Ynergie</span>
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
            <div className="relative hidden h-full w-full overflow-auto rounded-3xl shadow-lg md:block md:h-auto">
              <Image
                src={"/images/hh.webp"}
                fill
                alt="pompe à chaleur"
                className="object-cover"
              />
            </div>
            <Image
              src={"/images/hh.webp"}
              width={1000}
              height={1000}
              alt="pompe à chaleur"
              className="rounded-2xl object-cover shadow-lg md:hidden "
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
                  <p className="text-base font-bold md:text-xl">Pour réduire</p>
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
                  alt="Maison icon"
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
            <div className="relative hidden h-full w-full overflow-auto rounded-3xl shadow-lg md:block md:h-auto">
              <Image
                src={"/images/ynergieetmoi.webp"}
                fill
                alt="pompe à chaleur"
                className="object-cover"
              />
            </div>
            <Image
              src={"/images/ynergieetmoi.webp"}
              width={700}
              height={500}
              alt="pompe à chaleur"
              className="block  w-full rounded-3xl object-cover shadow-lg md:hidden"
            />
            <div className="flex h-fit w-full flex-col items-start space-y-8 overflow-hidden rounded-2xl bg-white p-8 shadow-lg md:rounded-3xl">
              <div className=" rounded-lg bg-[#F7981C] px-4 py-2 text-sm font-semibold uppercase text-white">
                J&apos;AIME FAIRE, MAIS JE FAIS FAIRE
              </div>
              <div className="flex h-full w-full flex-col space-y-6">
                <p className="text-2xl font-bold md:text-3xl md:font-semibold">
                  A toutes les étapes &nbsp;
                  <span className="text-[#E6AF2E]">Ynergie est là !</span>
                </p>
                <div className="space-y-2">
                  <p>Je sollicite des experts qui m&apos;accompagnent sur:</p>
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
                          width={65}
                          height={65}
                          src={"/svg/superficie.svg"}
                          alt="superficie"
                          className="w-6"
                        />
                        Pour une maison individuelle de 120m² construite en 1979
                        et classée D
                      </li>
                      <li className="flex items-start gap-2 md:gap-4">
                        <Image
                          width={65}
                          height={65}
                          src={"/svg/house-people.svg"}
                          alt="couple"
                          className="w-6"
                        />
                        Un couple au revenus très modestes
                      </li>
                      <li className="flex items-start gap-2 md:gap-4">
                        <Image
                          width={65}
                          height={65}
                          src={"/svg/localisation.svg"}
                          alt="localisation"
                          className="w-6"
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
                      La réglementation liée à la rénovation énergétique et les
                      aides dédiées évoluent régulièrement - données à titre
                      indicatif -
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-col-1 grid-row-1 grid w-full ">
          <div className="flex h-full w-full flex-col-reverse gap-4 md:flex-row  md:gap-8">
            <div className=" flex h-full w-full flex-col  items-start space-y-8 rounded-2xl bg-white p-5 shadow-lg  md:rounded-3xl md:p-8">
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
                    Difficile de s’y retrouver avec toutes les aides financières
                    qui existent !
                  </p>
                  <p>
                    MaPrimeRenov&apos;, la prime énergie CEE, l&apos;éco-prêt à
                    taux zéro,...
                  </p>
                </div>
              </div>
              <Button content="En savoir plus" className="place-self-center" />
            </div>
            <div className="relative hidden h-full w-full overflow-auto rounded-3xl shadow-lg md:block md:h-auto">
              <Image
                src={"/images/economy.webp"}
                fill
                alt="pompe à chaleur"
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
