"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraGlow } from "./aextera-theme";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

const socials = [
    { name: "LinkedIn", icon: IconBrandLinkedin, href: "#" },
    { name: "Twitter", icon: IconBrandTwitter, href: "#" },
    { name: "Instagram", icon: IconBrandInstagram, href: "#" },
    { name: "GitHub", icon: IconBrandGithub, href: "#" },
];

export const Contact = () => {
    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden bg-aextera-dark py-32"
        >
            <AuroraGlow color="coral" className="left-0 bottom-0 opacity-20 blur-[120px]" />
            <AuroraGlow color="blue" className="right-0 top-0 opacity-20 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                            Let's start a <br />
                            <span className="text-aextera-coral">conversation.</span>
                        </h2>

                        <form className="flex flex-col gap-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-white/60">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 focus:border-aextera-coral/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-aextera-coral/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white/60">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 focus:border-aextera-coral/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-aextera-coral/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-white/60">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 focus:border-aextera-coral/50 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-aextera-coral/50 transition-all"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-2 w-full rounded-xl bg-aextera-coral py-4 text-center font-bold text-white shadow-lg shadow-aextera-coral/20 transition-all hover:bg-aextera-coral/90 hover:shadow-aextera-coral/40"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Right Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col justify-center space-y-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-3xl md:p-12"
                    >
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-white">Contact Details</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-aextera-coral">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-sm font-medium text-white/40">Email us at</p>
                                        <a href="mailto:sushensame@gmail.com" className="text-xl font-medium text-white transition-colors hover:text-aextera-coral">
                                            sushensame@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-aextera-coral">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-sm font-medium text-white/40">Chat with us</p>
                                        <p className="text-lg text-white/80">
                                            Our team is ready to help you with any questions or project ideas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-6 text-lg font-bold text-white">Follow Us</h3>
                            <div className="flex gap-4">
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:border-aextera-coral hover:bg-aextera-coral hover:text-white"
                                    >
                                        <span className="sr-only">{social.name}</span>
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
