import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai'; 

const Problem = () => {
    const problems = [
        "অতিরিক্ত কেমিক্যাল যা চুলের গোড়া দুর্বল করে",
        "প্লাস্টিক বোতল যা পরিবেশের ক্ষতি করে",
        "টাকা খরচ হয় বেশি, কিন্তু কাজ হয় কম"
    ];

    return (
        <section className="bg-white mt-[40px] md:mt-[80px] py-12 md:py-16 px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* Section Title - Responsive Font Size */}
                <h2 className="text-[28px] sm:text-[34px] md:text-5xl font-bold text-gray-900 mb-8 md:mb-10 leading-[130%] md:leading-[150%]">
                    আপনার লিকুইড শ্যাম্পু কি <br className="hidden sm:block" /> 
                    চুলের ক্ষতি করছে?
                </h2>

                {/* Problems List */}
                <div className="flex flex-col gap-4 items-center w-full">
                    {problems.map((text, index) => (
                        <div 
                            key={index} 
                            className="flex items-center gap-[15px] md:gap-[20px] bg-[#067E511A] text-[#1D1D1D] px-5 md:px-6 py-4 rounded-2xl w-full max-w-[500px] min-h-[60px] shadow-sm hover:shadow-md transition-shadow"
                        >
                            <AiFillInfoCircle className="text-xl md:text-2xl text-[#067E51] flex-shrink-0" />
                            <p className="text-base md:text-xl font-medium text-left">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Problem;