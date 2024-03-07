import Image from "next/image";
import Button from "./_components/Navigation/Button";
import Logo from "./_components/Navigation/Logo";

export default function Home() {
  return (
    <main className="bg-[#EEEEEE] ">
      <section className="lg:container lg:mx-auto lg:px-4 flex flex-col md:space-y-8 md:py-8 space-y-4 p-3">
        <div
          className="bg-[length:250%] md:bg-[length:120%] lg:bg-[length:120%] xl:bg-[length:100%] rounded-lg"
          style={{
            backgroundImage: "url(./../images/hh.jpg)",
            backgroundPosition: "68% 66%",
          }}
        >
          <div className=" shadow-xl rounded-lg bg-gray-700/20 p-5 md:py-12 md:px-12 py-8 flex flex-col  [text-shadow:_0_1px_0_rgb(0_0_0_/_15%)] ">
            <div className="w-5/6 md:w-8/12 space-y-8">
              <h6 className="text-white font-bold md:text-5xl text-2xl w-full leading-8">
                Pour réduire ma consommation d&apos;énergie, pas besoin de
                diviser ma maison !
              </h6>

              <ul className="text-white text-base md:text-xl font-bold md:py-8 space-y-2">
                <li className="flex items-start gap-2 md:gap-4">
                  <Image
                    width="20"
                    height="20"
                    src="/images/verifier.png"
                    alt=""
                    className="w-4 md:w-6 pt-1"
                  />
                  Prix cassé
                </li>
                <li className="flex items-start gap-2 md:gap-4">
                  <Image
                    width="20"
                    height="20"
                    src="/images/verifier.png"
                    alt=""
                    className="w-4 md:w-6 pt-1"
                  />
                  Pompe à chaleur air/eau à partir de 1490€*
                </li>
                <li className="flex items-start gap-2 md:gap-4">
                  <Image
                    width="20"
                    height="20"
                    src="/images/verifier.png"
                    alt=""
                    className="w-4 md:w-6 pt-1"
                  />
                  Fournie posée par un professionnel RGE
                </li>
              </ul>
              <Button content="Je veux être appelé !" />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-col-1 grid-row-1">
          <div className="flex h-full w-full md:gap-8 gap-4 flex-col md:flex-row">
            <Image
              src={"/images/pompe2.webp"}
              width={1000}
              height={1000}
              alt="pompe à chaleur"
              className="w-96 object-cover shadow-lg rounded-lg hidden md:block"
            />
            <div className="flex relative justify-center  items-center md:hidden">
              <Image
                src={"/images/pompe2.webp"}
                width={1000}
                height={1000}
                alt="pompe à chaleur"
                className="w-96 object-cover shadow-lg rounded-lg "
              />
              <div className="absolute text-3xl font-semibold text-white bg-gray-700/20 h-full w-full flex items-center ">
                <h6 className="text-center w-full [text-shadow:_0_1px_0_rgb(0_0_0_/_15%)]">
                  Découvrez
                </h6>
              </div>
            </div>
            <div className="flex w-full">
              <div className="shadow-lg h-full shrink-0 hidden md:flex">
                <h3
                  className=" md:block [text-shadow:_0_1px_0_rgb(0_0_0_/_15%)] bg-[#919295] px-4 text-white font-semibold text-5xl  transform rotate-180  text-center rounded-r-lg tracking-wider"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  Découvrir
                </h3>
              </div>
              <div className="w-full shadow-lg rounded-lg md:rounded-r-lg bg-white flex flex-col items-start justify-between h-full  space-y-8 p-8 row-end-4 col-end-7 row-start-1 md:col-start-3 col-start-1">
                <h6 className="md:text-3xl text-2xl font-bold md:font-semibold">
                  La pompe à chaleur
                  <p style={{ color: "#DF371E" }}>
                    <span className="text-black">par&nbsp;</span>
                    Brico dépot et Ynergie
                  </p>
                </h6>
                <div className="flex w-full flex-wrap justify-center">
                  <div className="flex t items-start">
                    <div className="items-center justify-center gap-2 w-full flex flex-col text-gray-700 text-center p-2 flex-1 min-w-32">
                      <Image
                        width="50"
                        height="50"
                        src="../svg/temperature.svg"
                        alt="temperature--v1"
                      />
                      <div>
                        <p className="font-bold text-base md:text-lg">
                          Pour réduire
                        </p>
                        <p className="text-sm">ma facture d&apos;énergie</p>
                      </div>
                    </div>
                    <div className="items-center justify-center gap-2  flex flex-col text-gray-700 text-center p-2 flex-1 min-w-32">
                      <Image
                        width="50"
                        height="50"
                        src="../svg/wallet.svg"
                        alt="temperature--v1"
                      />
                      <div>
                        <p className="font-bold text-base md:text-lg">
                          Pour valoriser
                        </p>
                        <p className="text-sm">mon logement</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className=" items-center justify-center gap-2  flex flex-col text-gray-700 text-center p-2 flex-1 min-w-32">
                      <Image
                        width="50"
                        height="50"
                        src="../svg/house.svg"
                        alt="temperature--v1"
                      />
                      <div>
                        <p className="font-bold text-base md:text-lg">
                          Pour améliorer
                        </p>
                        <p className="text-sm">mon confort</p>
                      </div>
                    </div>
                    <div className=" items-center justify-center gap-2  flex flex-col text-gray-700 text-center p-2 flex-1 min-w-32">
                      <Image
                        width="50"
                        height="50"
                        src="../svg/carbon.svg"
                        alt="temperature--v1"
                      />
                      <div>
                        <p className="font-bold text-base md:text-lg">
                          Pour diminuer
                        </p>
                        <p className="text-sm">mon empreinte carbone</p>
                      </div>
                    </div>
                  </div>
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
          className="w-screen md:w-full md:rounded-lg shadow-lg  bg-[length:100%] place-self-center "
          style={{
            backgroundImage: "url(./../images/instalation.jpeg)",
            backgroundRepeat: "no reapeat",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-black/20 flex justify-center md:rounded-lg">
            <div className="flex p-3 md:p-8  md:flex-row flex-col max-w-4xl gap-4 md:gap-8 ">
              <div className=" flex  justify-center items-start flex-col gap-4 md:gap-8  w-full md:w-2/3">
                <div className=" text-black bg-white rounded-lg shadow-lg p-8 w-full text-xl">
                  <p className="font-semibold text-3xl text-[#DF371E]">
                    Installation d&apos;une pompe à chaleur <br />
                    Air-Eau
                  </p>
                </div>

                <div className="md:space-y-12 space-y-4 text-gray-700 flex bg-white rounded-lg shadow-lg py-8 px-4 flex-wrap items-center justify-center ">
                  <div className="flex w-full">
                    <div className="flex flex-col gap-4 text-center items-center justify-start font-medium w-1/2 shrink-0">
                      <Image
                        width={40}
                        height={40}
                        src={"/svg/superficie.svg"}
                        alt="couple"
                      />
                      <div>
                        <p>
                          120 m²
                          <br />
                          Maison individuelle
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 text-center  items-center justify-start font-medium w-1/2 shrink-0">
                      <Image
                        width={40}
                        height={40}
                        src={"/svg/build.svg"}
                        alt="couple"
                      />
                      <p>
                        Construction 1979 <br /> Classe énergétique D
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full ">
                    <div className="flex flex-col gap-4 text-center items-center justify-start font-medium w-1/2 shrink-0 ">
                      <Image
                        width={40}
                        height={40}
                        src={"/svg/localisation.svg"}
                        alt="localisation"
                      />
                      <p>Charente Maritimes</p>
                    </div>
                    <div className="flex flex-col gap-4 text-center  items-center justify-start font-medium w-1/2 shrink-0 ">
                      <Image
                        width={40}
                        height={40}
                        src={"/svg/wallet.svg"}
                        alt="wallet"
                      />
                      <p>
                        Revenus annuels <br /> 31 500 €
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-center items-center justify-start font-medium w-44 shrink-0 ">
                    <Image
                      width={40}
                      height={40}
                      src={"/svg/house-people.svg"}
                      alt="couple"
                    />
                    <p>Couple</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-lg w-full md:w-4/6 justify-between flex flex-col items-center">
                <h6 className="w-full text-3xl font-semibold">
                  Coût des travaux
                </h6>
                <div className="w-full h-full flex flex-col items-center justify-around">
                  <Image
                    src="/images/aide.png"
                    width={200}
                    height={200}
                    alt="aide au financement"
                  />

                  <div className="flex items-end gap-4 text-4xl">
                    <h6 className=" font-bold">13 620 €</h6>
                    <p>TTC</p>
                  </div>
                  <div className="flex items-end gap-4 text-4xl pb-8">
                    <h6 className=" font-bold">- 9 000 €</h6>
                    <p>d’aides</p>
                  </div>
                </div>
                <p className="text-center text-sm">
                  La réglementation liée à la rénovation énergétique et les
                  aides dédiées évoluent régulièrement - données à titre
                  indicatif -
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="r w-full grid grid-col-1 grid-row-1 ">
          <div className="flex h-full w-full gap-4 md:gap-8 md:flex-row  flex-col-reverse">
            <div className="bg-white rounded-lg shadow-lg p-5 md:p-8 flex flex-col justify-between h-full w-full gap-8 row-end-6 md:col-end-5 col-end-7 row-start-1 md:col-start-1 col-start-1">
              <div className="justify-center flex flex-col  space-y-4">
                <h3 className="text-3xl font-bold md:font-semibold">
                  Quelles sont
                  <p className="text-[#DF371E]">les aides financières ?</p>
                </h3>
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
              className="w-96 object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
