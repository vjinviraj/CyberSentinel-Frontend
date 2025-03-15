import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

const GoogleSignInButton = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-[#00AEEF] text-black px-5 py-2 rounded-lg hover:bg-[#00FF88] transition shadow-md"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;