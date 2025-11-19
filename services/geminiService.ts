import { GoogleGenAI } from "@google/genai";
import { ProposalRequest } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateProposal = async (data: ProposalRequest): Promise<string> => {
    if (!apiKey) {
        // Fallback mock response if no API key is present for demo purposes
        return `[Demo Mode: API Key Missing]\n\nDear Hiring Manager,\n\nI read your job posting for "${data.jobDescription.substring(0, 20)}..." with great interest. Based on my skills in ${data.skills}, I believe I am the perfect candidate for this role.\n\n(Please configure process.env.API_KEY to generate real AI proposals)`;
    }

    const prompt = `
        You are an expert top-rated freelancer on Upwork. 
        Write a professional, persuasive, and concise cover letter (proposal) for the following job description.
        
        Job Description: "${data.jobDescription}"
        
        My Skills: "${data.skills}"
        My Experience Level: "${data.experience}"

        The proposal should:
        1. Hook the client immediately.
        2. Address their specific needs found in the description.
        3. Be professional but conversational.
        4. Include a call to action.
        
        Output the proposal in English.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text || "Failed to generate proposal. Please try again.";
    } catch (error) {
        console.error("Error generating proposal:", error);
        throw error;
    }
};