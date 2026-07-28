import React from 'react'

const services = [
    {
        title: 'Manage your daily tasks',
        description: 'Organize your to-do list, prioritize important work, and stay on top of every deadline.',
        icon: '✅',
    },
    {
        title: 'Build better habits',
        description: 'Create routines that stick with simple habit tracking and motivating daily streaks.',
        icon: '🌱',
    },
    {
        title: 'Track calories and health',
        description: 'Monitor meals, water intake, and calorie goals to support a healthier lifestyle.',
        icon: '🥗',
    },
    {
        title: 'Stay on schedule',
        description: 'Get reminders and plan your day so you never miss the things that matter most.',
        icon: '⏰',
    },
]

export default function Services() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                        Our services
                    </p>
                    <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
                        Everything you need to organize life with ease
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-300">
                        From task planning to health tracking, our app helps you stay productive, focused, and balanced every day.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-2xl">
                                {service.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white">{service.title}</h3>
                            <p className="text-sm leading-6 text-slate-300">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 rounded-3xl border border-blue-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-blue-950/40">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h2 className="mb-2 text-2xl font-semibold text-white">
                                Turn your goals into daily progress
                            </h2>
                            <p className="max-w-2xl text-slate-300">
                                Build a healthier routine, complete your tasks faster, and keep your habits growing one day at a time.
                            </p>
                        </div>
                        <button className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400">
                            Start Today
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
