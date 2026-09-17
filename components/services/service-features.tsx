import React from "react";

interface ServiceFeaturesProps {
    features: string[];
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
    return (
        <ul className="space-y-2.5 pt-2">
            {features.map((feature, fIndex) => (
                <li
                    key={fIndex}
                    className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-white/95"
                >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20 border border-white/40 text-white text-[10px]">
                        ✓
                    </span>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    );
}