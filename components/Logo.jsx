import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-evenly items-center w-[215px] h-[60px]">
      <Image width={20} height={20} src="/logo.svg" alt="linkwise" />
      <h1
        className="text-zinc-800
text-[40px]
font-bold
font-['Arial']
leading-[60px]"
      >
        Linkwise
      </h1>
    </div>
  );
};

export default Logo;
