import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#EEEEEE]">
      <section className="lg:container lg:mx-auto lg:px-4 pt-20 h-screen ">
        <div className="grid grid-cols-7 grid-rows-7 w-full h-full relative">
          <div className="col-span-7 col-start-1 row-start-1 row-span-3 relative">
            <h6 className="row-start-1 col-span-3 text-white font-bold text-5xl absolute z-10 p-10 ">
              Pour réduire ma consommation d&apos;énergie, <br />
              pas besoin de diviser ma maison !
            </h6>
            <ul className="absolute z-10">
              <li>Offre en exclu sur le web !</li>
              <li>Rendez-vous le 4 mars pour en savoir plus !</li>
            </ul>
            <div
              className="md:hidden block bg-no-repeat w-full h-full "
              style={{
                backgroundImage: "url(./../images/hh.jpg)",
                backgroundPosition: "50% 66%",
                backgroundSize: "270%",
                transform: "scaleX(-1)",
              }}
            ></div>

            <div
              className="bg-no-repeat w-full h-full hidden md:block lg:hidden"
              style={{
                backgroundImage: "url(./../images/hh.jpg)",
                backgroundPosition: "50% 66%",
                backgroundSize: "190%",
                transform: "scaleX(-1)",
              }}
            ></div>
            <div
              className="lg:block hidden xl:hidden bg-no-repeat w-full h-full "
              style={{
                backgroundImage: "url(./../images/hh.jpg)",
                backgroundPosition: "50% 66%",
                backgroundSize: "150%",
                transform: "scaleX(-1)",
              }}
            ></div>
            <div
              className="xl:block 2xl:hidden hidden bg-no-repeat w-full h-full "
              style={{
                backgroundImage: "url(./../images/hh.jpg)",
                backgroundPosition: "50% 66%",
                backgroundSize: "120%",
                transform: "scaleX(-1)",
              }}
            ></div>
            <div
              className="2xl:block hidden bg-no-repeat w-full h-full "
              style={{
                backgroundImage: "url(./../images/hh.jpg)",
                backgroundPosition: "0% 66%",
                backgroundSize: "100%",
                transform: "scaleX(-1)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
