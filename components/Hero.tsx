
import React from 'react';
import { ArrowRight, Rocket, Sparkles, Globe, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    // Internal data for icons representing key benefits mentioned in the description
    const benefits = [
        {
            icon: Globe,
            title: t('ben_remote'),
            subtitle: "Remote"
        },
        {
            icon: Clock,
            title: t('ben_flex'),
            subtitle: "Flexible"
        },
        {
            icon: DollarSign,
            title: t('ben_earn'),
            subtitle: "Income"
        }
    ];

    return (
        <div className="relative bg-white overflow-hidden pt-16">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8">
                    <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-upwork-green text-sm font-medium mb-6 border border-green-100">
                                <span className="flex h-2 w-2 relative mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                {t('hero_tag')}
                            </div>

                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                                <span className="block xl:inline">{t('hero_title_1')}</span>{' '}
                                <span className="block text-upwork-green xl:inline">{t('hero_title_2')}</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 mb-8">
                                {t('hero_desc')}
                            </p>

                            {/* Internal Data Icons Section */}
                            <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-gray-100 py-6 sm:max-w-xl sm:mx-auto lg:mx-0">
                                {benefits.map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                                        <div className="p-2 bg-gray-50 rounded-lg text-gray-600 group-hover:text-upwork-green group-hover:bg-green-50 transition-colors mb-2">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <span className="text-sm font-bold text-gray-900">{item.title}</span>
                                        <span className="text-xs text-gray-500">{item.subtitle}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                                <div className="rounded-md shadow">
                                    <a
                                        href="#what-is-upwork"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-upwork-green hover:bg-upwork-hover md:py-4 md:text-lg transition-all hover:shadow-lg"
                                    >
                                        <Rocket className="mr-2 h-5 w-5" />
                                        {t('hero_btn_start')}
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0">
                                    <a
                                        href="#proposal-tool"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-upwork-green bg-green-50 hover:bg-green-100 md:py-4 md:text-lg transition-all"
                                    >
                                        <Sparkles className="mr-2 h-5 w-5 text-yellow-500" />
                                        {t('hero_btn_ai')}
                                        <ArrowRight className="ml-2 h-5 w-5 opacity-60" />
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
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:via-white/10"></div>
            </div>
        </div>
    );
};

export default Hero;
