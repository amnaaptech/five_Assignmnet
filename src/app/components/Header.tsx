import Head from 'next/head'
import Link from 'next/link';

// pages/index.js

export default function Home() {
  return (
    <div className="relative w-full">
      <link
        href="https://fonts.googleapis.com/css2?family=Rye&display=swap"
        rel="stylesheet"
      />
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[134px] bg-[#A29875] opacity-100">
      {/* Manzari Text */}
      <div className="absolute mt-5 w-full">
        <h1 className="text-white ml-7   w-full text-[75px] font-[400] leading-[93.75px] text-left font-rye opacity-100">
          MANZZARI
        </h1>
      </div>
      </div>
    </div>
  );
}
