"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraGlow } from "./aextera-theme";

import { Member } from "@/lib/data";
import Image from "next/image";

interface MembersProps {
    members: Member[];
}

export const Members = ({ members }: MembersProps) => {
    return (
        <section id="members" className="relative w-full overflow-hidden bg-aextera-dark py-24 md:py-32">
            <AuroraGlow color="purple" className="right-0 top-1/2 -translate-y-1/2 opacity-20 blur-[150px]" />

            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Meet the <span className="text-aextera-coral">Creative Minds</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-white/50">
                        Our diverse team of experts is dedicated to bringing your vision to life with passion and precision.
                    </p>
                </motion.div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 group-hover:border-aextera-coral/30 group-hover:shadow-aextera-coral/10">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                                {/* Social Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 flex translate-y-full justify-center gap-4 p-6 transition-transform duration-300 group-hover:translate-y-0">
                                    {member.socials && Object.entries(member.socials).map(([platform, link]) => (
                                        link && (
                                            <a
                                                key={platform}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-aextera-coral hover:text-white"
                                            >
                                                <span className="sr-only">{platform}</span>
                                                {/* Simple Icon Placeholder - Replace with actual icons if available */}
                                                <div className="h-4 w-4 rounded-full bg-current" />
                                            </a>
                                        )
                                    ))}
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-aextera-coral">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium text-white/40">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
