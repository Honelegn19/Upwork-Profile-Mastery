
import React from 'react';
import { CheckCircle, ExternalLink, BookOpen, Shield, HelpCircle, PlayCircle, Users, Link as LinkIcon } from 'lucide-react';

const InfoSection: React.FC = () => {
    return (
        <div id="what-is-upwork" className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="relative">
                        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                            Upwork (አፕዎርክ) ምንድን ነው?
                        </h3>
                        <p className="mt-3 text-lg text-gray-500">
                            Upwork ማለት ስራ እንዲሰራላቸው የሚፈልጉ ግለሰቦችን ወይም ድርጅቶችን (Clients) እና የተለያዩ ሙያዊ ክህሎቶች ያሏቸውን ፍሪላንሰሮችን (Freelancers) የሚያገናኝ ግዙፍ ዓለም አቀፍ የኦንላይን የስራ ገበያ ነው።
                        </p>
                        
                        {/* Data/Stats Box */}
                        <div className="mt-6 bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm text-gray-600">
                             <h4 className="font-bold text-gray-800 mb-2 flex items-center"><LinkIcon className="w-4 h-4 mr-2" /> Quick Stats (መረጃ):</h4>
                             <ul className="list-disc list-inside space-y-1">
                                <li>ከ18 ሚሊዮን በላይ ፍሪላንሰሮች</li>
                                <li>5 ሚሊዮን+ ደንበኞች (Clients)</li>
                                <li>በዓመት ከ$1 ቢሊዮን ዶላር በላይ ክፍያ ይፈጸማል</li>
                             </ul>
                             <a href="https://investors.upwork.com/about/default.aspx" target="_blank" rel="noreferrer" className="text-upwork-green hover:underline text-xs mt-2 inline-block">Source: Upwork Investor Relations</a>
                        </div>

                        <dl className="mt-10 space-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-upwork-green text-white">
                                        <CheckCircle className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Clients (ደንበኞች)</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    ደንበኞች የሚፈልጉትን ስራ ይለጥፋሉ (Post a Job)። እንደ Microsoft እና Airbnb የመሳሰሉ ትላልቅ ድርጅቶችም ይጠቀሙበታል።
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-upwork-green text-white">
                                        <CheckCircle className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Freelancers (ፍሪላንሰሮች)</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    ፍሪላንሰሮች በክህሎታቸው የሚመጥናቸውን ስራ መርጠው ያመልክታሉ (Submit a Proposal)።
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                         <img
                            className="relative mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                            width={490}
                            src="https://picsum.photos/seed/upwork123/600/400"
                            alt="Upwork Dashboard Concept"
                        />
                    </div>
                </div>
                
                <div className="mt-20 border-t border-gray-200 pt-16" id="how-to-start">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl text-center mb-12">
                        እንዴት መጀመር ይቻላል? (Step-by-Step Guide)
                    </h3>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-upwork-green transition-colors group">
                            <div className="text-upwork-green font-bold text-4xl mb-4">01</div>
                            <h4 className="text-xl font-bold mb-2">ይመዝገቡ (Sign Up)</h4>
                            <p className="text-gray-600 mb-4">
                                www.upwork.com ይሂዱ። ኢሜይልዎን ተጠቅመው 'I want to work as a Freelancer' የሚለውን አማራጭ ይምረጡ።
                            </p>
                            <div className="space-y-2">
                                <a href="https://www.upwork.com/signup" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-upwork-green group-hover:underline flex items-center">
                                    <ExternalLink className="mr-2 h-4 w-4" /> ወደ ምዝገባ ገጽ
                                </a>
                                <a href="https://support.upwork.com/hc/en-us/articles/211063958-Create-a-Freelancer-Profile" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-upwork-green flex items-center">
                                    <BookOpen className="mr-2 h-3 w-3" /> ምዝገባ መመሪያ (Article)
                                </a>
                            </div>
                        </div>
                         <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-upwork-green transition-colors group">
                            <div className="text-upwork-green font-bold text-4xl mb-4">02</div>
                            <h4 className="text-xl font-bold mb-2">ፕሮፋይል ይሙሉ (Create Profile)</h4>
                            <p className="text-gray-600 mb-4">
                                ያለዎትን ክህሎት፣ የትምህርት ዝግጅት እና የስራ ልምድ በግልጽ ያስቀምጡ። ፎቶዎ እና መግለጫዎ (Overview) ወሳኝ ናቸው።
                            </p>
                             <div className="space-y-2">
                                <a href="https://www.upwork.com/resources/how-to-create-a-freelancer-profile" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-upwork-green group-hover:underline flex items-center">
                                    <ExternalLink className="mr-2 h-4 w-4" /> ፕሮፋይል አሞላል መመሪያ
                                </a>
                                <a href="https://www.upwork.com/resources/freelance-profile-examples" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-upwork-green flex items-center">
                                    <Users className="mr-2 h-3 w-3" /> የፕሮፋይል ምሳሌዎች (Examples)
                                </a>
                             </div>
                        </div>
                         <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-upwork-green transition-colors group">
                            <div className="text-upwork-green font-bold text-4xl mb-4">03</div>
                            <h4 className="text-xl font-bold mb-2">ስራ ይፈልጉ (Find Work)</h4>
                            <p className="text-gray-600 mb-4">
                                በክህሎትዎ መሰረት ስራዎችን ይፈልጉ። የሚመጥንዎ ስራ ሲያገኙ ማራኪ Proposal ይፃፉ።
                            </p>
                             <div className="space-y-2">
                                <a href="https://www.upwork.com/resources/how-to-find-work-on-upwork" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-upwork-green group-hover:underline flex items-center">
                                    <ExternalLink className="mr-2 h-4 w-4" /> ስራ እንዴት እንደሚገኝ
                                </a>
                                <a href="https://community.upwork.com/t5/Freelancers/ct-p/Freelancers" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-upwork-green flex items-center">
                                    <Users className="mr-2 h-3 w-3" /> Community Discussion
                                </a>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Agency Section */}
                <div className="mt-16 bg-upwork-dark rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
                    <div className="relative z-10 lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-2/3">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <Users className="mr-3 h-8 w-8 text-upwork-green" />
                                በቡድን መስራት (Upwork Agencies)
                            </h3>
                            <p className="text-gray-300 mb-6 text-lg">
                                ብዙ ስራዎች ሲኖሩዎት ወይም ትላልቅ ፕሮጀክቶችን ለመቀበል ሲፈልጉ፣ ሌሎች ፍሪላንሰሮችን በማሰባሰብ እንደ ኤጀንሲ (Agency) መስራት ይችላሉ። 
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://www.upwork.com/agencies" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-upwork-green text-white font-semibold py-2 px-6 rounded-full hover:bg-upwork-hover transition-colors shadow-lg">
                                    Agency Guide <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                                <a href="https://support.upwork.com/hc/en-us/articles/211062898-Create-an-Agency" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-700 text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-600 transition-colors">
                                    How to Create
                                </a>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0 lg:w-1/3 flex justify-center">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 w-full max-w-sm">
                                <h4 className="font-bold text-white mb-3 border-b border-white/20 pb-2">Agency Benefits</h4>
                                <ul className="space-y-3 text-sm text-gray-200">
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-upwork-green mr-2" /> Unlimited earning potential</li>
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-upwork-green mr-2" /> Handle complex projects</li>
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-upwork-green mr-2" /> Shared work history</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Decorative circle */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 rounded-full bg-upwork-green opacity-10 blur-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
