import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stripe from "../assets/images/stripe.png";
import aboutImg from "../assets/images/aboutImg.png";
import crow from "../assets/images/crow.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiCheckboxCircleFill } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Plan = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.to("#Crow", {
      x: 100,
      y: -50,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      "#About-img",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1.3,
        duration: 1.5,

        scrollTrigger: {
          trigger: "#About",
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      "#discount",
      {
        opacity: 0,
        y: 0,
      },
      {
        duration: 1.3,
        opacity: 1,
        y: 100,
        ease: "bounce",

        scrollTrigger: {
          trigger: "#About",
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      ".Heading",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 1.3,
        stagger: .2,

        scrollTrigger: {
          trigger: "#About",
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      "#booking-section",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.3,
        duration: 1.5,

        scrollTrigger: {
          trigger: "#About",
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      "#Features > div, #book-button",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#About",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-[#ffffff] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 px-6 md:px-12 lg:px-24 relative z-10"
      id="About"
    >
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-1/2 relative">
        <div className="relative">
          {/* Crow Image */}
          <img
            src={crow}
            id="Crow"
            className="absolute left-[15%] top-10 lg:left-36 lg:top-12 w-10 h-10 sm:w-14 sm:h-14"
            alt="Flying Crow"
          />
          {/* About Image */}
          <img
            src={aboutImg}
            className="w-full max-w-md mx-auto lg:mx-0"
            alt="About Us"
            id="About-img"
          />
          {/* Discount Badge */}
          <div
            className="absolute flex flex-col items-start -space-y-2 z-10 right-0 top-20 lg:right-10 lg:top-24"
            id="discount"
          >
            <h2 className="font-reey text-[50px] sm:text-[70px] text-[#0000ff]">
              30%
            </h2>
            <p className="font-sans text-[30px] sm:text-[40px] text-[#313041] font-medium">
              Discount
            </p>
          </div>
        </div>

        {/* Booking Section */}
        <div
          className="flex items-center gap-4 bg-white px-5 py-4 rounded-lg absolute z-10 bottom-[-20px] lg:bottom-48 lg:left-2 border border-[#e0e0e0] shadow-sm cursor-pointer"
          id="booking-section"
        >
          <FaPhoneVolume className="text-[#0000ff] text-[20px]" />
          <div className="flex flex-col">
            <p className="font-sans text-[10px] text-[#787780] font-medium tracking-wide">
              BOOK TOUR NOW
            </p>
            <p className="font-sans text-[16px] sm:text-[18px] text-[#313041] font-medium tracking-wide">
              666-888-0000
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full lg:w-1/2">
        <img
          src={stripe}
          className="absolute hidden lg:block -z-10 right-8 top-[-40px] animate-bounce-slow"
          alt="Decorative Stripe"
        />
        <h2 className="font-reey text-[20px] text-[#0000ff] Heading">
          Get to know us
        </h2>
        <h1
          style={{ wordSpacing: "-0.1rem" }}
          className="text-[32px] sm:text-[50px] font-sans font-semibold text-[#313041] leading-tight mt-2 Heading"
        >
          Plan Your Trip with Trevily
        </h1>
        <p className="text-[16px] sm:text-[18px] text-[#787780] font-sans mt-6 leading-loose Heading">
          There are many variations of passages of available but the majority
          have suffered alteration in some form, by injected hum randomised
          words which don't look even slightly.
        </p>

        {/* Features Section */}
        <div className="flex flex-col gap-4 mt-6" id="Features">
          <div className="flex gap-3 items-center">
            <RiCheckboxCircleFill className="text-[#0000ff] text-[20px]" />
            <p className="text-[16px] sm:text-[18px] text-[#313041] font-sans">
              Invest in your simply neighborhood
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <RiCheckboxCircleFill className="text-[#0000ff] text-[20px]" />
            <p className="text-[16px] sm:text-[18px] text-[#313041] font-sans">
              Support people in free text extreme need
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <RiCheckboxCircleFill className="text-[#0000ff] text-[20px]" />
            <p className="text-[16px] sm:text-[18px] text-[#313041] font-sans">
              Largest global industrial business community
            </p>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="flex justify-start mt-10" id="book-button">
          <button
            className="relative inline-block px-6 py-4 bg-[#0000ff] text-white font-semibold text-[12px] sm:text-[14px] hover:bg-blue-600 rounded-lg tracking-widest overflow-hidden group"
            style={{ wordSpacing: "0.1rem" }}
          >
            <span className="absolute inset-0 bg-[#313041] transform scale-y-0 transition-transform duration-700 ease-in-out group-hover:scale-y-100 origin-bottom"></span>
            <span className="relative z-10">BOOK WITH US NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;