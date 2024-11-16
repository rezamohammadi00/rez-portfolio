import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

// import required modules
import { EffectCards } from "swiper/modules";

import people from "../assets/images/people.webp";

const ServicesSection = () => {
  return (
    <div className="flex overflow-hidden flex-col gap-16 justify-center h-screen snap-center">
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

        <button className="w-36 h-12 text-black bg-orange-400 rounded-full">
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
              <p className="px-4 mt-4 text-xs leading-7">
                وب‌سایت شما ویترین کسب‌وکار شماست. با طراحی خلاقانه و کاربرپسند،
                تجربه‌ای منحصر‌به‌فرد برای کاربران شما خلق می‌کنم.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-orange-400 bg-AppBgColor">
            <div>
              <p className="mx-4">توسعه وب‌سایت :</p>
              <p className="px-4 mt-4 text-xs leading-7">
                ایده‌های شما را به یک وب‌سایت حرفه‌ای و قدرتمند تبدیل می‌کنم.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-orange-400 bg-AppBgColor">
            <div>
              <p className="mx-4">توسعه وب و موبایل اپ :</p>
              <p className="px-4 mt-4 text-xs leading-7">
                اپلیکیشن‌هایی با عملکرد بالا برای ارتقای کسب‌وکار و تجربه
                دیجیتال شما می‌سازم.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSection;
