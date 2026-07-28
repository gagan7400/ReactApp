import React from 'react'

const features = [
    {
        title: 'Smart task planning',
        description: 'Break your day into focused tasks and finish your priorities without feeling overwhelmed.',
    },
    {
        title: 'Habit tracking',
        description: 'Build consistency with daily routines and visible progress that keeps you motivated.',
    },
    {
        title: 'Healthy routines',
        description: 'Track wellness goals, calories, and mindful habits alongside your projects.',
    },
]

export default function Home() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-12">
                <section className="grid items-center gap-10 rounded-4xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-blue-950/40 backdrop-blur-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                            Your productivity companion
                        </p>
                        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Organize your life, one task at a time.
                        </h1>
                        <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
                            Stay on top of your to-do list, build better habits, and manage your day with a beautiful and simple task manager designed for modern life.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400">
                                Start Managing Tasks
                            </button>
                            <button className="rounded-full border border-white/20 px-6 py-3 font-semibold text-slate-200 transition hover:bg-white/10">
                                Explore Features
                            </button>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-blue-400/20 bg-slate-900/70 p-6 shadow-lg shadow-black/20">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Today’s Focus</h2>
                            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-200">4 tasks left</span>
                        </div>
                        <div className="space-y-3">
                            {['Finish project proposal', 'Go for a 20 min walk', 'Track meals and water', 'Review habit streak'].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3">
                                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                                    <span className="text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur-sm">
                            <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                            <p className="text-slate-300">{feature.description}</p>
                        </div>
                    ))}
                </section>

                <section className="rounded-4xl border border-blue-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-blue-950/40">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h2 className="mb-2 text-2xl font-semibold text-white">Ready to build a better routine?</h2>
                            <p className="max-w-2xl text-slate-300">
                                Join thousands of users who are turning their goals into habits with a simple and motivating task manager.
                            </p>
                        </div>
                        <button className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400">
                            Join Now
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}
