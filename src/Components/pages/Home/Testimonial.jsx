import React from "react";

const Testimonial = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-44 p-14 rounded-md font-primary  bg-slate-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <h1 className="uppercase font-bold text-3xl">801M</h1>
          <p className="text-gray-500 text-center uppercase text-sm">cars for sale</p>
        </div>
        <div className="text-center">
          <h1 className="uppercase font-bold text-3xl">801M</h1>
          <p className="text-gray-500 text-center uppercase text-sm">DEALER REVIEWS</p>
        </div>
        <div className="text-center">
          <h1 className="uppercase font-bold text-3xl">801M</h1>
          <p className="text-gray-500 text-center uppercase text-sm">VISITORS PER DAY</p>
        </div>
        <div className="text-center">
          <h1 className="uppercase font-bold text-3xl">801M</h1>
          <p className="text-gray-500 text-center uppercase text-sm">VERIFIED DEALERS</p>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
