import Button from "./Navigation/Button";

export default function PACbutton() {
  return (
    <div className="fixed bottom-4 md:bottom-8 md:right-8 right-4 z-30">
      <div className="relative flex">
        <button className="active:opacity-90 shadow-lg hover:bg-[#DF371E] bg-black text-white rounded-full md:px-5  md:py-3 px-4 py-2 text-base flex justify-center items-center w-fit">
          Simuler mon projet
        </button>
        <div className="absolute right-3 justify-center items-center flex">
          <span
            className="animate-ping absolute  inline-flex h-5 w-5 rounded-full bg-[#DF371E] opacity-75"
            style={{ animationDuration: "2s" }}
          ></span>
          <span className="absolute inline-flex rounded-full h-3 w-3 bg-[#DF371E]"></span>
        </div>
      </div>
    </div>
  );
}
