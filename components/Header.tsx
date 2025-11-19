
import React, { useState } from 'react';
import { Menu, X, Globe, Share2, RefreshCcw, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navItems = [
        { name: t('nav_home'), href: '#what-is-upwork' },
        { name: t('nav_jobs'), href: '#categories' },
        { name: 'Mastery Resources', href: '#resources' }, 
        { name: t('nav_start'), href: '#how-to-start' },
        { name: t('nav_calc'), href: '#earnings' },
        { name: t('nav_proposal'), href: '#proposal-tool' },
        { name: t('nav_contact'), href: '#contact' },
    ];

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Upwork Profile Mastery',
                    text: 'Learn how to succeed on Upwork with this comprehensive guide!',
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'am' : 'en');
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <a href="#" className="flex items-center">
                        <Globe className="h-8 w-8 text-upwork-green" />
                        <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">Upwork Profile <span className="text-upwork-green">Mastery</span></span>
                        <span className="ml-2 text-xl font-bold text-gray-900 sm:hidden">Upwork <span className="text-upwork-green">Mastery</span></span>
                    </a>
                    
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-upwork-green transition-colors whitespace-nowrap"
                            >
                                {item.name}
                            </a>
                        ))}
                        
                        <div className="h-6 w-px bg-gray-200 mx-2"></div>

                        <button 
                            onClick={handleRefresh}
                            className="p-2 text-gray-600 hover:text-upwork-green hover:bg-gray-100 rounded-full transition-colors"
                            title="Refresh Page"
                        >
                            <RefreshCcw className="h-5 w-5" />
                        </button>

                        <button 
                            onClick={toggleLanguage}
                            className="flex items-center px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold transition-colors"
                            title="Switch Language"
                        >
                            <Languages className="h-4 w-4 mr-1.5" />
                            {language === 'en' ? 'Amharic' : 'English'}
                        </button>

                        <button 
                            onClick={handleShare}
                            className="p-2 text-gray-600 hover:text-upwork-green hover:bg-gray-100 rounded-full transition-colors"
                            title="Share Website"
                        >
                            <Share2 className="h-5 w-5" />
                        </button>
                        <a href="https://www.upwork.com" target="_blank" rel="noreferrer" className="bg-upwork-green text-white px-4 py-2 rounded-full font-bold hover:bg-upwork-hover transition shadow-md hover:shadow-lg">
                            {t('nav_register')}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden space-x-2">
                        <button 
                            onClick={handleRefresh}
                            className="p-2 text-gray-600 hover:text-upwork-green"
                        >
                            <RefreshCcw className="h-5 w-5" />
                        </button>
                        <button 
                            onClick={toggleLanguage}
                            className="p-2 text-gray-600 hover:text-upwork-green font-bold text-sm border border-gray-200 rounded-md"
                        >
                            {language === 'en' ? 'AM' : 'EN'}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-upwork-green focus:outline-none ml-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t h-screen overflow-y-auto pb-20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-upwork-green hover:bg-gray-50 rounded-md border-b border-gray-100"
                            >
                                {item.name}
                            </a>
                        ))}
                         <a href="https://www.upwork.com" target="_blank" rel="noreferrer" className="block w-full text-center mt-4 bg-upwork-green text-white px-4 py-3 rounded-lg font-bold hover:bg-upwork-hover transition">
                             {t('nav_register')}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
