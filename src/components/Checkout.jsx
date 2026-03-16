import React from 'react';

const Checkout = ({ selectedPackage, setSelectedPackage }) => {
    return (
        <section id="checkout-section" className="bg-white py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-[40px] lg:text-5xl font-bold text-[#011910] mb-4 leading-tight">
                    আপনার তথ্য দিয়ে অর্ডার নিশ্চিত করুন
                </h2>
                <p className="text-[#566660] text-lg md:text-[20px] mb-8 md:mb-12">
                    ক্যাশ অন ডেলিভারি - পণ্য হাতে পেলেই <br className="hidden sm:block" /> পেমেন্ট করুন
                </p>

                <div className="bg-[#E2ECE5] rounded-[30px] md:rounded-[40px] p-6 md:p-12 text-left shadow-sm">
                    <form onSubmit={(e) => e.preventDefault()}>
                        
                        <div className="mb-8 md:mb-10">
                            <h3 className="text-lg md:text-[20px] font-semibold text-[#011910] mb-6">
                                প্যাকেজ সিলেক্ট করুন
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { id: '1', label: '১টি ট্রায়াল প্যাক – টাকা ৪৯৯' },
                                    { id: '2', label: '২টি বেস্ট সেলার – টাকা ৮৯৯' },
                                    { id: '3', label: '৩টি ফ্যামিলি প্যাক – টাকা ১২৫০' }
                                ].map((pkg) => (
                                    <label 
                                        key={pkg.id}
                                        className={`flex items-center gap-3 p-4 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                                            selectedPackage === pkg.id 
                                            ? 'border-[#067E51] bg-[#067E511F]' 
                                            : 'border-[#067E5133] bg-transparent hover:border-[#067E5166]'
                                        }`}
                                    >
                                        <input 
                                            type="radio" 
                                            name="package" 
                                            className="accent-[#067950] w-5 h-5"
                                            checked={selectedPackage === pkg.id}
                                            onChange={() => setSelectedPackage(pkg.id)}
                                        />
                                        <span className="text-sm md:text-base font-normal text-[#011910]">
                                            {pkg.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Input Fields Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8 md:mb-10">
                            {[
                                { label: 'কাস্টমারের নাম', placeholder: 'আপনার নাম লিখুন...', type: 'text' },
                                { label: 'মোবাইল নম্বর', placeholder: '01XXXXXXXXX', type: 'text' },
                                { label: 'জিমেইল', placeholder: 'আপনার জিমেইল দিন...', type: 'email' },
                                { label: 'ঠিকানা', placeholder: 'জেলা এবং সম্পূর্ণ ঠিকানা লিখুন...', type: 'text' }
                            ].map((field, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <label className="text-sm md:text-[16px] font-medium text-[#011910]">
                                        {field.label}
                                    </label>
                                    <input 
                                        type={field.type} 
                                        placeholder={field.placeholder} 
                                        required
                                        className="w-full p-4 rounded-xl border-none ring-1 ring-[#067E5133] focus:ring-2 focus:ring-[#067950] outline-none transition-shadow bg-white/50"
                                    />
                                </div>
                            ))}
                        </div>

                        <button className="w-full text-base md:text-lg bg-[#067E51] text-white py-4 md:py-5 rounded-full font-bold hover:bg-[#056342] transition-all shadow-lg active:scale-[0.98]">
                            অর্ডার নিশ্চিত করুন
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;