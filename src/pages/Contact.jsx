import React from 'react'

export default function Contact() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                        Contact us
                    </p>
                    <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
                        We’d love to hear from you
                    </h1>
                    <p className="mb-8 max-w-xl text-lg text-slate-300">
                        Share your thoughts, questions, or feedback. Our team will get back to you as soon as possible.
                    </p>

                    <div className="space-y-4 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                        <div>
                            <h2 className="text-lg font-semibold text-white">Email</h2>
                            <p className="text-slate-300">support@reattodo.com</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-white">Phone</h2>
                            <p className="text-slate-300">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-white">Location</h2>
                            <p className="text-slate-300">New York, USA</p>
                        </div>
                    </div>
                </div>

                <form className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-blue-950/40">
                    <div className="mb-6 grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-400 focus:border-blue-400"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-400"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-slate-200">Subject</label>
                        <input
                            type="text"
                            placeholder="What is this about?"
                            className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-400"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-slate-200">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message here..."
                            className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
