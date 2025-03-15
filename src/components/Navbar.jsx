// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import Chatbot from "./Chatbot"; // Import Chatbot

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [userEmail, setUserEmail] = useState(null);
//   const [chatbotOpen, setChatbotOpen] = useState(false); // Chatbot State

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserEmail(user.email);
//       } else {
//         setUserEmail(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     const auth = getAuth();
//     await signOut(auth);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full bg-[#121212] shadow-lg z-50">
//         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="text-[#00FF88] text-2xl font-bold">CyberSentinel</div>

//             {/* Desktop Nav */}
//             <div className="hidden md:flex space-x-8">
//               <Link to="/" className="nav-link">Home</Link>
//               <Link to="/features" className="nav-link">Features</Link>
//               <Link to="/dashboard" className="nav-link">Dashboard</Link>
//               <Link to="/password-analyzer" className="nav-link">Password Analyzer</Link>
//               <Link to="/contact" className="nav-link">Contact</Link>
//               <button onClick={() => setChatbotOpen(true)} className="nav-link">
//                 Chatbot
//               </button>
//             </div>

//             {/* Auth or User Info */}
//             <div className="hidden md:flex space-x-4">
//               {userEmail ? (
//                 <div className="flex items-center space-x-4">
//                   <span className="text-[#00FF88]">{userEmail}</span>
//                   <button onClick={handleLogout} className="logout-btn">Logout</button>
//                 </div>
//               ) : (
//                 <>
//                   <Link to="/login" className="auth-btn login-btn">Login</Link>
//                   <Link to="/signup" className="auth-btn signup-btn">Sign Up</Link>
//                 </>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#00FF88]">
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Nav */}
//         {isOpen && (
//           <div className="md:hidden bg-[#1A1A1A] p-6 space-y-4">
//             <Link to="/" className="block nav-link">Home</Link>
//             <Link to="/features" className="block nav-link">Features</Link>
//             <Link to="/dashboard" className="block nav-link">Dashboard</Link>
//             <Link to="/password-analyzer" className="block nav-link">Password Analyzer</Link>
//             <Link to="/contact" className="block nav-link">Contact</Link>
//             <button onClick={() => setChatbotOpen(true)} className="block nav-link">
//               Chatbot
//             </button>

//             {/* Mobile Auth or User Info */}
//             <div className="flex flex-col space-y-4">
//               {userEmail ? (
//                 <div className="text-center">
//                   <p className="text-[#00FF88]">{userEmail}</p>
//                   <button onClick={handleLogout} className="logout-btn w-full">
//                     Logout
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <Link to="/login" className="auth-btn login-btn w-full">Login</Link>
//                   <Link to="/signup" className="auth-btn signup-btn w-full">Sign Up</Link>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Chatbot Component */}
//       <Chatbot isOpen={chatbotOpen} setIsOpen={setChatbotOpen} />
//     </>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#121212] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-[#00FF88] text-2xl font-bold">CyberSentinel</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/features" className="nav-link">Features</Link>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/password-analyzer" className="nav-link">Password Analyzer</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/chatboter" className="nav-link">Chatbot</Link> {/* Updated Link */}
            </div>

            {/* Auth or User Info */}
            <div className="hidden md:flex space-x-4">
              {userEmail ? (
                <div className="flex items-center space-x-4">
                  <span className="text-[#00FF88]">{userEmail}</span>
                  <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="auth-btn login-btn">Login</Link>
                  <Link to="/signup" className="auth-btn signup-btn">Sign Up</Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#00FF88]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-[#1A1A1A] p-6 space-y-4">
            <Link to="/" className="block nav-link">Home</Link>
            <Link to="/features" className="block nav-link">Features</Link>
            <Link to="/dashboard" className="block nav-link">Dashboard</Link>
            <Link to="/password-analyzer" className="block nav-link">Password Analyzer</Link>
            <Link to="/contact" className="block nav-link">Contact</Link>
            <Link to="/chatboter" className="block nav-link">Chatbot</Link> {/* Updated Link */}

            {/* Mobile Auth or User Info */}
            <div className="flex flex-col space-y-4">
              {userEmail ? (
                <div className="text-center">
                  <p className="text-[#00FF88]">{userEmail}</p>
                  <button onClick={handleLogout} className="logout-btn w-full">
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="auth-btn login-btn w-full">Login</Link>
                  <Link to="/signup" className="auth-btn signup-btn w-full">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

