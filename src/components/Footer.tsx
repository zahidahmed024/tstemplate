import React from "react";
import Button from "./Button";
import ic_discord from "@/assets/icons/discord.png";
import ic_twitter from "@/assets/icons/twitter.png";
import ic_facebook from "@/assets/icons/facebook.png";
import ic_linkdin from "@/assets/icons/linkdin.png";
import ic_sms from "@/assets/icons/sms.png";
import ic_call from "@/assets/icons/call.png";
import Image from "next/image";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="items-stretch bg-[#060334] self-stretch flex w-full flex-col mt-5 px-20 py-12 max-md:max-w-full max-md:px-5">
      <div className="border-b-[color:var(--Gray-600,#475467)] flex justify-between gap-5 mt-3.5 mx-8 pb-12 border-b border-solid items-center max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
        <div className="text-white text-5xl font-semibold leading-[65px] tracking-wider grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
          Join the Global Community for the Traders ✌️
        </div>
        <Button text="Join our Discord" rightIcon={ic_discord} />
      </div>
      <div className="mt-16 mx-8 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:mt-10">
              <div className="text-gray-200 text-base font-jakarta leading-6">
                Empowering global traders with unrivalled financial support.
                Navigate markets confidently with our innovative funding models
                and expert guidance.
              </div>{" "}
              <div className="items-start flex justify-between gap-5 mt-8 pr-20 max-md:pr-5">
                <Image
                  alt="twitter"
                  src={ic_twitter}
                  className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
                <Image
                  alt="linkdin"
                  src={ic_linkdin}
                  className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
                <Image
                  alt="facebook"
                  src={ic_facebook}
                  className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
                <Image
                  alt="discord"
                  src={ic_discord}
                  className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-8">
                    <div className="text-white text-lg font-jakarta font-extrabold leading-5 whitespace-nowrap">
                      Important Link
                    </div>{" "}
                    <div className="text-gray-200 text-base font-jakarta font-medium leading-6 mt-4">
                      Overview
                    </div>{" "}
                    <div className="text-gray-200 text-base font-jakarta font-medium leading-6 mt-3">
                      Affiliate Partner
                    </div>{" "}
                    <div className="text-gray-200 text-base font-jakarta font-medium leading-6 mt-3">
                      Payment Partner
                    </div>{" "}
                    <div className="text-gray-200 text-base font-jakarta font-medium leading-6 mt-3">
                      Success Stories
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col pb-7 max-md:mt-8">
                    <div className="text-white text-lg font-extrabold font-jakarta leading-5 whitespace-nowrap">
                      Models
                    </div>{" "}
                    <div className="text-gray-200 text-base font-medium font-jakarta leading-6 mt-4 max-md:mr-1">
                      Express
                    </div>{" "}
                    <div className="text-gray-200 text-base font-medium font-jakarta leading-6 mt-3 max-md:mr-1">
                      Evaluation{" "}
                    </div>{" "}
                    <div className="items-stretch flex justify-between gap-2 mt-3 max-md:mr-1">
                      <div className="text-gray-200 text-base font-medium font-jakarta leading-6 grow whitespace-nowrap">
                        Stellar Challenge
                      </div>{" "}
                      <div className="text-white text-center text-xs font-medium font-jakarta leading-5 whitespace-nowrap items-stretch border bg-white bg-opacity-10 aspect-[1.9090909090909092] justify-center px-2 py-0.5 rounded-2xl border-solid border-white border-opacity-30 self-start">
                        New
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start flex flex-col max-md:mt-8">
                    <div className="self-stretch text-white text-lg font-extrabold font-jakarta leading-5 whitespace-nowrap">
                      Contact Information
                    </div>{" "}
                    <div className="items-center flex gap-2 mt-4 self-start">
                      <Image
                        alt="sms"
                        src={ic_sms}
                        className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                      />

                      <div className="text-gray-200 text-base font-medium font-jakarta leading-6 self-stretch grow whitespace-nowrap">
                        info@wearenext.com
                      </div>
                    </div>{" "}
                    <div className="items-center flex gap-2 mt-3 self-start">
                      <Image
                        alt="sms"
                        src={ic_call}
                        className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-gray-200 text-base font-jakarta font-medium leading-6">
                        +986 8989 899
                      </div>
                    </div>{" "}
                    <div className="items-center flex gap-2 mt-3 self-start">
                      <Image
                        alt="sms"
                        src={ic_call}
                        className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-gray-200 text-base font-jakarta font-medium leading-6">
                        +986 8989 899
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="items-stretch border-t-[color:var(--Gray-600,#475467)] flex justify-between gap-5 mt-16 pt-8 border-t border-solid max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="text-gray-300 text-base font-jakarta leading-6 grow max-md:max-w-full">
          © 2023 alll rights reserved.
        </div>{" "}
        <div className="items-stretch flex gap-5">
          <div className="text-gray-200 text-base font-medium font-jakarta leading-6 grow whitespace-nowrap">
            Cookie Policy
          </div>{" "}
          <div className="text-gray-200 text-base font-medium font-jakarta leading-6">
            Privacy Policy
          </div>{" "}
          <div className="text-gray-200 text-base font-medium font-jakarta leading-6 grow whitespace-nowrap">
            Terms & Conditions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
