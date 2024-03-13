import Button from "./Navigation/Button";

export default function PACbutton() {
  return (
    <div className="fixed bottom-4 right-4 z-30 md:bottom-8 md:right-8">
      <div className="relative flex">
        <button className="flex w-fit items-center justify-center rounded-full bg-black px-4  py-2 text-base text-white shadow-lg hover:bg-[#DF371E] active:opacity-90 md:px-5 md:py-3">
          Simuler mon projet
        </button>
        <div className="absolute right-3 flex items-center justify-center">
          <span
            className="absolute inline-flex  h-5 w-5 animate-ping rounded-full bg-[#F7981C] opacity-75"
            style={{ animationDuration: "2s" }}
          ></span>
          <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#F7981C]"></span>
        </div>
      </div>
    </div>
  );
}
