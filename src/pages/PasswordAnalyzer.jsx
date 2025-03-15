import { useState } from "react";
import sha1 from "crypto-js/sha1"; // Import SHA-1 hashing

const PasswordAnalyzer = () => {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [breachResult, setBreachResult] = useState(null);

  const checkPassword = async () => {
    setResult("Checking password safety...");
    setBreachResult(null);

    // Simulated strength analysis (replace with actual logic)
    setTimeout(() => {
      setResult("✅ Your password is strong!");
    }, 1000);

    // Check if password has been leaked in data breaches
    checkBreach(password);
  };

  const checkBreach = async (password) => {
    if (!password) return;

    const hashedPassword = sha1(password).toString().toUpperCase(); // SHA-1 hash
    const prefix = hashedPassword.substring(0, 5);
    const suffix = hashedPassword.substring(5);

    try {
      const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
      if (!response.ok) throw new Error("Failed to fetch breach data");

      const data = await response.text();
      const leaked = data.split("\n").some((line) => line.startsWith(suffix));

      setBreachResult(
        leaked
          ? "⚠️ This password has been exposed in data breaches! Do not use it."
          : "✅ This password has not been found in any known breaches."
      );
    } catch (error) {
      setBreachResult("❌ Error checking password breach status.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] text-[#E0E0E0] p-6">
      <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-[#00FF88] mb-4">Password Analyzer</h1>
        <p className="text-[#E0E0E0] mb-4">Enter your password to check its strength and breach status.</p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full p-3 rounded-lg bg-[#121212] text-[#E0E0E0] border border-[#00AEEF] focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
        />

        <button
          onClick={checkPassword}
          className="mt-4 bg-[#00AEEF] text-black px-4 py-2 rounded-lg hover:bg-[#00FF88] transition"
        >
          Analyze Password
        </button>

        {result && (
          <div
            className="mt-4 p-3 rounded-lg text-black font-bold text-center"
            style={{
              backgroundColor: result.includes("strong")
                ? "#00FF88"
                : result.includes("weak")
                ? "#FF3B30"
                : "#FFC107",
            }}
          >
            {result}
          </div>
        )}

        {breachResult && (
          <div
            className="mt-4 p-3 rounded-lg text-black font-bold text-center"
            style={{
              backgroundColor: breachResult.includes("exposed") ? "#FF3B30" : "#00FF88",
            }}
          >
            {breachResult}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordAnalyzer;
