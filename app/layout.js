import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Inconsolata } from "next/font/google";

const josefin = Inconsolata({
  subsets: ["latin"],
  // variable: "--font-josefin",
  // weight: ["400", "500", "600", "700"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  description: "Book your stay at the wild hotel",
  title: {
    template: "%s | The Wild Hotel",
    default: "Welcome | The Wild Hotel",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-primary-50 flex flex-col antialiased`}
      >
        <Header />
        <div className="flex-1 px-3 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
