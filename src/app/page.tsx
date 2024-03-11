import Image from "next/image";
import Button from "./_components/Navigation/Button";

export default function Home() {
  return (
    <main className="bg-[#f2f2f2] text-[#453f3c]">
      <section className="flex flex-col space-y-4 p-3 lg:container md:space-y-8 md:py-8 lg:mx-auto lg:px-4">
        <div
          className="rounded-3xl bg-[length:250%] md:bg-[length:120%] lg:bg-[length:120%] xl:bg-[length:100%]"
          style={{
            backgroundImage: "url(./../images/hh.jpg)",
            backgroundPosition: "68% 66%",
          }}
        >
          <div className="flex flex-col rounded-3xl  bg-gray-700/20 p-5 py-8 shadow-xl [text-shadow:_0_1px_0_rgb(0_0_0_/_15%)] md:px-12  md:py-12 ">
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
        <div className="grid-col-1 grid-row-1 grid w-full gap-5">
          <div className="flex h-full w-full flex-col gap-5 md:flex-row">
            <div className="flex w-full">
              <div className="justify- relative col-start-1 col-end-7 row-start-1 row-end-4 flex h-full w-full flex-col items-start rounded-3xl bg-white p-8 shadow-lg md:col-start-3">
                <div className="absolute rounded-lg bg-[#F7981C] px-4 py-2 text-sm font-semibold uppercase text-white">
                  Découvrir
                </div>
                <div className="flex h-full w-full flex-col space-y-8 pt-14">
                  <p className="text-2xl font-bold md:text-3xl md:font-semibold">
                    La pompe à chaleur par&nbsp;
                    <span className="text-[#E6AF2E]">
                      Brico dépot et Ynergie
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
                        className="w-4  pt-1"
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
            </div>
            <Image
              src={"/images/heat-pump3.jpeg"}
              width={2000}
              height={2000}
              alt="pompe à chaleur"
              className="w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-5 md:flex-nowrap">
            <div className="flex w-full gap-5 md:w-1/2">
              <div className="flex aspect-[1/1] flex-1 flex-col items-center justify-center gap-4 rounded-3xl bg-white p-2 text-center shadow-lg">
                <Image
                  width="60"
                  height="60"
                  src="../svg/temperature.svg"
                  alt="temperature--v1"
                />
                <div className="space-y-1">
                  <p className="text-base font-bold md:text-xl">Pour réduire</p>
                  <p>ma facture d&apos;énergie</p>
                </div>
              </div>
              <div className="flex aspect-[1/1] flex-1  flex-col items-center justify-center gap-4 rounded-3xl bg-white p-2 text-center shadow-lg">
                <Image
                  width="60"
                  height="60"
                  src="../svg/wallet.svg"
                  alt="temperature--v1"
                />
                <div className="space-y-1">
                  <p className="text-base font-bold md:text-xl">
                    Pour valoriser
                  </p>
                  <p>mon logement</p>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-5 md:w-1/2">
              <div className=" flex aspect-[1/1] flex-1  flex-col items-center justify-center gap-4 rounded-3xl bg-white p-2 text-center shadow-lg">
                <Image
                  width="60"
                  height="60"
                  src="../svg/house.svg"
                  alt="temperature--v1"
                />
                <div className="space-y-1">
                  <p className="text-base font-bold md:text-xl">
                    Pour améliorer
                  </p>
                  <p>mon confort</p>
                </div>
              </div>
              <div className=" flex aspect-[1/1] flex-1  flex-col items-center justify-center gap-4 rounded-3xl bg-white p-2 text-center shadow-lg">
                <Image
                  width="60"
                  height="60"
                  src="../svg/carbon.svg"
                  alt="temperature--v1"
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
          <div className="flex h-full w-full gap-4 md:flex-row md:gap-5 ">
            <Image
              src={"/images/ynergie&moi.jpeg"}
              width={1000}
              height={1000}
              alt="pompe à chaleur"
              className=" rounded-3xl object-cover shadow-lg"
            />
            <div className="flex w-full">
              <div className="relative col-start-1 col-end-7 row-start-1 row-end-4 flex h-full w-full flex-col items-start rounded-3xl bg-white p-8 shadow-lg md:col-start-3">
                <div className="absolute rounded-lg bg-[#F7981C] px-4 py-2 text-sm font-semibold uppercase text-white">
                  J&apos;AIME FAIRE, MAIS JE FAIS FAIRE
                </div>
                <div className="flex h-full w-full flex-col space-y-6 pt-14">
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
        </div>

        <div className="grid-col-1 grid-row-1 grid w-full gap-5">
          <div
            className="flex w-full gap-5 rounded-3xl"
            style={{
              backgroundImage: "url(./../images/instalation.jpeg)",
              backgroundPosition: "68% 66%",
            }}
          >
            <div className="h-full w-full rounded-3xl bg-gray-700/20 backdrop-blur-sm">
              <div className="relative col-start-1 col-end-7 row-start-1 row-end-4 flex h-full w-full items-start rounded-3xl p-8 text-white shadow-lg md:col-start-3">
                <div className="w-1/3">
                  <div className="absolute rounded-lg bg-[#F7981C] px-4 py-2 text-sm  font-semibold uppercase">
                    SIMULATION
                  </div>
                  <div className="flex h-full flex-col space-y-8 pt-12 [text-shadow:_0_1px_0_rgb(0_0_0_/_25%)] ">
                    <p className="text-2xl font-bold md:text-3xl md:font-semibold">
                      Illustration d&apos;installation&nbsp;
                      <span className="">d&apos;une pompe à chaleur</span>
                    </p>
                    <ul className=" space-y-2 text-base">
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
                <div className="flex h-full w-2/3 justify-center text-[#453f3c]">
                  <div className="flex h-full w-2/3 flex-col items-center justify-between rounded-xl bg-white px-8 pb-2 pt-8 shadow-lg">
                    <h6 className="w-full text-xl font-medium">
                      Montant des travaux :
                    </h6>
                    <h6 className=" text-4xl font-bold">13 620 €</h6>
                    <h6 className="w-full text-xl font-medium">
                      Montant des aides :
                    </h6>
                    <h6 className=" text-4xl font-bold">- 9 000 €</h6>
                    <p className="text-center text-xs">
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

        <div className="r grid-col-1 grid-row-1 grid w-full ">
          <div className="flex h-full w-full flex-col-reverse gap-4 md:flex-row  md:gap-5">
            <div className="col-start-1 col-end-7 row-start-1 row-end-6 flex h-full w-full flex-col justify-between gap-8 rounded-3xl bg-white p-5 shadow-lg md:col-start-1 md:col-end-5 md:p-8">
              <div className="absolute rounded-lg bg-[#F7981C] px-4 py-2 text-sm font-semibold uppercase text-white">
                FAQ
              </div>
              <div className="flex flex-col justify-center  space-y-4 pt-14">
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
            <Image
              src={"/images/economy.jpeg"}
              width={1000}
              height={1000}
              alt="pompe à chaleur"
              className="w-96 rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
