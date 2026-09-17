import React from "react";

export function ServiceActionLink() {
    return (
        <div className="pt-4">
            <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors group/btn"
            >
                <span className="border-b border-white group-hover/btn:border-white/60 pb-0.5">
                    Unverbindlich anfragen
                </span>
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                </span>
            </a>
        </div>
    );
}