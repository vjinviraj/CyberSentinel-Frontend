import React, { useState, useEffect } from 'react';

function EmailFraudDetection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      completeLogin(code);
    }
  }, []);

  const startLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('http://localhost:5000/api/auth', {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      window.location.href = data.auth_url;
    } catch (err) {
      setError(`Failed to initiate login: ${err.message}`);
      setIsLoading(false);
    }
  };

  const completeLogin = async (code) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('http://localhost:5000/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.success) {
        setIsLoggedIn(true);
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        throw new Error('Authentication failed');
      }
    } catch (err) {
      setError(`Failed to complete authentication: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1A1A1A] text-[#E0E0E0] flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-[#00FF88] mb-6">Email Fraud Detection</h1>
      {error && <div className="text-[#FF3B30] bg-[#1A1A1A] p-3 rounded-lg mb-4">{error}</div>}
      {!isLoggedIn ? (
        <button 
          onClick={startLogin} 
          disabled={isLoading} 
          className="bg-[#00AEEF] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#00FF88] transition-all"
        >
          {isLoading ? 'Authorizing...' : 'Authorize Gmail Access'}
        </button>
      ) : (
        <button 
          onClick={() => {}} 
          className="bg-[#00AEEF] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#00FF88] transition-all"
        >
          Analyze Latest Email
        </button>
      )}
    </div>
  );
}

export default EmailFraudDetection;
