"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";


const services = [
    {
        id: "01",
        title: "Web Design",
        description:
            "We create visually stunning, user-centric designs that elevate your digital presence and provide a seamless digital experience across all devices.",
        subItems: ["UI/UX Design", "Responsive Layouts", "Interactive Prototyping", "Design Systems"],
    },
    {
        id: "02",
        title: "Web Development",
        description:
            "We build high-performance, scalable, and secure websites and web applications tailored to your business goals using cutting-edge technologies.",
        subItems: ["Custom Web Apps", "E-commerce Solutions", "Performance Optimization", "Full-stack Support"],
    },
    {
        id: "03",
        title: "AI Automation",
        description:
            "We automate redundant business processes using intelligent AI solutions, enabling your team to focus on high-value tasks while increasing efficiency.",
        subItems: ["Workflow Automation", "LLM Integration", "Customer Engagement AI", "Process Optimization"],
    },
];

const ServiceRow = ({
    service,
    isOpen,
    onToggle,
    index,
}: {
    service: (typeof services)[0];
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={onToggle}
            className={cn(
                "group relative cursor-pointer overflow-hidden border-b border-white/10 transition-all duration-500",
                isOpen ? "rounded-3xl border-white/5 bg-white/5 backdrop-blur-xl" : "hover:bg-white/[0.02]"
            )}
        >
            <div className={cn("flex w-full items-center justify-between px-6 py-8 md:px-10 md:py-10")}>
                <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-sm font-medium tracking-widest text-white/40">
                        {service.id}
                    </span>
                    <h3
                        className={cn(
                            "text-3xl font-bold tracking-tight transition-all duration-300 md:text-5xl",
                            isOpen ? "text-aextera-coral scale-[1.02] origin-left" : "text-white group-hover:text-white/90"
                        )}
                    >
                        {service.title}
                    </h3>
                </div>
                <motion.div
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        backgroundColor: isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-2xl text-white transition-colors group-hover:border-white/30"
                >
                    +
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="grid gap-8 pb-10 pl-6 pr-6 md:grid-cols-2 md:pl-28 md:pr-10">
                            <p className="max-w-md text-lg leading-relaxed text-white/70">
                                {service.description}
                            </p>

                            <div className="flex flex-col gap-6">
                                <div className="flex flex-wrap gap-2">
                                    {service.subItems.map((item, idx) => (
                                        <motion.span
                                            key={item}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + idx * 0.05 }}
                                            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                                <a
                                    href="#works"
                                    className="group/link mt-2 inline-flex items-center gap-2 text-sm font-medium text-aextera-coral"
                                >
                                    <span className="border-b border-aextera-coral/30 pb-0.5 transition-colors group-hover/link:border-aextera-coral">
                                        See our work
                                    </span>
                                    <motion.span
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        →
                                    </motion.span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const Services = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="services" className="w-full bg-aextera-dark py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 max-w-2xl"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                        We Craft Services That{" "}
                        <span className="text-aextera-coral">Turn Brands</span>
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-white/60">
                        Our services help you create digital products and solve your
                        problems objectively, strategy, technology and analysis.
                    </p>
                </motion.div>

                {/* Accordion Services */}
                <div className="flex flex-col gap-2">
                    {services.map((service, index) => (
                        <ServiceRow
                            key={service.id}
                            service={service}
                            isOpen={openIndex === index}
                            onToggle={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
