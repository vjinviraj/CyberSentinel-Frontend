import React, { useState } from "react";

const PhishingScanner = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!url.trim()) {
      setResult("❌ Please enter a valid URL.");
      return;
    }

    setLoading(true);
    setResult("🔍 Scanning...");

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      });

      const data = await response.json();
      if (data.error) {
        setResult(`❌ Error: ${data.error}`);
      } else {
        setResult(
          data.is_scam
            ? `⚠️ This website is unsafe! (Confidence: ${data.confidence * 100}%)`
            : `✅ This website is safe! (Confidence: ${data.confidence * 100}%)`
        );
      }
    } catch (error) {
      setResult("❌ Failed to scan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-[#E0E0E0] p-6">
      <h1 className="text-3xl font-bold text-[#00FF88]">Phishing Scanner</h1>
      <p className="mt-2 text-center text-[#E0E0E0]">
        Enter a website URL below to check if it's safe or a phishing attempt.
      </p>

      <input
        type="text"
        placeholder="Enter URL..."
        className="mt-4 w-80 p-3 rounded-lg text-black"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={handleScan}
        className="mt-4 px-6 py-3 bg-gradient-to-r from-[#00FF88] to-[#00AEEF] text-black rounded-lg shadow-md hover:from-[#6A0DAD] hover:to-[#00AEEF] transition-all"
        disabled={loading}
      >
        {loading ? "Scanning..." : "Scan URL"}
      </button>

      {result && (
        <div className="mt-4 bg-[#1A1A1A] p-4 rounded-lg shadow-md">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default PhishingScanner;
