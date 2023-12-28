import React from "react";
import Button from "../Button";
import CounterItem from "../CounterItem";
import model from "@/assets/images/model.png";
import Image from "next/image";
import hero_background from "@/assets/images/hero_section_image_background.svg";
export default function HeroSection() {
  return (
    <div className="bg-[#060334] relative bg-[linear-gradient(155deg,#060334_55%,#CD63FF_100%)] self-stretch flex w-full flex-col items-stretch pl-20 pr-16 py-11 max-md:max-w-full max-md:px-5">
      <Image
        alt="herobackground art"
        src={hero_background}
        className="absolute bottom-0 right-0"
      />
      <div className="ml-3.5 mb-1.5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-white text-6xl font-semibold font-clash leading-[68px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Empowering Trades with Our Capital 🔥
              </div>
              <div className="text-white text-lg font-jakarta leading-7 self-stretch mt-5 max-md:max-w-full">
                Global Reach, Local Support: Funding Your Trading Dreams Up to
                $300,000
              </div>
              <br />
              <Button text="Get up to $300,000 funds 🙌" />

              <div className="items-center self-stretch flex justify-between gap-5 mt-28 px-px max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <CounterItem
                  countValue={"195+"}
                  countText={"Countries\nCovered"}
                />
                <CounterItem countValue={"$51M+"} countText={"Total \n Payout"} />
                <CounterItem
                  countValue={"$51k+"}
                  countText={"Funded \n Traders"}
                  isLast={true}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                  <div className="justify-center items-stretch flex grow flex-col w-full rounded-3xl max-md:max-w-full">
                    <Image
                      src={model}
                      alt="model"
                      className="object-contain object-center w-full h-full overflow-hidden max-md:max-w-full bg-transparent z-10"
                      blurDataURL="data:..."
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
