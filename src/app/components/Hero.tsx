import Image from 'next/image'; // Importing Next.js Image component for optimized image loading
import Link from 'next/link';

import React from 'react'

const Hero = () => {
  return (
    // parent div 
    <div className='flex mb-10 '>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400;700&display=swap"
      />

      <div className="w-[1486px] h-[960.57px] top-[120px] left-[57px]">
        <div className="flex flex-col justify-start w-[50%]">
          {/* Heading */}
          <div className="w-[496px] h-[189px] mt-[316px] ml-[176px]">
            <h1 className="font-[LibreBodoni] text-[40px] font-bold leading-[65.8px] tracking-[0.025em] text-left underline decoration-solid decoration-transparent">
              IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
          </div>
          {/* para */}
          <div className="w-[902px] h-[147px] ml-[176px] mt-7 gap-2 opacity-100">
            <p className="font-[Libre_Bodoni] text-[30px]  font-libre  leading-[49.35px] tracking-[0.025em]   decoration-none text-[#787054]">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
          </div>
          {/* BUTTON */}
          <div>
            <button
              className="w-[288px] h-[58px] absolute top-[730px] left-[176px] p-[10px_0_0_0] gap-1 rounded-[10px] opacity-100 bg-[#A29875] flex items-center justify-center">
              <h6 className="font-libre text-[30px] leading-[37.5px] text-center  text-white bg-[#A29875]">
                Explore now
              </h6>
            </button>
          </div>
        </div>
      </div>
      {/* right Side Content */}
      <div className="flex mt-48 mr-5">
        <div className="w-[490px] h-[667px] rounded-tl-[150px] rounded-br-[150px] relative">
          <div className="w-[462px] h-[647px] relative">
            {/* Image wrapper with border applied */}
            <div className="absolute top-[28px] left-[24px] w-[442px] h-[611px] border-[1px] border-solid border-white rounded-tl-[150px] rounded-br-[150px] overflow-hidden">
              {/* Image inside wrapper */}
              <Image
                src="/images/img.png"
                alt="image"
                width={442}
                height={611}
                layout="intrinsic"
                className="w-full h-full object-cover"
              />
              <div className='absolute buttom-0 left-7 right-6 top-9 max-5 my-auto h-max flex-1 rounded-br-[128px] rounded-tl-[120px] border-[1px]  boader-solid boader-white-a700 lg:mx-0 md:max-0'>
                <div className='h-[524px] rounded-br-[128px] rounded-tl-[120px] border-[1px]  boader-solid boader-white-a700'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;

