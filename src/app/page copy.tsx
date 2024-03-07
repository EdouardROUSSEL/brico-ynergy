import Image from "next/image";
import Button from "./_components/Navigation/Button";
import Logo from "./_components/Navigation/Logo";

export default function Home() {
  return (
    <main className="bg-[#EEEEEE]">
      <section className="lg:container lg:mx-auto lg:px-4 flex flex-col space-y-8 py-8">
        <div
          className="bg-[length:250%] md:bg-[length:120%] lg:bg-[length:120%] xl:bg-[length:100%] rounded-lg"
          style={{
            backgroundImage: "url(./../images/hh.jpg)",
            backgroundPosition: "68% 66%",
          }}
        >
          <div className=" shadow-xl rounded-lg bg-gray-700/20 p-5 md:py-12 md:px-12 py-8 flex flex-col gap-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_15%)] ">
            <div className="w-5/6 md:w-8/12">
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
          <div className="flex h-full gap-8 w-full">
            <div className="shadow-lg  h-full shrink-0 hidden md:flex">
              <h3
                className="[text-shadow:_0_1px_0_rgb(0_0_0_/_15%)] bg-[#919295] px-4 text-white  font-semibold md:text-5xl text-xl transform rotate-180  text-center rounded-r-lg tracking-wider"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                Découvrir
              </h3>

              {/* <Image
                src={"/images/pompe-chaleur.jpg"}
                width={1000}
                height={1000}
                alt="pompe à chaleur"
                className="w-72 object-cover rounded-r-lg"
              /> */}
              <Image
                src={"/images/heat-pump.png"}
                width={1200}
                height={1200}
                alt="pompe à chaleur"
                className="w-72 object-cover object-rigth rounded-r-lg"
              />
            </div>
            <div className="w-full shadow-lg rounded-lg bg-white flex flex-col items-start justify-between h-full  space-y-8 p-8 row-end-4 col-end-7 row-start-1 md:col-start-3 col-start-1">
              {/* <div className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_15%)]  w-full text-center bg-[#919295] py-4 font-bold md:text-5xl text-2xl rounded-t-lg">
                <h6>La pompe à chaleur</h6>
              </div> */}
              <h6 className="text-3xl font-semibold">
                La pompe à chaleur
                <div style={{ color: "#DF371E" }} className="flex items-end">
                  <p className="text-black">par&nbsp;</p>
                  Brico dépot et Ynergie
                </div>
              </h6>
              <div className="flex w-full flex-wrap justify-center">
                <div className="flex">
                  <div className="items-center justify-center gap-2 w-full flex flex-col text-gray-700 text-center p-2 flex-1 min-w-32">
                    <Image
                      width="50"
                      height="50"
                      src="../svg/temperature.svg"
                      alt="temperature--v1"
                    />
                    <div>
                      <p className="font-bold text-lg">Pour réduire</p>
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
                      <p className="font-bold text-lg">Pour valoriser</p>
                      <p className="text-sm">mon logement</p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className=" items-center justify-center gap-2  flex flex-col text-gray-700 text-center p-2 flex-1 min-w-32">
                    <Image
                      width="50"
                      height="50"
                      src="../svg/house.svg"
                      alt="temperature--v1"
                    />
                    <div>
                      <p className="font-bold text-lg">Pour améliorer</p>
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
                      <p className="font-bold text-lg">Pour diminuer</p>
                      <p className="text-sm">mon empreinte carbone</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button content="En savoir plus" className="place-self-center" />
            </div>
          </div>
        </div>
        <div
          className=" w-full h-auto bg-[length:100%]  "
          style={{
            backgroundImage: "url(./../images/instalation.jpeg)",
            backgroundRepeat: "no reapeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col bg-black/20 p-4 md:p-8 ">
            <h6 className="w-full text-center text-white font-bold md:text-5xl text-4xl py-8 [text-shadow:_0_1px_0_rgb(0_0_0_/_15%)]">
              Projet d&apos;installation d&apos;une pompe à chaleur
            </h6>
            <div className="w-full flex justify-center items-start flex-wrap py-8 gap-8">
              <div className="md:min-w-[480px] min-w-[360px] flex items-start justify-center">
                <h3
                  className="font-semibold md:text-3xl text-gray-700 text-xl bg-white transform rotate-180 align-top text-left py-4 px-2 rounded-br-lg rounded-tr-lg tracking-wider border-l-4 border-red-500 "
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  Situation
                </h3>

                <div className=" p-8 bg-white shadow-2xl flex flex-col justify-center items-center rounded-r-xl rounded-bl-xl md:text-lg">
                  <ul className="md:space-y-8 space-y-4 max-w-80">
                    <li className="flex gap-4 items-center font-medium">
                      <Image
                        width={25}
                        height={25}
                        src={"/svg/superficie.svg"}
                        alt="couple"
                      />
                      <p>Maison individuelle 120 m²</p>
                    </li>
                    <li className="flex gap-4 items-center font-medium">
                      <Image
                        width={25}
                        height={25}
                        src={"/svg/build.svg"}
                        alt="couple"
                      />
                      <p>Construite en 1979 et classée D</p>
                    </li>
                    <li className="flex gap-4 items-center font-medium">
                      <Image
                        width={25}
                        height={25}
                        src={"/svg/house-people.svg"}
                        alt="couple"
                      />
                      <p>Couple</p>
                    </li>
                    <li className="flex gap-4 items-center font-medium">
                      <Image
                        width={25}
                        height={25}
                        src={"/svg/wallet.svg"}
                        alt="wallet"
                      />
                      <p>Revenus annuels de 31 500 €</p>
                    </li>
                    <li className="flex gap-4 items-center font-medium">
                      <Image
                        width={25}
                        height={25}
                        src={"/svg/localisation.svg"}
                        alt="localisation"
                      />
                      <p>Habitant en Charente Maritimes</p>
                    </li>
                    <li className="flex gap-4 items-start font-medium">
                      <Image
                        width={25}
                        height={25}
                        src={"/svg/category.svg"}
                        alt="category"
                      />
                      <div className="flex flex-col">
                        <p>Catégorie de ressources* : revenus très modestes</p>
                        <p className="text-xs font-light italic">
                          *barême MaPrimeRénov&apos;
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:min-w-[480px] min-w-[360px] flex items-start justify-center">
                <h3
                  className="font-semibold md:text-3xl text-gray-700 text-2xl bg-white transform rotate-180 align-top text-left py-4 px-2 rounded-br-lg rounded-tr-lg tracking-wider border-l-4 border-red-500"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  Coût des travaux
                </h3>

                <div className=" p-8 bg-white shadow-2xl flex flex-col justify-center items-center rounded-r-xl rounded-bl-xl space-y-4 md:space-y-8">
                  <h3 className="max-w-80 font-medium text-lg text-center">
                    Installation d&apos;une pompe à chaleur Air-Eau avec
                    production d&apos;eau chaude sanitaire
                  </h3>
                  <Image
                    src="/images/aide.png"
                    width={200}
                    height={200}
                    alt="aide au financement"
                  />
                  <ul className="space-y-4 md:space-y-8 max-w-80 justify-center flex flex-col items-center">
                    <li className="flex gap-4 items-center text-lg font-medium">
                      <p className="font-bold">13 620 €</p>
                      <p>TTC</p>
                    </li>
                    <li className="flex gap-4 items-start text-lg font-medium">
                      <p className="font-bold">9 000 € </p>
                      <p>d’aides</p>
                    </li>
                    <li className="flex gap-4 items-start text-lg font-medium">
                      <p>Total à financer : </p>
                      <p className="font-bold">4 620 €</p>
                    </li>
                    <li>
                      <p className="text-center text-sm">
                        La réglementation liée à la rénovation énergétique et
                        les aides dédiées évoluent régulièrement - données à
                        titre indicatif -
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white items-center w-full h-auto grid grid-cols-6 grid-rows-3 relative">
          <Image
            fill
            objectFit="cover"
            src={"/images/economy.jpeg"}
            alt="heat pump"
            className="md:block hidden row-end-4 col-end-7 row-start-1 col-start-5 "
          />
          <div className="p-5 md:p-8 flex flex-col justify-between h-full w-full gap-8 row-end-6 md:col-end-5 col-end-7 row-start-1 md:col-start-1 col-start-1">
            <div className="justify-center flex flex-col  space-y-4">
              <h3 className="text-3xl font-semibold">
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
        </div>
      </section>
    </main>
  );
}
