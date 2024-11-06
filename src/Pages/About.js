import React from "react";
import happyMunamii from "../Images/happy_munamii.jpeg";
import cupWed from "../Images/cupcake_wedding.webp";
import munamiiCake from "../Images/munamii_cake.jpeg";
import { Helmet } from "react-helmet";

function About() {
 
  return (
    <>
      <Helmet>
        <title>Munamii Cakery - About us</title>
      </Helmet>
      ;
      <div>
        {/* Header */}
        <header>
          <div className="relative isolate overflow-hidden bg-darkbrown py-24 sm:py-32">
            <img
              alt="Munamii eats cupcakes and smiles."
              src={happyMunamii}
              className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center brightness-50 backdrop-sepia"
            />
            <div
              aria-hidden="true"
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#30ab95] to-[#115f51] opacity-20"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#30ab95] to-[#115f51] opacity-20"
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="text-white ">About Munamii Cakery</h1>
                <p className="mt-8 text-lg font-medium text-white sm:text-xl">
                  Welcome to Munamii Cakery, where we create delightful and
                  whimsical cupcakes and exquisite, romantic wedding cakes. Our
                  passion is to bring joy and sweetness to your special moments.
                </p>
              </div>
            </div>
          </div>
        </header>
        {/* Content part */}
        <div className="relative isolate overflow-hidden bg-white px-6 py-6 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden"></div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <h2 className="mt-2  tracking-tight text-darkbrown ">
                    Our Story
                  </h2>
                  <p className="mt-6 text-xl leading-8 text-darkbrown">
                    Munamii Cakery started as a small Instagram shop, sharing
                    our love for baking with the world. Our founder, Munamii,
                    has always had a passion for creating beautiful and
                    delicious treats. From cute and creative cupcakes to
                    luxurious and romantic wedding cakes, every creation is made
                    with love and attention to detail.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12  lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt="Munamii and her own strawberry wedding cake"
                src={munamiiCake}
                className="w-[24rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem]"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-darkbrown lg:max-w-lg">
                  <p>
                    At Munamii Cakery, we believe that every celebration
                    deserves a touch of sweetness. Our cupcakes are perfect for
                    birthdays, parties, and everyday indulgence, while our
                    wedding cakes add a magical touch to your special day.
                  </p>
                  <p className="mt-8">
                    We take pride in using high-quality ingredients and crafting
                    each cake and cupcake with care. Our goal is to create not
                    just a dessert, but a memorable experience for you and your
                    loved ones.
                  </p>
                  <h2 className="mt-16  tracking-tight text-darkbrown">
                    Join Us on Our Sweet Journey
                  </h2>
                  <p className="mt-6">
                    Follow us on Instagram to see our latest creations and get
                    inspired for your next event. We look forward to bringing a
                    little bit of sweetness into your life!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
