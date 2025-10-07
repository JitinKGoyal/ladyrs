import AuthShell from "@/components/AuthShell";
import Link from "next/link";

export default function SignupPage() {
  return (
    <AuthShell mode="signup">
      <form className="space-y-6 max-w-md">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <div className="flex items-center gap-3 border-b border-gray-300 focus-within:border-rose-600 transition-colors">
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M20 21a8 8 0 10-16 0" /><circle cx="12" cy="7" r="4" /></svg>
            </span>
            <input type="text" className="w-full outline-none py-3 text-gray-700 placeholder:text-gray-400" placeholder="Full name" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <div className="flex items-center gap-3 border-b border-gray-300 focus-within:border-rose-600 transition-colors">
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M4 6l8 6 8-6" /><rect x="4" y="6" width="16" height="12" rx="2" /></svg>
            </span>
            <input type="email" className="w-full outline-none py-3 text-gray-700 placeholder:text-gray-400" placeholder="Email" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center gap-3 border-b border-gray-300 focus-within:border-rose-600 transition-colors">
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
              </span>
              <input type="password" className="w-full outline-none py-3 text-gray-700 placeholder:text-gray-400" placeholder="Password" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="flex items-center gap-3 border-b border-gray-300 focus-within:border-rose-600 transition-colors">
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
              </span>
              <input type="password" className="w-full outline-none py-3 text-gray-700 placeholder:text-gray-400" placeholder="Confirm password" />
            </div>
          </div>
        </div>
        <button type="submit" className="rounded-full px-8 py-3 text-white font-semibold shadow bg-gradient-to-r from-rose-600 to-fuchsia-600 hover:from-rose-700 hover:to-fuchsia-700">Sign Up</button>

      </form>
    </AuthShell>
  );
}


