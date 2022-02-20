import { FaUser } from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { useSpring, animated } from 'react-spring';
import CheckIconMobile from './../../assets/mobile/checkpoint.svg';

function Content() {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  const card = useSpring({ cards: 12045, from: { cards: 0 } });

  return (
    <section className="md:flex md:flex-row">
      <div className="ml-[70px] mr-[54px] font-bol flex-col flex items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px] md:w-[20%]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={22} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>{customer.customers.to((value) => Math.floor(value))}</animated.div>
            <p className="text-13 font-semibold mb-[13px] md:text-16">Customer</p>
          </div>
        </div>
        <div className="gap-8 flex items-start mb-[16px]">
          <BsFillCreditCardFill size={22} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>{card.cards.to((vl) => Math.floor(vl))}</animated.div>
            <p className="text-13 font-semibold md:text-16">Cards Issued</p>
          </div>
        </div>
      </div>
      <div className="text-13 flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:text-16 md:ml-[20%] md:mt-0">
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
