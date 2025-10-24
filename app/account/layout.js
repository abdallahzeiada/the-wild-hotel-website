import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="relative lg:flex h-full gap-8 lg:gap-12">
      <div className="lg:w-64 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:pt-24 lg:pb-8 lg:px-8">
        <SideNavigation />
      </div>
      <div className="min-w-0 lg:ml-40 lg:pl-12 flex-1">{children}</div>
    </div>
  );
}
