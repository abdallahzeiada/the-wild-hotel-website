import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";
import Image from "next/image";
import {
  UserCircleIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  IdentificationIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Profile Settings",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 p-8 md:p-10 shadow-xl animate-slideDown">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-800 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0 animate-scaleIn delay-200">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 shadow-lg overflow-hidden">
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={96}
                  height={96}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <UserCircleIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
              )}
            </div>
          </div>
          
          <div className="flex-1 animate-slideRight delay-300">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheckIcon className="w-5 h-5 text-accent-200" />
              <p className="text-accent-100 text-sm md:text-base font-medium">
                Profile Settings
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Guest Information
            </h1>
            <p className="text-accent-100 text-sm md:text-base max-w-2xl">
              Keep your profile up to date for a seamless check-in experience
            </p>
          </div>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slideUp delay-200">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                <UserCircleIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-primary-300 text-xs font-medium uppercase tracking-wider">Full Name</p>
                <p className="text-white font-semibold text-lg">{guest.fullName}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slideUp delay-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                <EnvelopeIcon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-primary-300 text-xs font-medium uppercase tracking-wider">Email Address</p>
                <p className="text-white font-semibold text-lg truncate">{guest.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 shadow-xl animate-slideUp delay-400">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-5"></div>
        
        <div className="relative z-10 p-6 md:p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent-500/20 rounded-lg">
              <SparklesIcon className="w-6 h-6 text-accent-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Update Your Profile</h2>
              <p className="text-primary-300 text-sm">Make your check-in process faster and smoother</p>
            </div>
          </div>

          <UpdateProfileForm guest={guest}>
            <SelectCountry
              name="nationality"
              id="nationality"
              className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg hover:bg-primary-100 transition-colors duration-200 focus:ring-2 focus:ring-accent-500 focus:outline-none"
              defaultCountry={guest.nationality}
            />
          </UpdateProfileForm>
        </div>
      </div>

      {/* Security Notice */}
      <div className="rounded-xl bg-gradient-to-br from-primary-800/50 to-primary-900/50 backdrop-blur-sm p-6 border border-primary-700/50 shadow-lg animate-fadeIn delay-700">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-accent-500/20 rounded-lg">
            <ShieldCheckIcon className="w-6 h-6 text-accent-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2">Privacy & Security</h3>
            <p className="text-primary-300 text-sm leading-relaxed">
              Your personal information is securely stored and will only be used to enhance your booking experience. 
              We respect your privacy and never share your data with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
