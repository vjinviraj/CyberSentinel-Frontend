const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export const fetchCybersecurityResponse = async (message) => {
  try {
    const response = await fetch(`${API_URL}?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }],
      }),
    });

    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand that.";
  } catch (error) {
    console.error("Chatbot API Error:", error);
    return "Error fetching response. Please try again.";
  }
};
