import React, { useState, useMemo, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PUBLICATIONS } from '../data/personal';
import PaperPlaceholder from '../components/PaperPlaceholder';

// ──────────────────────────────────────────────
// Publications — academic vertical list with hover preview.
// Preview card is absolutely positioned next to the hovered row,
// not stuck to viewport top.
// ──────────────────────────────────────────────

const CATEGORY_META: Record<string, { title: string; subtitle: string }> = {
    conference: { title: 'Conference Papers', subtitle: 'Peer-reviewed conferences' },
    journal: { title: 'Journal Papers', subtitle: 'Peer-reviewed journals' },
    collaborative: { title: 'Collaborative Papers', subtitle: 'Co-authored work' },
};

const CATEGORY_ORDER: Array<'conference' | 'journal' | 'collaborative'> = [
    'conference',
    'journal',
    'collaborative',
];

const PREVIEW_HEIGHT = 460; // approx height in px, used for clamping inside the list area

const Publications: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [previewTop, setPreviewTop] = useState(0);
    const hovered = PUBLICATIONS.find((p) => p.id === hoveredId);

    const listRef = useRef<HTMLDivElement>(null);

    const grouped = useMemo(() => {
        const out: Record<string, typeof PUBLICATIONS> = {
            conference: [],
            journal: [],
            collaborative: [],
        };
        for (const p of PUBLICATIONS) {
            out[p.category].push(p);
        }
        return out;
    }, []);

    // Recompute preview top when hovered row changes, using offsetTop relative to list container
    useLayoutEffect(() => {
        if (hoveredId == null || !listRef.current) return;
        const row = listRef.current.querySelector<HTMLElement>(`[data-pub-row="${hoveredId}"]`);
        if (!row) return;
        const containerRect = listRef.current.getBoundingClientRect();
        const rowRect = row.getBoundingClientRect();
        const desiredTop = rowRect.top - containerRect.top; // align preview top with row top
        // Clamp so the preview doesn't overflow below the list container
        const maxTop = Math.max(0, listRef.current.offsetHeight - PREVIEW_HEIGHT);
        setPreviewTop(Math.max(0, Math.min(desiredTop, maxTop)));
    }, [hoveredId]);

    return (
        <section className="relative w-full bg-white py-32 px-6 md:px-16 overflow-hidden">
            <div id="projects-deck" className="absolute top-0" />

            {/* Floor giant text echo */}
            <div className="absolute inset-x-0 top-8 pointer-events-none select-none flex justify-center">
                <span className="text-[140px] md:text-[200px] font-albert-black text-gray-100 leading-none tracking-tighter whitespace-nowrap">
                    PAPERS
                </span>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-albert-black tracking-tighter text-black mb-3">
                            Publications
                        </h2>
                        <p className="font-mono text-sm text-gray-500 tracking-widest uppercase">
                            {PUBLICATIONS.length} papers · {grouped.conference.length} conf ·{' '}
                            {grouped.journal.length} journal · {grouped.collaborative.length} collab
                        </p>
                    </div>
                    <span className="font-mono text-xs text-gray-400 tracking-widest uppercase">
                        Hover a row to preview · click to open
                    </span>
                </div>

                {/* relative container so the absolute preview can position itself */}
                <div
                    ref={listRef}
                    className="relative grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20"
                >
                    {/* Left: grouped vertical list */}
                    <div className="space-y-16">
                        {CATEGORY_ORDER.map((cat) => {
                            const pubs = grouped[cat];
                            if (!pubs || pubs.length === 0) return null;
                            const meta = CATEGORY_META[cat];
                            return (
                                <div key={cat}>
                                    <div className="mb-4 flex items-baseline gap-4">
                                        <h3 className="font-albert-black text-2xl md:text-3xl text-black tracking-tight">
                                            {meta.title}
                                        </h3>
                                        <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
                                            {meta.subtitle} · {pubs.length}
                                        </span>
                                    </div>

                                    <ol>
                                        {pubs.map((pub, i) => {
                                            const isHovered = hoveredId === pub.id;
                                            const isDimmed = hoveredId !== null && !isHovered;

                                            const RowInner = (
                                                <motion.li
                                                    data-pub-row={pub.id}
                                                    className="group relative border-t border-gray-200 py-6 cursor-pointer"
                                                    onMouseEnter={() => setHoveredId(pub.id)}
                                                    onMouseLeave={() =>
                                                        setHoveredId((cur) => (cur === pub.id ? null : cur))
                                                    }
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: '-50px' }}
                                                    transition={{ duration: 0.5, delay: Math.min(i * 0.03, 0.2) }}
                                                    animate={{ opacity: isDimmed ? 0.3 : 1 }}
                                                >
                                                    <motion.span
                                                        className="absolute left-0 top-0 h-full w-1 origin-top"
                                                        style={{ backgroundColor: pub.color }}
                                                        initial={{ scaleY: 0 }}
                                                        animate={{ scaleY: isHovered ? 1 : 0 }}
                                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                                    />

                                                    <div className="grid grid-cols-[70px_1fr_auto] gap-3 md:gap-6 items-start pl-4">
                                                        <span className="font-mono text-xs md:text-sm text-gray-500 tracking-widest pt-1">
                                                            {pub.year}
                                                        </span>

                                                        <div className="min-w-0">
                                                            <h4
                                                                className="font-albert-black text-lg md:text-xl text-black leading-snug tracking-tight transition-colors duration-300"
                                                                style={{ color: isHovered ? pub.color : undefined }}
                                                            >
                                                                {pub.title}
                                                            </h4>
                                                            <p className="mt-1.5 font-albert-regular text-xs md:text-sm text-gray-600 leading-snug">
                                                                {pub.client}
                                                            </p>
                                                        </div>

                                                        <span
                                                            className="hidden md:inline-block whitespace-nowrap font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border self-start mt-1"
                                                            style={{ color: pub.color, borderColor: pub.color + '55' }}
                                                        >
                                                            {pub.label}
                                                        </span>
                                                    </div>

                                                    <div className="md:hidden mt-2 pl-4">
                                                        <span
                                                            className="inline-block font-mono text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded-full border"
                                                            style={{ color: pub.color, borderColor: pub.color + '55' }}
                                                        >
                                                            {pub.label}
                                                        </span>
                                                    </div>
                                                </motion.li>
                                            );

                                            return pub.link ? (
                                                <a
                                                    key={pub.id}
                                                    href={pub.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block"
                                                >
                                                    {RowInner}
                                                </a>
                                            ) : (
                                                <React.Fragment key={pub.id}>{RowInner}</React.Fragment>
                                            );
                                        })}
                                        <li className="border-t border-gray-200" />
                                    </ol>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: preview that follows the hovered row (desktop only) */}
                    <aside className="hidden lg:block relative">
                        <AnimatePresence>
                            {hovered && (
                                <motion.div
                                    key={hovered.id}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0, top: previewTop }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{
                                        opacity: { duration: 0.2 },
                                        x: { duration: 0.2 },
                                        top: { type: 'spring', stiffness: 200, damping: 28, mass: 0.6 },
                                    }}
                                    className="absolute left-0 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white"
                                    style={{ top: previewTop }}
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                                        <PaperPlaceholder
                                            venueShort={hovered.venueShort}
                                            year={hovered.year}
                                            title={hovered.title}
                                            color={hovered.color}
                                            img={hovered.img}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div
                                            className="font-mono text-[11px] tracking-widest uppercase mb-2"
                                            style={{ color: hovered.color }}
                                        >
                                            {hovered.label}
                                        </div>
                                        <p className="font-albert-regular text-sm text-gray-700 leading-relaxed">
                                            {hovered.desc}
                                        </p>
                                        {hovered.tools && hovered.tools.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {hovered.tools.map((t: string, j: number) => (
                                                    <span
                                                        key={j}
                                                        className="px-2.5 py-0.5 text-[10px] font-mono tracking-widest uppercase rounded border border-gray-200 text-gray-500"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {hovered.link && (
                                            <a
                                                href={hovered.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-black hover:underline underline-offset-4"
                                            >
                                                Read paper ↗
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* hint when nothing hovered, pinned at top */}
                        {!hovered && (
                            <div className="sticky top-32 rounded-2xl border border-dashed border-gray-200 p-8 text-center">
                                <div className="font-mono text-xs tracking-widest uppercase text-gray-400">
                                    Hover a paper for preview
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Publications;
