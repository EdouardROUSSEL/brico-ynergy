import Image from "next/image";
import Button from "./_components/Navigation/Button";
import Logo from "./_components/Navigation/Logo";

export default function Home() {
  return (
    <main className="bg-[#EEEEEE]">
      <section className="lg:container lg:mx-auto lg:px-4 flex flex-col space-y-8">
        <div
          className="bg-[length:250%] md:bg-[length:120%] lg:bg-[length:120%] xl:bg-[length:100%] "
          style={{
            backgroundImage: "url(./../images/hh.jpg)",
            backgroundPosition: "68% 66%",
          }}
        >
          <div className="bg-gray-700/20 p-5 md:p-8 py-8 flex flex-col gap-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_15%)] ">
            <h6 className="text-white font-bold md:text-5xl text-2xl w-5/6 md:w-8/12">
              Pour réduire ma consommation d&apos;énergie, pas besoin de diviser
              ma maison !
            </h6>
            <ul className="text-white text-base md:text-xl font-bold md:p-8 space-y-2 w-5/6">
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
            <div className="md:pl-8 place-self-center md:place-self-start">
              <Button content="Je veux être appelé !" />
            </div>
          </div>
        </div>
        <div className="bg-white items-center flex w-full h-auto">
          <Image
            width={1000}
            height={1000}
            src={"/images/pompe-chaleur.jpg"}
            alt="heat pump"
            className="h-full md:block hidden w-1/3 object-cover"
          />
          <div className="p-5 md:p-8 flex flex-col items-center justify-between h-full md:w-2/3 w-full gap-8">
            <div className="justify-center flex flex-col items-center space-y-2">
              <h3 className="text-3xl font-semi text-center">Découvrir</h3>
              <div className="flex flex-col">
                <h6 className="text-2xl font-extrabold text-center">
                  la pompe à chaleur Air / Eau
                </h6>
              </div>
            </div>
            <div className="flex w-full flex-wrap  items-start justify-between gap-4">
              <div className=" items-center justify-center gap-2 w-full flex flex-col text-gray-700 text-center p-2 flex-1 min-w-32">
                <img
                  width="50"
                  height="50"
                  src="../images/temperature.svg"
                  alt="temperature--v1"
                />
                <div>
                  <p className="font-bold text-lg">Pour réduire</p>
                  <p className="text-sm">ma facture d’énergie</p>
                </div>
              </div>
              <div className="items-center justify-center gap-2  flex flex-col text-gray-700 text-center p-2 flex-1 min-w-32">
                <img
                  width="50"
                  height="50"
                  src="../images/wallet.svg"
                  alt="temperature--v1"
                />
                <div>
                  <p className="font-bold text-lg">Pour valoriser</p>
                  <p className="text-sm">mon logement</p>
                </div>
              </div>
              <div className=" items-center justify-center gap-2  flex flex-col text-gray-700 text-center p-2 flex-1 min-w-32">
                <img
                  width="50"
                  height="50"
                  src="../images/house.svg"
                  alt="temperature--v1"
                />
                <div>
                  <p className="font-bold text-lg">Pour améliorer</p>
                  <p className="text-sm">mon confort</p>
                </div>
              </div>
              <div className=" items-center justify-center gap-2  flex flex-col text-gray-700 text-center p-2 flex-1 min-w-32">
                <img
                  width="50"
                  height="50"
                  src="../images/carbon.svg"
                  alt="temperature--v1"
                />
                <div>
                  <p className="font-bold text-lg">Pour diminuer</p>
                  <p className="text-sm">mon empreinte carbone</p>
                </div>
              </div>
            </div>
            <Button content="En savoir plus" />
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
          <div className="flex flex-col bg-black/20 p-8 gap-4">
            <h6 className="  w-full text-center text-white font-bold md:text-5xl text-2xl ">
              Projet d'installation d'une pompe à chaleur
            </h6>
            <div className="w-full flex justify-around px-8">
              <div className="w-1/3 flex items-start">
                <h3
                  className="font-semibold md:text-2xl text-gray-700 text-xl bg-white transform rotate-180 align-top text-left py-4 px-2 rounded-br-lg rounded-tr-lg  tracking-wider"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  Situation
                </h3>

                <div className="space-y-8 p-8 bg-white shadow-2xl">
                  <h6 className="text-center md:text-lg font-semibold w-2/3 ">
                    Maison individuelle de 120 m² construite en 1979 et classée
                    D
                  </h6>
                  <ul className="space-y-4 w-full">
                    <li className="flex gap-4 items-center text-lg font-medium">
                      <Image
                        width={25}
                        height={25}
                        src={"/images/house-people.svg"}
                        alt="couple"
                      />
                      <p>Couple</p>
                    </li>
                    <li className="flex gap-4 items-center text-lg font-medium">
                      <Image
                        width={25}
                        height={25}
                        src={"/images/wallet.svg"}
                        alt="wallet"
                      />
                      <p>Revenus annuels de 31 500 €</p>
                    </li>
                    <li className="flex gap-4 items-center text-lg font-medium">
                      <Image
                        width={25}
                        height={25}
                        src={"/images/localisation.svg"}
                        alt="localisation"
                      />
                      <p>Habitant en Charente Maritimes</p>
                    </li>
                    <li className="flex gap-4 items-start text-lg font-medium">
                      <Image
                        width={25}
                        height={25}
                        src={"/images/category.svg"}
                        alt="category"
                      />
                      <div className="flex flex-col">
                        <p>Catégorie de ressources* : revenus très modestes</p>
                        <p className="text-xs font-light italic">
                          *barême MaPrimeRénov'
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/3  space-y-8 justify-center items-center flex flex-col px-8 py-16">
                <h3 className="font-semibold md:text-2xl text-gray-700 text-xl text-center">
                  Coût d'installation
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </main>
  );
}
