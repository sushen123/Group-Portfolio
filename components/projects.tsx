"use client";

import { motion } from "motion/react";
import React from "react";
import { Badge } from "./aextera-theme";

import { Project } from "@/lib/data";
import Image from "next/image";

interface ProjectsProps {
    projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
    return (
        <section id="works" className="w-full bg-aextera-dark py-32 text-white">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
                        Selected <span className="text-white/40 italic">Works</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-white/60 md:text-xl leading-relaxed">
                        Explore our portfolio of thoughtful, functional digital products crafted to
                        solve problems and elevate brand experiences.
                    </p>
                </motion.div>

                <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-aextera-dark/20 transition-colors duration-500 group-hover:bg-transparent" />

                                {/* Overlay Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-sm font-medium text-white shadow-xl">
                                        View Project
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-2">
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            className="border-white/10 bg-white/5 text-xs text-white/60 transition-colors group-hover:bg-white/10 group-hover:text-white/80"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <h3 className="mb-3 text-2xl font-bold md:text-3xl group-hover:text-aextera-coral transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-base text-white/50 leading-relaxed max-w-md">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
