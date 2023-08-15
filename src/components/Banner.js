import React from "react";

// import image
import Image from "../assets/img/house-banner.png";

// import components
import Search from "./Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span>your dream house with
            us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Anim Lorem mollit irure laborum nisi eu ullamco enim. Est dolore sit
            qui aliquip esse proident duis. Excepteur pariatur aute ex tempor
            laborum et sunt cupidatat culpa laboris.
          </p>
        </div>
        {/* image  */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
