
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Copy, Check, AlertCircle, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { generateProposal } from '../services/geminiService';
import { LoadingState } from '../types';

const ProposalGen: React.FC = () => {
    const [jobDesc, setJobDesc] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('Entry Level');
    const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
    const [result, setResult] = useState('');
    const [copied, setCopied] = useState(false);
    const [showExamples, setShowExamples] = useState(false);
    
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Animate only once
                }
            },
            {
                threshold: 0.1
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const examples = [
        {
            title: "Web Development (Solution Oriented)",
            content: `Hi [Client Name],\n\nI saw you're looking for a React developer to fix bugs in your dashboard. I have extensive experience with React.js and debugging complex state management issues.\n\nI recently solved a similar issue for a client where their data wasn't syncing in real-time. You can check it out here: [Link].\n\nI can jump on this immediately and likely have it fixed within 24 hours.\n\nBest,\n[Your Name]`
        },
        {
            title: "Virtual Assistant (Reliable & Organized)",
            content: `Hello,\n\nI understand you need someone to manage your daily emails and schedule meetings. I am a highly organized Virtual Assistant with 2 years of experience supporting busy entrepreneurs.\n\nI am proficient in Google Workspace, Slack, and Asana. I pride myself on a <1 hour response time during working hours.\n\nI'd love to help you free up your time. When is a good time to chat?\n\nRegards,\n[Your Name]`
        },
         {
            title: "Graphic Design (Creative)",
            content: `Hi there,\n\nI read your brief for a new logo design. Your brand's vision for a "minimalist yet bold" look is exactly my style.\n\nI have attached 3 relevant samples from my portfolio that align with this aesthetic.\n\nMy Process:\n1. Initial concepts (24 hours)\n2. Revisions based on feedback\n3. Final files in all formats\n\nLet's create something amazing!\n\nThanks,\n[Your Name]`
        },
        {
            title: "IT & System Admin (Host & Server)",
            content: `Hello,\n\nI see you need help configuring your AWS EC2 instance and setting up a secure Nginx web server.\n\nI am a certified AWS Solutions Architect with 5 years of experience in Linux server administration. I can help you:\n1. Securely configure the server (Firewall/SSH)\n2. Install and optimize Nginx\n3. Set up SSL certificates (Let's Encrypt)\n\nI can start this weekend and finish within 4 hours.\n\nBest,\n[Your Name]`
        }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!jobDesc || !skills) return;

        setStatus(LoadingState.LOADING);
        try {
            const proposal = await generateProposal({
                jobDescription: jobDesc,
                skills,
                experience
            });
            setResult(proposal);
            setStatus(LoadingState.SUCCESS);
        } catch (error) {
            console.error(error);
            setStatus(LoadingState.ERROR);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(result);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div 
            id="proposal-tool" 
            ref={sectionRef}
            className={`py-16 bg-gray-900 text-white relative overflow-hidden transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                 <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-upwork-green blur-3xl"></div>
                 <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4">
                        <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
                        <span className="text-sm font-medium text-yellow-200">AI Powered Tool</span>
                    </div>
                    <h2 className="text-3xl font-bold sm:text-4xl">Upwork Proposal Generator</h2>
                    <p className="mt-4 text-gray-300">
                        የስራውን ዝርዝር (Job Description) ያስገቡና በ AI የታገዘ ምርጥ Proposal (የሽፋን ደብዳቤ) ያግኙ። Upwork ላይ አብዛኛው ግንኙነት በእንግሊዝኛ ነው።
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <a href="https://www.upwork.com/resources/how-to-write-a-proposal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-600 hover:bg-gray-700 text-sm transition-colors">
                            <ExternalLink className="w-4 h-4 mr-2 text-upwork-green" />
                            ፕሮፖዛል አፃፃፍ መመሪያ (Official Guide)
                        </a>
                        <a href="https://www.upwork.com/resources/best-freelance-cover-letter-examples" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-600 hover:bg-gray-700 text-sm transition-colors">
                            <ExternalLink className="w-4 h-4 mr-2 text-upwork-green" />
                            ምርጥ ምሳሌዎች (Examples)
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Input Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Job Description (ከ Upwork ይቅዱ)
                            </label>
                            <textarea
                                rows={4}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-upwork-green focus:border-transparent placeholder-gray-500"
                                placeholder="Paste the client's job description here..."
                                value={jobDesc}
                                onChange={(e) => setJobDesc(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                የእርስዎ ክህሎቶች (Your Skills)
                            </label>
                            <input
                                type="text"
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-upwork-green focus:border-transparent placeholder-gray-500"
                                placeholder="e.g., React, Translation, Data Entry..."
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                ደረጃ (Experience Level)
                            </label>
                            <select
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-upwork-green focus:border-transparent"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                            >
                                <option>Entry Level</option>
                                <option>Intermediate</option>
                                <option>Expert</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={status === LoadingState.LOADING}
                            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-upwork-green hover:bg-upwork-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-upwork-green disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold"
                        >
                            {status === LoadingState.LOADING ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating...
                                </span>
                            ) : (
                                <>
                                    <Sparkles className="mr-2 h-5 w-5" /> Generate Proposal
                                </>
                            )}
                        </button>
                    </form>

                    {/* Result Area */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl flex flex-col h-full min-h-[400px]">
                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-700">
                            <h3 className="text-lg font-semibold text-white">Generated Proposal</h3>
                            {result && (
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    {copied ? <Check className="h-4 w-4 mr-1 text-green-500" /> : <Copy className="h-4 w-4 mr-1" />}
                                    {copied ? 'Copied!' : 'Copy Text'}
                                </button>
                            )}
                        </div>
                        
                        <div className="flex-grow overflow-y-auto text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed bg-gray-900/50 p-4 rounded-lg">
                            {status === LoadingState.IDLE && (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500 opacity-60">
                                    <Sparkles className="h-12 w-12 mb-2" />
                                    <p>ውጤቱ እዚህ ይገለጻል...</p>
                                </div>
                            )}
                            {status === LoadingState.LOADING && (
                                <div className="space-y-3 animate-pulse">
                                    <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                                    <div className="h-2 bg-gray-700 rounded w-full"></div>
                                    <div className="h-2 bg-gray-700 rounded w-5/6"></div>
                                    <div className="h-2 bg-gray-700 rounded w-4/5"></div>
                                </div>
                            )}
                            {status === LoadingState.ERROR && (
                                <div className="text-red-400 flex items-center justify-center h-full">
                                    <AlertCircle className="h-6 w-6 mr-2" />
                                    Error generating content. Please try again.
                                </div>
                            )}
                            {status === LoadingState.SUCCESS && result}
                        </div>
                        <p className="text-xs text-gray-500 mt-4 text-center">
                            * ሁልጊዜ ከመላክዎ በፊት ያንብቡት እና ያስተካክሉ። (Always review before sending)
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                    <button 
                        onClick={() => setShowExamples(!showExamples)}
                        className="w-full flex items-center justify-between text-left p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
                    >
                        <span className="text-xl font-bold text-white flex items-center">
                            <Check className="h-5 w-5 text-upwork-green mr-2" />
                            ምርጥ የ Proposal ምሳሌዎች (Successful Examples)
                        </span>
                        {showExamples ? <ChevronUp className="h-6 w-6 text-upwork-green" /> : <ChevronDown className="h-6 w-6 text-upwork-green" />}
                    </button>
                    
                    {showExamples && (
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            {examples.map((ex, idx) => (
                                <div key={idx} className="bg-gray-800 p-5 rounded-xl border border-gray-700 flex flex-col relative hover:border-upwork-green transition-colors">
                                    <h4 className="font-bold text-upwork-green mb-3 text-sm uppercase tracking-wider">{ex.title}</h4>
                                    <div className="flex-grow bg-gray-900/50 p-3 rounded-lg text-xs text-gray-300 font-mono whitespace-pre-wrap mb-4 leading-relaxed">
                                        {ex.content}
                                    </div>
                                    <button 
                                        onClick={() => {
                                            navigator.clipboard.writeText(ex.content);
                                            // Simple user feedback could be added here if needed
                                        }}
                                        className="mt-auto flex items-center justify-center w-full py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm text-white transition-colors border border-gray-600 hover:border-gray-500"
                                    >
                                        <Copy className="h-4 w-4 mr-2" /> Copy Example
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProposalGen;
