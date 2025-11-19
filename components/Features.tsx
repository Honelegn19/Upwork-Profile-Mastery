
import React from 'react';
import { PenTool, Code, Globe, Smartphone, BarChart, Headphones, Database, Video, ExternalLink, Server, TrendingUp } from 'lucide-react';

const features = [
    {
        name: 'Content Writing',
        description: 'የተለያዩ ጽሁፎችን ማዘጋጀት (Articles, Blogs, Copywriting)',
        icon: PenTool,
        link: 'https://www.upwork.com/freelance-jobs/writing/'
    },
    {
        name: 'Web Development',
        description: 'ድረ-ገጽ ዲዛይንና ማበልጸግ (Full Stack, Frontend, Backend)',
        icon: Code,
        link: 'https://www.upwork.com/freelance-jobs/web-development/'
    },
    {
        name: 'Translation',
        description: 'ከአንድ ቋንቋ ወደ ሌላ መተርጎም (Amharic to English, etc)',
        icon: Globe,
        link: 'https://www.upwork.com/freelance-jobs/translation/'
    },
    {
        name: 'IT & Networking',
        description: 'System Admin, Cloud Computing, Server Management',
        icon: Server,
        link: 'https://www.upwork.com/freelance-jobs/it-networking/'
    },
    {
        name: 'Mobile App Dev',
        description: 'የሞባይል አፕሊኬሽን መስራት (iOS, Android, Flutter)',
        icon: Smartphone,
        link: 'https://www.upwork.com/freelance-jobs/mobile-development/'
    },
    {
        name: 'Digital Marketing',
        description: 'SEO, SEM, Social Media Marketing',
        icon: BarChart,
        link: 'https://www.upwork.com/freelance-jobs/marketing/'
    },
    {
        name: 'Virtual Assistance',
        description: 'ቀጠሮ ማስተካከል፣ ኢሜይል መመለስ፣ የደንበኞች አገልግሎት',
        icon: Headphones,
        link: 'https://www.upwork.com/freelance-jobs/admin-support/'
    },
    {
        name: 'Data Science',
        description: 'ዳታ ሳይንስ፣ ትንተና እና ማሽን ላርኒንግ (AI)',
        icon: Database,
        link: 'https://www.upwork.com/freelance-jobs/data-science-analytics/'
    },
    {
        name: 'Graphic Design',
        description: 'ሎጎ፣ ብራንዲንግ እና አኒሜሽን ስራዎች',
        icon: Video,
        link: 'https://www.upwork.com/freelance-jobs/design-creative/'
    },
];

const Features: React.FC = () => {
    return (
        <div id="categories" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-upwork-green font-semibold tracking-wide uppercase">የስራ መስኮች (Categories)</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        ምን አይነት ስራዎች ይገኛሉ?
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        የሚፈልጉትን የስራ መስክ ይምረጡ። እነዚህ ሊንኮች በቀጥታ ወደ Upwork የስራ ዝርዝር (Job Listings) ይወስዳሉ።
                    </p>
                </div>

                {/* Market Data Banner */}
                <div className="mt-8 max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between flex-col sm:flex-row">
                    <div className="flex items-center mb-2 sm:mb-0">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                             <TrendingUp className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Top Tech Skills in 2024</h4>
                            <p className="text-xs text-gray-500">Generative AI, Machine Learning, & Full Stack Dev</p>
                        </div>
                    </div>
                    <a href="https://www.upwork.com/research/top-skills" target="_blank" rel="noreferrer" className="text-sm font-bold text-upwork-green hover:underline flex items-center">
                        Read Full Report <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <a 
                                key={feature.name} 
                                href={feature.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1 flex flex-col"
                            >
                                <dt className="flex items-center mb-4">
                                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-upwork-green text-white group-hover:bg-upwork-hover transition-colors">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-4 text-lg leading-6 font-medium text-gray-900 flex items-center gap-2">
                                        {feature.name}
                                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-upwork-green" />
                                    </p>
                                </dt>
                                <dd className="text-base text-gray-500 flex-grow">
                                    {feature.description}
                                </dd>
                                <div className="mt-4 pt-4 border-t border-gray-50 text-xs text-center text-upwork-green font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    View {feature.name} Jobs &rarr;
                                </div>
                            </a>
                        ))}
                    </dl>
                    <div className="mt-12 text-center">
                        <a 
                            href="https://www.upwork.com/freelance-jobs/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white bg-upwork-dark hover:bg-gray-800 px-6 py-3 rounded-full font-semibold transition-colors"
                        >
                            ሁሉንም የስራ መስኮች ይመልከቱ (See all categories) <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
