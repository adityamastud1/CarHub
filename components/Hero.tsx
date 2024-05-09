"use client";
import "../app/globals.css";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useSession } from "next-auth/react";

const Hero = () => {
  const { data: session, status } = useSession(); // Destructure session and status from useSession

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        {status === "authenticated" ? (
          <h1 className="hero__title">
            Hello, <span className="text-gradient">{session?.user?.name}!</span>
          </h1>
        ) : (
          <h1 className="hero__title">
            Welcome to <span className="text-gradient">CarHub!</span>
          </h1>
        )}
        <h1 className="hero__title">find and book your favourite cars!</h1>
        <p className="hero__subtitle">streamline car booking </p>
        <CustomButton
          title={"explore cars"}
          containerStyles="bg-gradient-to-r from-blue-700 to-blue-300 text-white rounded-full mt-10 hover:bg-blue-600 hover:to-blue-200 transition duration-300 ease-in-out"
        />
      </div>
      <div id="hero__image-container" className="hero__image-container"> {/* Add id attribute to identify the section */}
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};


export default Hero;
