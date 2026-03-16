import React from 'react';

const Pricing = ({ onOrderClick }) => {
    const packages = [
        {
            id: '1',
            name: "১টি ট্রায়াল প্যাক",
            price: "৪৯৯ টাকা",
            delivery: "সারা বাংলাদেশে ফ্রি ডেলিভারি",
            popular: false
        },
        {
            id: '2',
            name: "২টি বেস্ট সেলার",
            price: "৮৯৯ টাকা",
            delivery: "সারা বাংলাদেশে ফ্রি ডেলিভারি",
            popular: true
        },
        {
            id: '3',
            name: "৩টি ফ্যামিলি প্যাক",
            price: "১২৫০ টাকা",
            delivery: "সারা বাংলাদেশে ফ্রি ডেলিভারি",
            popular: false
        }
    ];

    return (
        <section className="bg-[#E8F0EB] py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[32px] md:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
                    অফার এবং প্যাকেজ
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                    {packages.map((pkg) => (
                        <div 
                            key={pkg.id}
                            className={`relative bg-[#D1E7D8] p-8 md:p-10 rounded-[32px] min-h-[322px] w-full max-w-[364px] flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-xl ${
                                pkg.popular ? 'border-2 border-[#067950] scale-100 md:scale-105 z-10' : 'border border-white/50'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFB84D] text-[#000] text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                                    সবচেয়ে জনপ্রিয়
                                </div>
                            )}

                            <h3 className="text-[20px] md:text-[24px] leading-[120%] text-[#011910] mb-4 font-semibold">
                                {pkg.name}
                            </h3>
                            
                            <div className="text-[36px] md:text-[40px] lg:text-5xl font-black text-[#011910] mb-6">
                                {pkg.price}
                            </div>
                            
                            <p className="text-[#566660] font-normal text-lg md:text-[20px] mb-8 leading-relaxed">
                                {pkg.delivery}
                            </p>

                            <button 
                                onClick={() => onOrderClick(pkg.id)}
                                className="bg-[#067E51] text-white px-10 py-3 rounded-full font-semibold text-[16px] hover:bg-[#056342] transition-colors w-full sm:w-auto mt-auto active:scale-95"
                            >
                                অর্ডার করুন
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;