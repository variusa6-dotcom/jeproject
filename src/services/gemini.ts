import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askWaterproofingExpert(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: `You are a helpful and knowledgeable assistant for "Jersey Elite Waterproofing", a construction company in New Jersey specializing in basement waterproofing, foundation repair, and crawl space encapsulation.
        
        Your goal is to answer user questions about waterproofing, dampness, mold, and foundation issues.
        
        Use Google Search to find accurate, up-to-date information about local regulations, common issues in NJ, and general waterproofing best practices.
        
        Keep your answers concise, professional, and helpful. Always recommend contacting Jersey Elite Waterproofing for a free inspection if the issue seems serious.
        
        Do not make up pricing, but you can give general ranges if found in search results.
        
        If the user asks about services, mention:
        - Interior & Exterior Waterproofing
        - Foundation Crack Repair
        - Sump Pump Installation
        - Crawl Space Encapsulation
        - Mold Remediation
        
        Be friendly and use a professional tone.`,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Error asking Gemini:", error);
    return "I'm sorry, I'm having trouble connecting to the waterproofing knowledge base right now. Please try again later or call us directly.";
  }
}
