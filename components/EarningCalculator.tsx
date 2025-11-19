
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ExternalLink, Info } from 'lucide-react';

const EarningCalculator: React.FC = () => {
    const [hourlyRate, setHourlyRate] = useState<number>(15);
    const [hoursPerWeek, setHoursPerWeek] = useState<number>(20);

    const generateData = () => {
        const data = [];
        const weekly = hourlyRate * hoursPerWeek;
        const monthly = weekly * 4;
        
        // Simulate 6 months growth assuming slight increase in rate or efficiency
        for (let i = 1; i <= 6; i++) {
            data.push({
                name: `Month ${i}`,
                income: monthly + (monthly * 0.1 * (i - 1)), // Simulate 10% growth per month as experience grows
                base: monthly
            });
        }
        return data;
    };

    const data = generateData();

    return (
        <div id="earnings" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            ገቢ ማስያ (Earning Potential)
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            ገቢዎ በእርስዎ ክህሎት፣ ልምድ እና በስራው ላይ በሚያጠፉት ጊዜ ይወሰናል።
                        </p>
                        
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                            <h4 className="text-sm font-bold text-blue-800 flex items-center"><Info className="w-4 h-4 mr-2"/> Average Hourly Rates (Data)</h4>
                            <ul className="mt-2 text-xs text-blue-700 space-y-1">
                                <li className="flex justify-between"><span>Web Dev:</span> <span>$25 - $60/hr</span></li>
                                <li className="flex justify-between"><span>Graphic Design:</span> <span>$20 - $45/hr</span></li>
                                <li className="flex justify-between"><span>Virtual Assistant:</span> <span>$10 - $25/hr</span></li>
                            </ul>
                            <a href="https://www.upwork.com/resources/how-much-can-freelancers-make" target="_blank" rel="noopener noreferrer" className="mt-2 block text-xs font-bold text-blue-600 hover:underline">
                                View Full Rate Guide &rarr;
                            </a>
                        </div>
                        
                        <div className="mt-6 space-y-6 bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    የሰዓት ክፍያ (በዶላር): <span className="font-bold text-upwork-green">${hourlyRate}</span>
                                </label>
                                <input
                                    type="range"
                                    min="5"
                                    max="100"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                                    className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-upwork-green"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    በሳምንት የሚሰሩት ሰዓት: <span className="font-bold text-upwork-green">{hoursPerWeek} ሰዓት</span>
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="60"
                                    value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                                    className="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-upwork-green"
                                />
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-sm text-gray-500">ገምታዊ የወር ገቢ (Monthly)</p>
                                <p className="text-3xl font-bold text-gray-900">${(hourlyRate * hoursPerWeek * 4).toLocaleString()}</p>
                                <p className="text-xs text-gray-400 mt-1">* 10% Service Fee ሊቀነስ ይችላል።</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12 lg:mt-0 lg:col-span-2 h-96 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">የ6 ወር ገቢ እድገት ትንበያ (Projected Growth)</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip 
                                    formatter={(value) => [`$${Number(value).toFixed(0)}`, 'ገቢ']}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="income" stroke="#14a800" fill="#14a800" fillOpacity={0.1} />
                            </AreaChart>
                        </ResponsiveContainer>
                        <p className="text-center text-sm text-gray-500 mt-2 flex items-center justify-center">
                            <Info className="w-4 h-4 mr-1" /> ልምድ ሲያካብቱና ጥሩ የስራ ታሪክ (Work History) ሲገነቡ ገቢዎ ያድጋል።
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarningCalculator;
