import React from 'react';
import { motion } from 'framer-motion';
import { NEWS } from '../data/personal';

// ──────────────────────────────────────────────
// News & Updates section
// Renders a vertical timeline of NEWS entries from data/personal.ts
// To add / remove / edit news: change the NEWS array in data/personal.ts
// ──────────────────────────────────────────────

const TYPE_COLORS: Record<string, string> = {
    NEWS: '#FF7F27',
    CONFERENCE: '#3B82F6',
    JOURNAL: '#8B5CF6',
    VISITING: '#10B981',
    AWARD: '#F59E0B',
};

// renders **bold** segments
function renderBold(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="text-black">{part.slice(2, -2)}</strong>;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
    });
}

const News: React.FC = () => {
    return (
        <section className="relative w-full bg-white py-20 px-6 md:px-16 overflow-hidden">
            {/* Floor giant text echo, similar style to other sections */}
            <div className="absolute inset-x-0 top-12 pointer-events-none select-none flex justify-center">
                <span className="text-[160px] md:text-[220px] font-albert-black text-gray-100 leading-none tracking-tighter whitespace-nowrap">
                    NEWS
                </span>
            </div>

            <div className="relative max-w-5xl mx-auto">
                <div className="mb-16 flex items-end justify-between">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-albert-black tracking-tighter text-black mb-3">
                            News &amp; Updates
                        </h2>
                        <p className="font-mono text-sm text-gray-500 tracking-widest uppercase">
                            Recent papers · talks · visits
                        </p>
                    </div>
                    <span className="hidden md:block font-mono text-xs text-gray-400 tracking-widest">
                        {NEWS.length} ENTRIES
                    </span>
                </div>

                <ol className="relative border-l border-gray-200 pl-8 space-y-5">
                    {NEWS.map((n, i) => {
                        const dotColor = TYPE_COLORS[n.type] || '#666666';
                        return (
                            <motion.li
                                key={i}
                                className="relative"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.35, delay: Math.min(i * 0.02, 0.2) }}
                            >
                                {/* timeline dot */}
                                <span
                                    className="absolute -left-[42px] top-1.5 w-3 h-3 rounded-full ring-4 ring-white"
                                    style={{ backgroundColor: dotColor }}
                                />
                                <div className="flex items-center gap-2 mb-1">
                                    <time className="font-mono text-[11px] tracking-widest text-gray-500">{n.date}</time>
                                    <span
                                        className="px-1.5 py-0.5 text-[9px] font-bold tracking-widest rounded-full border"
                                        style={{ color: dotColor, borderColor: dotColor + '55' }}
                                    >
                                        {n.type}
                                    </span>
                                </div>
                                <p className="text-sm md:text-[15px] font-albert-regular text-gray-700 leading-snug">
                                    {renderBold(n.text)}
                                    {n.link && (
                                        <>
                                            {' '}
                                            <a
                                                href={n.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-mono text-[12px] font-semibold text-black hover:text-gray-600 transition-colors underline underline-offset-2 decoration-gray-400 hover:decoration-black"
                                            >
                                                [link]
                                            </a>
                                        </>
                                    )}
                                </p>
                            </motion.li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};

export default News;
