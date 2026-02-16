"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraGlow, Badge } from "./aextera-theme";

export const Hero = () => {
    return (
        <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-aextera-dark pt-32 pb-20">
            {/* Background Glows */}
            <AuroraGlow color="coral" className="-top-40 left-1/4 opacity-50 blur-[150px]" />
            <AuroraGlow color="purple" className="top-20 -right-40 opacity-40 blur-[150px]" />
            <AuroraGlow color="blue" className="bottom-20 -left-40 opacity-40 blur-[150px]" />

            {/* Main Content */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.2,
                        },
                    },
                }}
                className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 text-center"
            >
                {/* Heading */}
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
                    }}
                    className="flex flex-col text-6xl font-extrabold leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[7rem]"
                >
                    <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Creative</span>
                    <span className="italic font-light text-white/80">Digital</span>
                    <span className="flex items-center justify-center gap-4">
                        Solution{" "}
                        <span className="relative inline-block text-aextera-coral">
                            Agency
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.2, duration: 0.8, ease: "circOut" }}
                                className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-aextera-coral"
                            />
                        </span>
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                    className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
                >
                    We craft <span className="text-white font-medium">premium digital experiences</span> and intelligent AI solutions,
                    automating workflows to accelerate your business success.
                </motion.p>

                {/* Tags */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                    className="mt-10 flex flex-wrap justify-center gap-3"
                >
                    {["Web Design", "Web Development", "AI Automation"].map(
                        (tag) => (
                            <motion.div
                                key={tag}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                <Badge className="border-white/10 bg-white/5 py-2 px-5 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                                    {tag}
                                </Badge>
                            </motion.div>
                        )
                    )}
                </motion.div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="h-2 w-full rounded-full bg-white/60"
                    />
                </div>
            </motion.div>
        </section>
    );
};
