import React from "react";
import Image from "next/image";
import { Header } from "@/components/Constants/genuine-parts/genuineParts_data.json";

const Page1 = () => {
  return (
    <>
      <div className="mt-14 font-poppins font-regular">
        <div className="w-full bg-white lg:h-[15rem] h-[12rem] flex items-center relative overflow-hidden">
          <div>
            <h1 className="font-semibold lg:text-5xl text-xl lg:pl-10 pl-4">
              <span className="text-[#483d73] block">
                {Header.title.split(" ").slice(0, -2).join(" ")}
              </span>{" "}
              <span className="text-black">
                {Header.title.split(" ").slice(-2).join(" ")}
              </span>
            </h1> 
            <p className="lg:pl-10 pl-4 text-black lg:text-lg text-sm lg:mt-8 mt-2 lg:w-[80%] w-[60%]">
              {Header.description}
            </p>
          </div>
          <div className="absolute lg:right-2 -right-8 lg:w-[20rem] w-[12rem]">
          <Image
            src={Header.toolBoxImg}
            alt={"Parts"}
            width={400}
            height={400}
            priority
          />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:py-16 py-8">
            <h2 className="lg:text-3xl text-xl font-medium lg:mb-8 lg:w-full w-[12rem] text-center">{Header.diverseMachines}</h2>
            <p className="lg:text-sm text-xs lg:w-[60%] w-[80%] text-center lg:block hidden">{Header.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default Page1;
