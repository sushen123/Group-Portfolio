"use client";

import { motion } from "motion/react";
import React from "react";
import { Badge } from "./aextera-theme";

export const Mission = () => {
    return (
        <section className="w-full py-24 bg-white dark:bg-aextera-dark">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] w-full rounded-3xl overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071823991-b59fe57d3891?q=80&w=2670&auto=format&fit=crop"
                            alt="Our Mission"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-aextera-coral/10 backdrop-blur-[2px]" />
                    </motion.div>

                    <div>
                        <Badge className="mb-4">Our Mission</Badge>
                        <h2 className="mb-8 text-4xl font-bold tracking-tight text-aextera-dark md:text-6xl dark:text-white leading-tight">
                            Design that Speaks, <br />
                            <span className="text-aextera-coral">Code that Performs.</span>
                        </h2>
                        <p className="mb-8 text-xl text-black/80 dark:text-white/80 leading-relaxed">
                            We believe that premium digital experiences are born at the intersection of stunning aesthetics and robust engineering.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-aextera-dark dark:text-white mb-2 underline decoration-aextera-coral underline-offset-4">Innovation</h4>
                                <p className="text-sm text-black/60 dark:text-white/60">Pushing the boundaries of what is possible with AI and Web technologies.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-aextera-dark dark:text-white mb-2 underline decoration-aextera-coral underline-offset-4">Quality</h4>
                                <p className="text-sm text-black/60 dark:text-white/60">Pixel-perfect designs and clean, scalable code in every release.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
