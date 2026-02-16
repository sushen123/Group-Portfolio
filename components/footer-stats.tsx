"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import React, { useEffect, useRef } from "react";
import { AuroraGlow } from "./aextera-theme";

const stats = [
    { label: "Client Satisfication", value: 95, suffix: "%" },
    { label: "Projects Completed", value: 1, suffix: "K+" },
    { label: "Revenue Generated", value: 2, suffix: "M+" },
];

function AnimatedCounter({
    value,
    suffix,
    duration = 2.5,
}: {
    value: number;
    suffix: string;
    duration?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const motionVal = useMotionValue(0);
    const rounded = useTransform(motionVal, (v) => Math.round(v));

    useEffect(() => {
        if (inView) {
            animate(motionVal, value, { duration, ease: [0.34, 1.56, 0.64, 1] }); // Elastic ease out
        }
    }, [inView, motionVal, value, duration]);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (v) => {
            if (ref.current) {
                ref.current.textContent = `${v}${suffix}`;
            }
        });
        return unsubscribe;
    }, [rounded, suffix]);

    return (
        <span ref={ref} className="text-6xl font-bold tracking-tighter text-white md:text-7xl lg:text-8xl tabular-nums">
            0{suffix}
        </span>
    );
}

export const Achievements = () => {
    return (
        <section className="relative w-full overflow-hidden bg-aextera-dark py-32">
            <AuroraGlow color="coral" className="left-1/2 top-0 -translate-x-1/2 opacity-30 blur-[100px]" />

            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <motion.div
                    className="mx-auto mb-20 max-w-3xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                        We Craft Some{" "}
                        <span className="text-aextera-coral">Fascinating Insights</span>{" "}
                        From Our Journey
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        Numbers that speak for our dedication, expertise, and the trust our clients place in us.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center text-center pt-8 md:pt-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                        >
                            <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                            />
                            <span className="mt-4 text-base font-medium uppercase tracking-widest text-white/40">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer id="contact" className="w-full bg-aextera-dark border-t border-white/5">
            {/* CTA Band */}
            <div className="relative overflow-hidden">
                <AuroraGlow color="blue" className="right-0 top-0 opacity-20" />
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-20 md:flex-row">
                    <div className="max-w-2xl">
                        <h3 className="text-3xl font-bold text-white md:text-5xl leading-tight">
                            Have a project in mind?
                            <br />
                            <span className="text-white/40">Let's build it together.</span>
                        </h3>
                    </div>

                    <motion.a
                        href="mailto:contact@aextera.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-colors hover:bg-white/90"
                    >
                        Contact Us
                        <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 3 }}
                            className="ml-2"
                        >
                            →
                        </motion.span>
                    </motion.a>
                </div>
            </div>

            {/* Main Footer */}
            <div className="border-t border-white/10 bg-aextera-darkgray">
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        {/* Logo & Description */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-lg bg-aextera-coral flex items-center justify-center">
                                    <span className="font-bold text-white text-lg">A</span>
                                </div>
                                <span className="text-2xl font-bold text-white tracking-tight">
                                    Aext<span className="text-aextera-coral">Era</span>
                                </span>
                            </div>
                            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                                Unleashing advanced digital solutions to boost your productivity and elevate your brand presence.
                            </p>
                        </div>

                        {/* Tagline */}
                        <div className="flex flex-col items-start gap-4 md:items-center md:justify-center">
                            <p className="text-xl font-semibold text-white">
                                Save time. Get Started Now.
                            </p>
                            <a href="mailto:hello@aextera.com" className="text-white/60 hover:text-white transition-colors">
                                hello@aextera.com
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col items-start gap-6 md:items-end">
                            <p className="text-sm font-medium text-white/60">Follow Us</p>
                            <div className="flex gap-6">
                                {[
                                    { name: "Facebook", href: "#" },
                                    { name: "LinkedIn", href: "#" },
                                    { name: "YouTube", href: "#" },
                                    { name: "Instagram", href: "#" },
                                ].map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-medium text-white/50 transition-colors hover:text-aextera-coral hover:underline underline-offset-4 decoration-aextera-coral/50"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 bg-black/20">
                    <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-center text-xs text-white/30">
                            &copy; {new Date().getFullYear()} AextEra. All Rights Reserved.
                        </p>
                        <div className="flex gaps-6">
                            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">Privacy Policy</a>
                            <span className="text-white/10 mx-4">|</span>
                            <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
