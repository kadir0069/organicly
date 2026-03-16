import React from 'react';
import { GiLeafSwirl } from 'react-icons/gi';
import { MdOutlineDoNotDisturbAlt } from 'react-icons/md';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { FaPlaneDeparture } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: <GiLeafSwirl className="text-green-600 text-[20px] leading-[130%]" />,
            title: "Cacumen Biotae সমৃদ্ধ",
            desc: "যা চুলের ফলিকলকে উদ্দীপ্ত করে নতুন চুল গজাতে সাহায্য করে"
        },
        {
            icon: <MdOutlineDoNotDisturbAlt className="text-red-500 text-[20px] leading-[130%]" />,
            title: "প্যারাবেন ও সালফেট মুক্ত",
            desc: "এতে কোনো হার্শ কেমিক্যাল নেই, তাই প্রতিদিন ব্যবহারযোগ্য"
        },
        {
            icon: <HiOutlineSparkles className="text-yellow-500 text-[20px] leading-[130%]" />,
            title: "দীপ্তিময় চুল",
            desc: "প্রথম ব্যবহার থেকেই চুল হবে রেশমের মতো কোমল এবং উজ্জ্বল"
        },
        {
            icon: <FaPlaneDeparture className="text-blue-500 text-[20px] leading-[130%]" />,
            title: "ট্রাভেল ফ্রেন্ডলি",
            desc: "লিক করার ভয় নেই, ব্যাগে নিয়ে যেকোনো জায়গায় যাওয়া সহজ"
        }
    ];

    return (
        <section id="benefits-section" className="bg-[#E2ECE5] py-12 md:py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Section Title */}
                <h2 className="text-[32px] md:text-5xl font-semibold text-gray-900 mb-10 md:mb-12 leading-tight">
                    কেন Organicly শ্যাম্পু <br className="hidden sm:block" /> বার সেরা?
                </h2>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {features.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-[#D2E7D8] backdrop-blur-sm p-6 rounded-[32px] w-full max-w-[267px] min-h-[174px] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* Icon Container */}
                            <div className="mb-4">
                                {item.icon}
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                                {item.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;