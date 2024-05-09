"use client";
import { signIn, signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useSession } from "next-auth/react";
import { Session } from "inspector";
const Navbar = () => {
  // const as=()=>{
  //   console.log(Session.user.nmae);
  // }
  const { status } = useSession();
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px]  mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
        <Link
          href="/"
          className=",
        flex justify-center items-center"
        >
          <Image
            src="/logo.svg"
            alt="car hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        {status === "authenticated" ? (
          <button
            onClick={() => signOut()}
            className="text-primary-blue rounded-full bg-white min-w-[130px] h-10 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:text-primary-dark"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="text-primary-blue rounded-full bg-white min-w-[130px] h-10 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:text-primary-dark"
          >
            Sign In
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
