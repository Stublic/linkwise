
import AuthStatus from "@/components/auth-status";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (
    <div className="h-screen flex flex-col bg-[#FAFAFA]">
      <div className="m-8 rounded-xl flex justify-between items-center p-8 bg-white shadow">
    <div className="flex justify-start items-center  h-[60px]">
      <Image width={45} height={45} src="/logo.svg" alt="linkwise" />
      <h1
        className="text-zinc-800
                    text-[40px]
                    font-bold
                    font-['Arial']
                    leading-[60px]
                    hidden
                    md:inline-flex
                    pl-2"
      >
        Linkwise
      </h1>
    </div>
    <Link
      href="/register"
      className="py-3 px-5  heading-S text-[#C6D752] border-[2px] rounded-md border-[#C6D752]  hover:bg-[#E9F0A6] hover:text-[#C6D752] "
    >
      Get started
      
    </Link>
  </div>
  <div className="flex justify-evenly items-center  flex-wrap">
    <div className="m-8 pl-2">
      <h1 className="heading-M">Manage your links with Linkwise</h1>
      <p className="body-M max-w-sm my-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste in ipsam quos officia expedita accusamus at cumque rerum dolores aspernatur!</p>
      <div className="flex">
      <Link
      href="/register"
      className="py-3 px-5  heading-S text-[#C6D752] border-[2px] rounded-md border-[#C6D752]  hover:bg-[#E9F0A6] hover:text-[#C6D752] "
    >
      Get started
      
    </Link>
        <button
          className={`flex py-3 px-5  mx-2 rounded-md heading-S bg-none text-[#737373]`}
         
        >
         Pricing
        </button>
      </div>
    </div>
    <div>
      <Image className="rounded-lg" src='/hero.png' width={350} height={500} alt="linkwise"/>
    </div>
  </div>
    </div>
    
  );
}
