import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-800/30 bg-primary-950/70 backdrop-blur-lg sticky top-0 z-50  md:w-full">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-3 sm:px-6 md:px-8 py-3 sm:py-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
