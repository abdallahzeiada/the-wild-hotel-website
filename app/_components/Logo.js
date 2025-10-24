import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 z-10 group">
      <div className="relative">
        <Image 
          src="/logo.png" 
          height={32} 
          width={32} 
          alt="The Wild Oasis logo" 
          className="transition-transform group-hover:scale-110 duration-300 sm:h-10 sm:w-10" 
        />
      </div>
      <span className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide group-hover:text-accent-400 transition-colors duration-300 hidden xs:inline">
        The Wild Hotel
      </span>
    </Link>
  );
}

export default Logo;
