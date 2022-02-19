import { FaUser } from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';
import CheckIconMobile from './../../assets/mobile/checkpoint.svg';

function Content() {
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] font-bol flex-col flex items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={22} className="mt-[12px]" />
          <div className="text-26">
            10245
            <p className="text-13 font-semibold mb-[13px]">Customer</p>
          </div>
        </div>
        <div className="gap-8 flex items-start mb-[16px]">
          <BsFillCreditCardFill size={22} className="mt-[12px]" />
          <div className="text-26">
            12045
            <p className="text-13 font-semibold">Cards Issued</p>
          </div>
        </div>
      </div>
      <div className="text-13 flex-col w-[100%] mt-[90px] font-semibold">
        <div className="check-content">
          <img src={CheckIconMobile} alt="check item mobile" />
          <p>Card reports send to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={CheckIconMobile} alt="check item mobile" />
          <p>No external fees</p>
        </div>
        <div className="check-content">
          <img src={CheckIconMobile} alt="check item mobile" />
          <p>Set sepending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
