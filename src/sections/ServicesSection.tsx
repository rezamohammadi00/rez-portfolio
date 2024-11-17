import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import people from "../assets/images/people.webp";
import SCROLL from "../assets/images/scroll.png";

const ServicesSection = () => {
  return (
    <div className="flex overflow-hidden relative flex-col gap-16 justify-center h-screen snap-center" id="sevices">
      <div className="flex flex-col gap-4 justify-center items-center">
        <img
          src={people}
          alt="people"
          className="object-cover w-48 h-12 rounded-full"
        />
        <h2 className="text-2xl font-bold leading-8 text-center">
          ایدهای <span className="text-orange-400">یونیک</span>
          <br /> برای کسب کارشما
        </h2>

        <button className="w-36 h-12 text-black bg-orange-400 rounded-full font-regular">
          کارما؟
        </button>
      </div>
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide className="border-2 border-orange-400 bg-AppBgColor">
            <div>
              <p className="mx-4">طراحی وب‌سایت :</p>
              <p className="px-4 mt-4 text-xs leading-7 text-AppTextColor">
                وب‌سایت شما ویترین کسب‌وکار شماست. با طراحی خلاقانه و کاربرپسند،
                تجربه‌ای منحصر‌به‌فرد برای کاربران شما خلق می‌کنم.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-orange-400 bg-AppBgColor">
            <div>
              <p className="mx-4">توسعه وب‌سایت :</p>
              <p className="px-4 mt-4 text-xs leading-7 text-AppTextColor">
                ایده‌های شما را به یک وب‌سایت حرفه‌ای و قدرتمند تبدیل می‌کنم.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-orange-400 bg-AppBgColor">
            <div>
              <p className="mx-4">توسعه وب و موبایل اپ :</p>
              <p className="px-4 mt-4 text-xs leading-7 text-AppTextColor">
                اپلیکیشن‌هایی با عملکرد بالا برای ارتقای کسب‌وکار و تجربه
                دیجیتال شما می‌سازم.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <motion.a
          href="#parallax2"
          className="absolute right-10 bottom-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={SCROLL} alt="scroll" className="w-10" />
        </motion.a>
    </div>
  );
};

export default ServicesSection;
