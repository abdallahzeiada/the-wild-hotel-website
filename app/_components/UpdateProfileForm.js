"use client";
import { useFormStatus } from "react-dom";
import { updateGuest } from "../_lib/actions";
import Image from "next/image";
import {
  UserCircleIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  IdentificationIcon,
  CheckCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationalID, nationality, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="space-y-6"
    >
      {/* Full Name Field */}
      <div className="group space-y-3 animate-slideUp delay-100">
        <label 
          htmlFor="fullName"
          className="flex items-center gap-2 text-primary-200 font-semibold text-sm uppercase tracking-wide"
        >
          <UserCircleIcon className="w-5 h-5 text-accent-400" />
          Full Name
        </label>
        <div className="relative">
          <input
            id="fullName"
            defaultValue={fullName}
            name="fullName"
            className="px-5 py-4 bg-primary-800 border-2 border-primary-700 text-white w-full shadow-sm rounded-xl 
            hover:border-primary-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 
            transition-all duration-300 focus:outline-none group-hover:shadow-lg"
            placeholder="Enter your full name"
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="group space-y-3 animate-slideUp delay-200">
        <label 
          htmlFor="email"
          className="flex items-center gap-2 text-primary-200 font-semibold text-sm uppercase tracking-wide"
        >
          <EnvelopeIcon className="w-5 h-5 text-green-400" />
          Email Address
          <span className="ml-auto text-xs bg-primary-700 px-2 py-1 rounded-full text-primary-300">Verified</span>
        </label>
        <div className="relative">
          <input
            id="email"
            disabled
            defaultValue={email}
            name="email"
            className="px-5 py-4 bg-primary-900/50 border-2 border-primary-700/50 text-primary-400 w-full shadow-sm rounded-xl 
            cursor-not-allowed"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <CheckCircleIcon className="w-5 h-5 text-green-500" />
          </div>
        </div>
        <p className="text-xs text-primary-400 flex items-center gap-1">
          <span>Your email is verified and cannot be changed</span>
        </p>
      </div>

      {/* Nationality Field */}
      <div className="group space-y-3 animate-slideUp delay-300">
        <label 
          htmlFor="nationality"
          className="flex items-center gap-2 text-primary-200 font-semibold text-sm uppercase tracking-wide"
        >
          <GlobeAltIcon className="w-5 h-5 text-blue-400" />
          Nationality
          {countryFlag && (
            <span className="ml-auto">
              <Image
                src={countryFlag}
                alt="Country flag"
                width={24}
                height={16}
                className="h-5 w-auto rounded shadow-sm"
              />
            </span>
          )}
        </label>
        <div className="relative">
          {children}
        </div>
      </div>

      {/* National ID Field */}
      <div className="group space-y-3 animate-slideUp delay-400">
        <label 
          htmlFor="nationalID"
          className="flex items-center gap-2 text-primary-200 font-semibold text-sm uppercase tracking-wide"
        >
          <IdentificationIcon className="w-5 h-5 text-orange-400" />
          National ID Number
        </label>
        <div className="relative">
          <input
            id="nationalID"
            defaultValue={nationalID}
            name="nationalID"
            className="px-5 py-4 bg-primary-800 border-2 border-primary-700 text-white w-full shadow-sm rounded-xl 
            hover:border-primary-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 
            transition-all duration-300 focus:outline-none group-hover:shadow-lg"
            placeholder="Enter your national ID number"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end items-center gap-4 pt-4 animate-slideUp delay-500">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="group relative px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl 
      shadow-lg hover:shadow-accent-500/50 transition-all duration-300 
      disabled:cursor-not-allowed disabled:bg-primary-700 disabled:text-primary-400 disabled:shadow-none
      hover:scale-105 active:scale-95 overflow-hidden"
      disabled={pending}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-accent-400/0 via-white/20 to-accent-400/0 
        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
      <span className="relative flex items-center gap-2">
        {pending ? (
          <>
            <ArrowPathIcon className="w-5 h-5 animate-spin" />
            Updating...
          </>
        ) : (
          <>
            <CheckCircleIcon className="w-5 h-5" />
            Update Profile
          </>
        )}
      </span>
    </button>
  );
}

export default UpdateProfileForm;
