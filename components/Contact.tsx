
import React from 'react';
import { Mail, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const packages = [
    {
        name: "Profile Optimization",
        price: "1,500 ETB",
        desc: "Stand out from the crowd with a professional profile audit.",
        features: [
            "Complete Profile Audit",
            "Title & Overview Rewrite",
            "Portfolio Selection Advice",
            "Skill Tag Optimization",
            "3-Day Turnaround"
        ],
        popular: false
    },
    {
        name: "1-on-1 Strategy",
        price: "2,500 ETB",
        desc: "Personalized guidance to land your first job.",
        features: [
            "45-Min Video Call",
            "Live Proposal Review",
            "Niche Selection Strategy",
            "Interview Preparation",
            "Recording Provided"
        ],
        popular: true
    },
    {
        name: "Full Mentorship",
        price: "6,000 ETB",
        desc: "Comprehensive support until you succeed.",
        features: [
            "4 Weekly Coaching Calls",
            "Direct WhatsApp Support",
            "Unlimited Proposal Reviews",
            "Client Negotiation Help",
            "Growth Roadmap"
        ],
        popular: false
    }
];

const Contact: React.FC = () => {
    return (
        <div id="contact" className="bg-white py-24 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gray-50 skew-y-3 transform origin-top-left -z-0"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-upwork-dark rounded-3xl shadow-2xl overflow-hidden lg:flex min-h-[500px] border border-gray-800 mb-20">
                    {/* Image Section */}
                    <div className="lg:w-5/12 relative h-72 lg:h-auto bg-gray-800">
                        {/* Placeholder Image - Replace src with your actual photo URL */}
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                            alt="Honelegn - Upwork Expert" 
                            className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-upwork-dark via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-upwork-dark"></div>
                        
                        <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="text-2xl font-bold text-white">Honelegn</h3>
                            <p className="text-upwork-green font-medium">Upwork Strategist & Mentor</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white relative">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-900/30 text-upwork-green text-sm font-bold mb-6 w-fit border border-green-500/20">
                            <span className="w-2 h-2 bg-upwork-green rounded-full mr-2 animate-pulse"></span>
                            Accepting New Students
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Let's Build Your <span className="text-upwork-green">Freelance Career</span> Together.
                        </h2>
                        
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Don't navigate the freelance world alone. Whether you need a profile review, proposal strategy, or a full mentorship roadmap, I'm here to help you succeed.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-8 text-sm text-gray-400">
                            <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-upwork-green mr-2" /> Profile Optimization</div>
                            <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-upwork-green mr-2" /> 1-on-1 Consultation</div>
                            <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-upwork-green mr-2" /> Proposal Reviews</div>
                            <div className="flex items-center"><CheckCircle2 className="w-4 h-4 text-upwork-green mr-2" /> Interview Prep</div>
                        </div>

                        <div className="space-y-4">
                            {/* Email Card */}
                            <a href="mailto:honelegnw@gmail.com" className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-upwork-green/50 transition-all group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-upwork-green flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="ml-5 overflow-hidden">
                                    <p className="text-sm text-gray-400">Email Me</p>
                                    <p className="text-lg sm:text-xl font-bold text-white truncate">
                                        honelegnw@gmail.com
                                    </p>
                                </div>
                                <ArrowRight className="ml-auto text-gray-500 group-hover:text-upwork-green transform group-hover:translate-x-1 transition-all" />
                            </a>

                            {/* Book Call Card */}
                            <a href="mailto:honelegnw@gmail.com?subject=Book%20Call%20Consultation" className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-upwork-green/50 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-white text-upwork-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div className="ml-5">
                                    <p className="text-sm text-gray-400">Consultation</p>
                                    <span className="text-lg sm:text-xl font-bold text-white">Book a Call</span>
                                </div>
                                <ArrowRight className="ml-auto text-gray-500 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Pricing Packages Section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900">Services & Packages</h3>
                    <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Select the plan that fits your current needs. All packages are designed to maximize your earnings on Upwork.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className={`relative p-8 bg-white rounded-2xl border ${pkg.popular ? 'border-upwork-green shadow-xl scale-105 z-10' : 'border-gray-200 shadow-sm hover:border-upwork-green/50'} transition-all duration-300 flex flex-col`}>
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 -mt-4 mr-4 bg-upwork-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    MOST POPULAR
                                </div>
                            )}
                            <h4 className="text-xl font-bold text-gray-900">{pkg.name}</h4>
                            <div className="mt-4 flex items-baseline text-gray-900">
                                <span className="text-4xl font-extrabold tracking-tight">{pkg.price}</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 h-10">{pkg.desc}</p>

                            <div className="mt-6 pt-6 border-t border-gray-100 flex-grow">
                                <ul className="space-y-4">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-upwork-green mt-0.5" />
                                            <span className="ml-3 text-sm text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <a 
                                href={`mailto:honelegnw@gmail.com?subject=Interested in ${pkg.name} Package`}
                                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-xl text-center font-bold transition-all ${pkg.popular ? 'bg-upwork-green text-white hover:bg-upwork-hover shadow-lg hover:shadow-xl' : 'bg-green-50 text-upwork-green hover:bg-green-100'}`}
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
