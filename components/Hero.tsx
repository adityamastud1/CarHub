"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Hero = () => {
  const handleScroll = () => {};
  const { status } = useSession();
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">find and book your favourite cars!</h1>
        <p className="hero__subtitle">streamline car booking </p>
        <CustomButton
          title={"explore cars"}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => {
            handleScroll;
          }}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
