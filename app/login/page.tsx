import AuthShell from "@/components/AuthShell";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  return (
    <AuthShell mode="login">
      <form className="space-y-6 max-w-md">
        <div className="space-y-2">
          <div className="flex items-center gap-3 border-b border-gray-300 transition-colors" style={{ borderColor: "#e5e7eb" }}>
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M4 6l8 6 8-6" /><rect x="4" y="6" width="16" height="12" rx="2" /></svg>
            </span>
            <input type="email" className="w-full outline-none py-3 text-gray-700 placeholder:text-gray-400" placeholder="Email" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3 border-b border-gray-300 transition-colors" style={{ borderColor: "#e5e7eb" }}>
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            </span>
            <input type="password" className="w-full outline-none py-3 text-gray-700 placeholder:text-gray-400" placeholder="Password" />
          </div>
        </div>

        <div className="flex justify-between">

          <div className="flex items-center justify-between text-sm">
            <a className="text-rose-600 hover:text-rose-700 font-medium" href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="rounded-full px-8 py-3 text-white font-semibold shadow" style={{ background: "linear-gradient(95deg, #55142A -13%, #c4569e 47%)" }}>LOGIN</button>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-gray-600">
          <div>Or login with</div>
          <div className="flex gap-2">

            <button type="button" aria-label="Login with Google" className="p-2 rounded-full px-4 shadow" style={{ background: "gray", cursor: 'pointer' }}>
              <FaGoogle className="text-white w-5 h-5" />
            </button>
            <button type="button" aria-label="Login with Facebook" className="p-2 rounded-full px-4 shadow" style={{ background: "gray", cursor: 'pointer' }}>
              <FaFacebook className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
    </AuthShell>
  );
}


