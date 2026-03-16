import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import Hero2 from '../assets/Rectangle 3.svg';
import Hero3 from '../assets/Rectangle 4.svg';
import Hero4 from '../assets/Rectangle 5.svg';

const HeroSection = () => {
    const sliderImages = [Hero2, Hero3, Hero4];

    return (
        <section className="bg-[#067950] min-h-[700px] flex items-center px-6 py-12 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">

                {/* Left Content */}
                <div className="text-white order-2 md:order-1 text-center md:text-left flex flex-col justify-center">
                    <h1 className="text[50px] md:text-5xl font-samibold leading-[1.1] md:leading-[1.2] mb-6">
                        রাসায়নিকমুক্ত চুলে ফিরে <br />
                        পান <span className="text-[#FFB84D]">প্রকৃতির সতেজতা!</span>
                    </h1>

                    <p className="text[#FFFFFF] text[16px] md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed md:leading-8 mb-8 opacity-80">
                        শ্যাম্পু নয়, ব্যবহার করুন Organicly হার্বাল শ্যাম্পু বার। <br className="hidden md:block" />
                        চুল পড়া বন্ধ হবে এবং চুল হবে আরও ঘন ও সিল্কি!
                    </p>

                    <button
                        onClick={() => {
                            const element = document.getElementById('checkout-section');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="bg-[#FFB84D] text-black px-5 py-2 rounded-full text-[16px] hover:bg-[#ffa726] transition-all w-[181px] h-[47px] transform hover:scale-105 shadow-xl font-bold"
                    >
                        এখনই অর্ডার করুন
                    </button>
                </div>

                {/* Right Content */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end items-center relative w-full p-4 overflow-visible">

                    {/* Slider Container */}
                    <div className="w-[300px] h-[240px] sm:w-[400px] sm:h-[320px] lg:w-[500px] lg:h-[380px]">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            cardsEffect={{
                                slideShadows: true,
                                rotate: true,
                                perSlideOffset: 10,
                                perSlideRotate: 4,
                            }}
                            modules={[EffectCards, Autoplay]}
                            className="mySwiper w-full h-full"
                        >
                            {sliderImages.map((img, index) => (
                                <SwiperSlide key={index} className="rounded-[40px] shadow-2xl overflow-hidden bg-white">
                                    <img
                                        src={img}
                                        alt={`Product ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;