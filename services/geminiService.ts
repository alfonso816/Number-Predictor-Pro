
import { GoogleGenAI } from "@google/genai";

export async function analyzeWithGemini(data: any[]) {
  // Always use a named parameter for apiKey. 
  // Create a new GoogleGenAI instance right before the call to ensure current API key is used.
  const ai = new GoogleGenAI({ apiKey: import.meta.envi.API_KEY });
  
  const prompt = `
    Como un experto en análisis estadístico y teoría de inercia numérica para loterías (específicamente Chontico Día), 
    analiza los siguientes resultados recientes: ${JSON.stringify(data.slice(0, 5))}.
    
    Proporciona un "Razonamiento Táctico" que incluya:
    1. Predicción de los 4 números probables.
    2. Explicación basada en 'Ley de Compensación' e 'Inercia de CP'.
    3. Análisis de Paridad sugerido.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    // Directly access the .text property (not a method).
    return response.text;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return "Error al conectar con el motor de IA. Por favor, intente de nuevo.";
  }
}
