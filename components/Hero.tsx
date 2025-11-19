import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-white overflow-hidden pt-16">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8">
                    <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">የኦንላይን ስራ እድሎችን</span>{' '}
                                <span className="block text-upwork-green xl:inline">በ Upwork ያግኙ</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                በኢንተርኔት አማካኝነት ከየትኛውም የዓለም ክፍል ሆነው፣ በራስዎ ጊዜና ፍላጎት እየሰሩ ገቢ (Income) የሚያገኙበት ዓለም አቀፍ መድረክ።
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                        href="#what-is-upwork"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-upwork-green hover:bg-upwork-hover md:py-4 md:text-lg"
                                    >
                                        እንጀምር
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href="#proposal-tool"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-upwork-green bg-green-100 hover:bg-green-200 md:py-4 md:text-lg"
                                    >
                                        AI እገዛ <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
                    src="https://picsum.photos/800/600?random=1"
                    alt="Freelancer working remotely"
                />
            </div>
        </div>
    );
};

export default Hero;