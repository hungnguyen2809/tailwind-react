import React from 'react';
import Cards from './../../assets/desktop/isocard.svg';

function Slogan() {
  return (
    <section className="relative text-36 my-14 font-extrabold md:my-28 md:grid grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:col-span-1: col-start-2">
        <p>
          Earn <span className="text-purple-300">More</span>
        </p>
        <p className="">Pay Less</p>
        {/* py-[6px] => custom lại css ngay trong luôn */}
        <button className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300 md:text-26 md:px-8 md:py-[8px] text-white">
          Start
        </button>
      </div>
      <div className="mt-[69px] md:absolute md:right-[-5rem]">
        <img src={Cards} alt="Credit Cards" />
      </div>
    </section>
  );
}

export default Slogan;
