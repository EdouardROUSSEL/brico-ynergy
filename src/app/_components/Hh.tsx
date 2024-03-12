import Image from "next/image";
import Button from "./Navigation/Button";

export default function hh() {
  return (
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
            Pour réduire ma consommation d&apos;énergie, pas besoin de diviser
            ma maison !
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
  );
}
