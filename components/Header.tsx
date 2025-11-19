
import React, { useState } from 'react';
import { Menu, X, Globe, Share2 } from 'lucide-react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Upwork ምንድን ነው?', href: '#what-is-upwork' },
        { name: 'የስራ አይነቶች', href: '#categories' },
        { name: 'Mastery Resources', href: '#resources' }, 
        { name: 'እንዴት ልጀምር?', href: '#how-to-start' },
        { name: 'ገቢ ማስያ', href: '#earnings' },
        { name: 'Proposal Generator', href: '#proposal-tool' },
        { name: 'Contact', href: '#contact' },
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

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <a href="#" className="flex items-center">
                        <Globe className="h-8 w-8 text-upwork-green" />
                        <span className="ml-2 text-xl font-bold text-gray-900">Upwork Profile <span className="text-upwork-green">Mastery</span></span>
                    </a>
                    
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-upwork-green transition-colors whitespace-nowrap"
                            >
                                {item.name}
                            </a>
                        ))}
                        <button 
                            onClick={handleShare}
                            className="p-2 text-gray-600 hover:text-upwork-green hover:bg-gray-100 rounded-full transition-colors"
                            title="Share Website"
                        >
                            <Share2 className="h-5 w-5" />
                        </button>
                        <a href="https://www.upwork.com" target="_blank" rel="noreferrer" className="bg-upwork-green text-white px-4 py-2 rounded-full font-bold hover:bg-upwork-hover transition shadow-md hover:shadow-lg">
                            ይመዝገቡ
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden">
                        <button 
                            onClick={handleShare}
                            className="p-2 mr-2 text-gray-600 hover:text-upwork-green"
                        >
                            <Share2 className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-upwork-green focus:outline-none"
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
                            Upwork ላይ ይመዝገቡ
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
