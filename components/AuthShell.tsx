"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type AuthMode = "login" | "signup";

export default function AuthShell({
    mode,
    children,
}: {
    mode: AuthMode;
    children: React.ReactNode;
}) {
    const router = useRouter();

    const headings = useMemo(
        () => ({
            login: { title: "LOGIN", secondary: "SIGN IN" },
            signup: { title: "SIGN IN", secondary: "LOGIN" },
        }),
        []
    );

    const isLogin = mode === "login";
    const [active, setActive] = useState<AuthMode>(mode);

    useEffect(() => {
        // Sync local animation state when route changes externally
        setActive(mode);
    }, [mode]);

    const handleNavigate = (target: AuthMode) => {
        if (target === mode) return; // already there
        // Animate first
        setActive(target);
        // Navigate after a short delay to allow animation to play
        setTimeout(() => {
            router.push(target === "login" ? "/login" : "/signup");
        }, 260);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#4a0834]">
            <div className="w-full max-w-5xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5 md:h-[560px]">
                {/* Decorative left panel with sliding capsule */}
                <div
                    className="relative hidden md:block md:col-span-2"
                    style={{
                        backgroundImage:
                            "linear-gradient(135deg, rgba(225,29,72,0.75), rgba(217,70,239,0.65)), url('/images/auth-bg.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* angled layers */}
                    <div className="absolute inset-0 opacity-40">
                        <div className="absolute -left-40 top-0 bottom-0 w-[70%] rotate-45 bg-white/10" />
                        <div className="absolute -left-56 top-0 bottom-0 w-[70%] rotate-45 bg-white/20" />
                        <div className="absolute -left-72 top-0 bottom-0 w-[70%] rotate-45 bg-black/10" />
                    </div>

                    {/* Vertical logo filling the section, rotated 90deg */}
                    <div className="absolute inset-y-0 -left-15 h-full w-[340px] -rotate-90 origin-center opacity-90">
                        <Image src="/images/logo.png" alt="logo" fill className="object-contain" />
                    </div>

                    {/* Sliding capsule on the right edge with both labels */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-40 select-none">
                        {/* White capsule background that slides */}
                        <motion.div
                            initial={false}
                            animate={{ top: active === "login" ? -12 : 75 }}
                            transition={{ type: "spring", stiffness: 320, damping: 20 }}
                            className="absolute right-[-111px] h-24"
                            style={{ width: 300, top: 0 }}
                        >
                            <Image
                                src="/images/capsule.svg"
                                alt="capsule"
                                fill
                                className="object-contain pointer-events-none"
                                style={{ transform: "scale(1.8)" }}
                            />
                        </motion.div>

                        {/* Text labels stacked vertically */}
                        <div className="absolute right-[-15px] w-30 top-0 flex flex-col gap-6">
                            <button
                                className={`h-16 flex items-center justify-center font-bold tracking-wider transition-colors ${active === "login" ? "text-rose-700" : "text-white"
                                    }`}
                                onClick={() => handleNavigate("login")}
                            >
                                LOGIN
                            </button>
                            <button
                                className={`h-16 flex items-center justify-center font-bold tracking-wider transition-colors ${active === "signup" ? "text-rose-700" : "text-white"
                                    }`}
                                onClick={() => handleNavigate("signup")}
                            >
                                SIGN IN
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right panel with form container */}
                <div className="relative p-8 sm:p-12 bg-white h-full overflow-y-auto md:col-span-3">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-600 to-fuchsia-600 grid place-items-center shadow-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="1.6"
                                className="w-9 h-9"
                            >
                                <path d="M20 21a8 8 0 10-16 0" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold tracking-wide text-rose-700">
                            {isLogin ? headings.login.title : headings.signup.title}
                        </h1>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mode}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}


