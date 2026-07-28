import React from 'react'

const highlights = [
    {
        title: 'Plan smarter',
        description: 'Create clear daily plans and break big goals into manageable tasks.',
    },
    {
        title: 'Stay focused',
        description: 'Keep your priorities visible and reduce distractions with simple organization.',
    },
    {
        title: 'Track progress',
        description: 'Monitor your achievements and build momentum with every completed task.',
    },
]

export default function About() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                            About our app
                        </p>
                        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
                            Make your work easier with a smarter task manager
                        </h1>
                        <p className="mb-6 text-lg leading-8 text-slate-300">
                            Our task manager is designed to help individuals and teams stay organized, reduce stress, and turn daily goals into real progress. Whether you’re planning your day or managing a big project, everything is simpler when your tasks are in one place.
                        </p>
                        <button className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400">
                            Get Started
                        </button>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-blue-950/40 backdrop-blur-sm">
                        <h2 className="mb-4 text-2xl font-semibold text-white">Why people love it</h2>
                        <div className="space-y-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                                    <h3 className="mb-1 text-lg font-semibold text-blue-300">{item.title}</h3>
                                    <p className="text-sm leading-6 text-slate-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 rounded-3xl border border-blue-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-blue-950/40">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-white">Simple and clean</h3>
                            <p className="text-slate-300">A beautiful interface that keeps your focus on what matters most.</p>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-white">Reliable workflow</h3>
                            <p className="text-slate-300">Organize your tasks in a way that supports productivity every single day.</p>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-semibold text-white">Built for growth</h3>
                            <p className="text-slate-300">Whether you are a student, freelancer, or team lead, it adapts to your routine.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
