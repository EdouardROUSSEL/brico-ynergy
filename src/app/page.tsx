import Image from "next/image";
import Button from "./_components/Navigation/Button";

export default function Home() {
  return (
    <main className="bg-[#EEEEEE]">
      <section className="lg:container lg:mx-auto lg:px-4 pt-20 h-screen ">
        <div className="grid grid-cols-7 grid-rows-7 w-full h-full relative">
          <div className="col-span-7 col-start-1 row-start-1 row-span-3 md:row-span-4 relative">
            <div
              className="bg-[length:270%] md:bg-[length:190%] lg:bg-[length:150%] xl:bg-[length:120%] 2xl:bg-[length:100%] w-full h-full"
              style={{
                backgroundImage: "url(./../images/hh.jpg)",
                backgroundPosition: "55% 66%",
                transform: "scaleX(-1)",
              }}
            ></div>
            <div className="bg-black absolute inset-0 opacity-20"></div>
            <div className="absolute inset-0 flex flex-col justify-between md:p-10 px-4 py-6 [text-shadow:_0_1px_0_rgb(0_0_0_/_12%)]">
              <h6 className="text-white font-bold md:text-5xl text-3xl">
                Pour réduire ma consommation d&apos;énergie, pas besoin de
                diviser ma maison !
              </h6>
              <ul className="text-white text-base md:text-xl font-bold p-2 md:p-8 space-y-2">
                <li className="flex items-center gap-2 md:gap-4">
                  <Image
                    width="20"
                    height="20"
                    src="/images/verifier.png"
                    alt=""
                    className="w-4 md:w-6"
                  />
                  Offre en exclu sur le web !
                </li>
                <li className="flex items-center gap-2 md:gap-4">
                  <Image
                    width="20"
                    height="20"
                    src="/images/verifier.png"
                    alt=""
                    className="w-4 md:w-6"
                  />
                  Rendez-vous le 4 mars pour en savoir plus !
                </li>
              </ul>
              <Button
                content="Je veux être appelé !"
                className="w-8/12 self-center md:self-start md:w-fit"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
