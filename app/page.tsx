"use client";

import Navbar from "./components/Navbar/Navbar";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";
import ScrollCarousel from "scroll-carousel-react";

export default function Home() {
  const Texts = [
    "organize,",
    "join,",
    "network,",
    "collaborate",
    "organize,",
    "join,",
    "network,",
    "collaborate",
    "join,",
    "network,",
  ];
  return (
    <section className="w-full h-full">
      <Navbar />

      <br />

      <section className="container mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:p-8 p-2">
            <section className="w-full flex items-end justify-end transform md:-translate-x-28">
              <svg
                width="28"
                height="32"
                viewBox="0 0 28 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M10.7147 0.0390886C10.8207 0.0399886 10.9288 0.0567968 11.0246 0.090097C11.2206 0.15302 11.3762 0.275433 11.4608 0.427144C11.5445 0.5789 11.5485 0.749941 11.4739 0.906197C11.4739 0.906197 11.3427 1.82784 10.9098 3.33654C9.51406 8.22035 7.20224 12.9216 4.05129 17.2927L2.70144 19C2.66594 19.0781 2.60961 19.151 2.53281 19.2117C2.45961 19.2729 2.37306 19.3216 2.27297 19.3551C2.17382 19.3892 2.06907 19.4069 1.95876 19.409C1.85269 19.4081 1.74461 19.3913 1.64874 19.358C0.34737 18.966 2.71644 12.9373 3.18141 11.8845C3.94008 10.1306 5.78317 6.37776 6.84277 4.72314C7.78923 3.25861 8.83618 1.82991 9.97195 0.448038C10.0074 0.37 10.0638 0.297167 10.1406 0.23646C10.2138 0.17524 10.3003 0.126527 10.4004 0.0930681C10.4996 0.0596537 10.6052 0.0411304 10.7147 0.0390886Z"
                  fill="#E51E56"
                />
                <path
                  d="M27.8095 26.6942C27.8286 26.7825 27.8295 26.8755 27.8091 26.9615C27.7732 27.1362 27.6607 27.2888 27.5008 27.3879C27.3406 27.4862 27.143 27.5219 26.9476 27.4896C26.9476 27.4896 25.8536 27.5552 24.0214 27.4814C18.0916 27.2471 12.1999 26.2169 6.53209 24.4268L4.29571 23.6285C4.19846 23.6138 4.10323 23.5808 4.01825 23.5285C3.93336 23.4793 3.86045 23.4166 3.80266 23.3397C3.74431 23.2638 3.70388 23.1801 3.68055 23.0888C3.66149 23.0005 3.6605 22.9075 3.68096 22.8215C3.88902 21.6656 11.3314 22.4918 12.6408 22.6787C14.8191 22.9768 19.5218 23.7972 21.642 24.3642C23.5203 24.8732 25.3761 25.4725 27.1943 26.1545C27.2916 26.1692 27.3868 26.2022 27.4717 26.2545C27.5566 26.3037 27.6295 26.3664 27.6873 26.4433C27.7449 26.5194 27.7864 26.6036 27.8095 26.6942Z"
                  fill="#E51E56"
                />
                <path
                  d="M24.6198 9.88184C24.7049 9.9355 24.7804 10.003 24.8347 10.0777C24.9491 10.2263 24.9896 10.4029 24.9522 10.5676C24.9141 10.732 24.7982 10.8721 24.6292 10.9611C24.6292 10.9611 23.8813 11.6401 22.4807 12.6427C17.9518 15.891 12.81 18.5347 7.22037 20.4931L4.94088 21.1986C4.85786 21.2439 4.76159 21.2747 4.65727 21.2854C4.55551 21.2983 4.45167 21.2945 4.34752 21.2716C4.24367 21.2496 4.14671 21.2117 4.05616 21.1583C3.97111 21.1047 3.89552 21.0372 3.84127 20.9624C3.06314 19.9964 9.17575 16.309 10.2846 15.6906C12.119 14.6526 16.2216 12.541 18.2299 11.7332C20.0144 11.0225 21.8552 10.391 23.7351 9.84155C23.8181 9.79623 23.9143 9.76551 24.0187 9.7548C24.1204 9.74188 24.2243 9.74572 24.3284 9.76864C24.4318 9.79115 24.53 9.82889 24.6198 9.88184Z"
                  fill="#E51E56"
                />
              </svg>
            </section>

            <h1 className="font-bold md:text-4xl text-3xl capitalize my-3">
              Discover exciting events near you
            </h1>

            <Text className="text-justify">
              Join our dynamic community to stay updated on the best local
              events. Connect, stay informed, and engage with the vibrant pulse
              of your area. Be part of the action and never miss out on the
              excitement happening near you!
            </Text>
            <br />
            <br />
            <Button className="w-40">Get started</Button>
          </div>
          <div className="block p-2 my-2">
            <img
              src="/assets/event-image.png"
              alt="Hero Event Image"
              className="object-cover w-full h-full rounded"
            />
          </div>
        </section>
        <ScrollCarousel
          autoplay
          autoplaySpeed={8}
          speed={7}
          onReady={() => console.log("I love C#")}
          className="carousel carousel-start my-5 bg-primary p-2"
        >
          {Texts.map((item) => (
            <div key={item} className="carousel-item w-full h-full p-0 m-0">
              <h1 className="font-bold text-2xl uppercase text-white">
                {item}
              </h1>
            </div>
          ))}
        </ScrollCarousel>
      </section>
    </section>
  );
}
