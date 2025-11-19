
import React from 'react';
import { BookOpen, Shield, Award, DollarSign, Globe, FileText, Video, Users, ExternalLink, Zap, TrendingUp } from 'lucide-react';

const resources = [
    {
        category: "Upwork Mastery (የብቃት ማረጋገጫ)",
        id: "mastery",
        items: [
            {
                title: "Talent Badges Explained",
                desc: "Rising Talent, Top Rated, እና Top Rated Plus ባጆች እንዴት ይገኛሉ? መረጃዎች ከ Upwork ኦፊሴላዊ ምንጭ።",
                link: "https://support.upwork.com/hc/en-us/articles/211068468-Talent-Badges",
                icon: Award
            },
            {
                title: "Perfect Profile Guide",
                desc: "ደንበኞችን የሚስብ ፕሮፋይል እንዴት ይዘጋጃል? (9 Tips for a Winning Profile)",
                link: "https://www.upwork.com/resources/9-tips-to-help-you-create-a-freelancer-profile-that-stands-out",
                icon: Users
            },
            {
                title: "Upwork Academy",
                desc: "የነፃ ስልጠናዎች፣ ቪዲዮዎች እና የምስክር ወረቀቶች (Certifications)።",
                link: "https://community.upwork.com/t5/Academy/ct-p/Academy",
                icon: Video
            }
        ]
    },
    {
        category: "Global Trends & Articles (ወቅታዊ መረጃዎች)",
        id: "trends",
        items: [
            {
                title: "Future of Work Report",
                desc: "የዓለም የስራ ሁኔታ ወዴት እያመራ ነው? የ Upwork ጥናታዊ ጽሁፎች።",
                link: "https://www.upwork.com/research",
                icon: Globe
            },
            {
                title: "Freelance Blog",
                desc: "ለስኬት የሚረዱ ምክሮች፣ የደንበኞች አያያዝ እና የስራ እድሎች መረጃ።",
                link: "https://www.upwork.com/blog/freelance",
                icon: BookOpen
            },
            {
                title: "In-Demand Skills 2024",
                desc: "በአሁን ሰዓት በገበያው ላይ ተፈላጊ የሆኑ ክህሎቶች የትኞቹ ናቸው?",
                link: "https://www.upwork.com/research/top-skills",
                icon: TrendingUp
            }
        ]
    },
    {
        category: "Safety & Payments (ክፍያ እና ደህንነት)",
        id: "safety",
        items: [
            {
                title: "Hourly Protection",
                desc: "የሰዓት ክፍያ ዋስትና እንዴት ይሰራል? የ Upwork Desktop App አጠቃቀም።",
                link: "https://support.upwork.com/hc/en-us/articles/211062568-Upwork-Payment-Protection",
                icon: Shield
            },
            {
                title: "Fixed Price Escrow",
                desc: "የፕሮጀክት ክፍያ እና የ Escrow አገልግሎት መረጃ።",
                link: "https://support.upwork.com/hc/en-us/articles/211068208-Fixed-Price-Protection",
                icon: DollarSign
            },
            {
                title: "Avoid Scams",
                desc: "ማጭበርበሮችን እንዴት እንለይ? (Safety First)",
                link: "https://www.upwork.com/resources/staying-safe-on-upwork",
                icon: Zap
            }
        ]
    }
];

const ResourceHub: React.FC = () => {
    return (
        <div id="resources" className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-base text-upwork-green font-semibold tracking-wide uppercase">Resource Library</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Mastery & Knowledge Hub
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        ለስኬታማነት የሚያስፈልጉ መረጃዎች፣ የብሎግ ጽሁፎች እና አለም አቀፍ ምርጥ ተሞክሮዎች።
                    </p>
                </div>

                <div className="space-y-16">
                    {resources.map((section, idx) => (
                        <div key={idx} id={section.id}>
                            <div className="flex items-center mb-6 pl-2 border-l-4 border-upwork-green">
                                <h3 className="text-2xl font-bold text-gray-900 mr-4">
                                    {section.category}
                                </h3>
                                <span className="h-px flex-grow bg-gray-200"></span>
                            </div>
                            
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {section.items.map((item, itemIdx) => (
                                    <a
                                        key={itemIdx}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-upwork-green/30 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 rounded-xl bg-green-50 text-upwork-green group-hover:bg-upwork-green group-hover:text-white transition-colors duration-300">
                                                <item.icon className="h-6 w-6" />
                                            </div>
                                            <ExternalLink className="h-5 w-5 text-gray-300 group-hover:text-upwork-green transition-colors" />
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-upwork-green transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                                            {item.desc}
                                        </p>
                                        <div className="text-xs font-medium text-gray-400 uppercase tracking-wider group-hover:text-upwork-green transition-colors">
                                            Read Article &rarr;
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 bg-gradient-to-r from-gray-900 to-upwork-dark rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Upwork Community Forum</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                            ከዓለም ዙሪያ ካሉ ሚሊዮኖች ፍሪላንሰሮች ጋር ይወያዩ። ጥያቄ ይጠይቁ፣ መልስ ያግኙ።
                        </p>
                        <a 
                            href="https://community.upwork.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-upwork-dark bg-white hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Visit Community <ExternalLink className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
                </div>
            </div>
        </div>
    );
};

export default ResourceHub;
