
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
    'nav_home': {
        en: 'What is Upwork?',
        am: 'Upwork ምንድን ነው?'
    },
    'nav_jobs': {
        en: 'Job Categories',
        am: 'የስራ አይነቶች'
    },
    'nav_start': {
        en: 'How to Start',
        am: 'እንዴት ልጀምር?'
    },
    'nav_calc': {
        en: 'Earnings',
        am: 'ገቢ ማስያ'
    },
    'nav_proposal': {
        en: 'Proposal Generator',
        am: 'Proposal Generator'
    },
    'nav_contact': {
        en: 'Contact',
        am: 'ያግኙን'
    },
    'nav_register': {
        en: 'Sign Up',
        am: 'ይመዝገቡ'
    },
    'hero_tag': {
        en: '#1 Guide for Ethiopian Freelancers',
        am: '#1 መመሪያ ለኢትዮጵያ ፍሪላንሰሮች'
    },
    'hero_title_1': {
        en: 'Find Online Work Opportunities',
        am: 'የኦንላይን ስራ እድሎችን'
    },
    'hero_title_2': {
        en: 'on Upwork',
        am: 'በ Upwork ያግኙ'
    },
    'hero_desc': {
        en: 'A global platform where you can earn income working remotely from anywhere in the world, on your own time and terms.',
        am: 'በኢንተርኔት አማካኝነት ከየትኛውም የዓለም ክፍል ሆነው፣ በራስዎ ጊዜና ፍላጎት እየሰሩ ገቢ (Income) የሚያገኙበት ዓለም አቀፍ መድረክ።'
    },
    'hero_btn_start': {
        en: 'Get Started',
        am: 'እንጀምር'
    },
    'hero_btn_ai': {
        en: 'AI Assistance',
        am: 'AI እገዛ'
    },
    'ben_remote': {
        en: 'Work Remotely',
        am: 'ከየትኛውም ቦታ'
    },
    'ben_flex': {
        en: 'Flexible Hours',
        am: 'በራስዎ ጊዜ'
    },
    'ben_earn': {
        en: 'Earn in USD',
        am: 'ጥሩ ገቢ'
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('am'); // Default to Amharic

    const t = (key: string): string => {
        if (translations[key] && translations[key][language]) {
            return translations[key][language];
        }
        return key; // Fallback to key if not found
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
