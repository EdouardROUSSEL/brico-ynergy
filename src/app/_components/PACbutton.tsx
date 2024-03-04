import Button from "./Navigation/Button";

export default function PACbutton() {
  return (
    <div className="fixed bottom-4 md:bottom-8 md:right-8 right-4 z-50">
      <div className="relative flex">
        <Button content="Je veux ma PAC" className="relative" />
        <div className="absolute right-3">
          <span className="animate-ping absolute  inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
          <span className="absolute inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </div>
      </div>
    </div>
  );
}
