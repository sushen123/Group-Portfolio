"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const GlassCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl",
                className
            )}
        >
            {children}
        </div>
    );
};

export const AuroraGlow = ({
    className,
    color = "blue",
}: {
    className?: string;
    color?: "blue" | "purple" | "coral";
}) => {
    const colorMap = {
        blue: "bg-blue-500/20",
        purple: "bg-purple-500/20",
        coral: "bg-aextera-coral/20",
    };

    return (
        <div
            className={cn(
                "absolute -z-10 h-[500px] w-[500px] rounded-full blur-[120px]",
                colorMap[color],
                className
            )}
        />
    );
};

export const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <span className={cn("rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-black/60 backdrop-blur-sm dark:text-white/60", className)}>
            {children}
        </span>
    );
};
