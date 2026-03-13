import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
    const reviews = [
        {
            name: "ফারহানা আহমেদ",
            location: "ঢাকা",
            comment: "ব্যবহারের পর আমার চুল পড়া অনেক কমেছে। গন্ধটা খুব ন্যাচারাল!",
            stars: 5
        },
        {
            name: "তানভীর হোসাইন",
            location: "চট্টগ্রাম",
            comment: "প্যাকেজিংটা খুব সুন্দর। ট্রাভেলের জন্য এটি সেরা সমাধান।",
            stars: 5
        },
        {
            name: "তানিয়া সুলতানা",
            location: "উত্তরা, ঢাকা",
            comment: "১৫ দিন Organicly ব্যবহার করে চুল পড়া কমেছে এবং চুলে দারুণ ন্যাচারাল শাইন এসেছে। এর ভেষজ সুগন্ধ এবং গুণাগুণে আমি সত্যিই অনেক সন্তুষ্ট। দারুণ প্রোডাক্ট!",
            stars: 5
        }
    ];

    return (
        <section className="bg-white py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Title - Responsive sizing */}
                <h2 className="text-[32px] md:text-5xl font-semibold text-[#011910] text-center mb-[40px] leading-tight">
                    গ্রাহকদের মতামত
                </h2>

                {/* Testimonial Cards - Added justify-items-center for mobile alignment */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            // h-[244px] এর বদলে min-h-[244px] এবং w-[364px] এর বদলে w-full max-w-[364px]
                            className="bg-[#E2ECE5] p-6 md:p-8 rounded-[32px] flex flex-col min-h-[244px] w-full max-w-[364px] shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4 md:mb-6">
                                {[...Array(review.stars)].map((_, i) => (
                                    <AiFillStar key={i} className="text-[#FFB84D] text-xl" />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-[#566660] text-[16px] leading-[150%] mb-6 flex-grow italic">
                                "{review.comment}"
                            </p>

                            {/* User Info */}
                            <div className="mt-auto">
                                <h4 className="font-medium text-gray-900 text-[16px] leading-[130%]">
                                    -{review.name}
                                </h4>
                                <p className="text-[#566660] text-sm md:text-base">
                                    {review.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonial;