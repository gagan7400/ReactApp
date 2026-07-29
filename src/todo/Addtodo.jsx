import { useState } from 'react';

const Addtodo = () => {
    const [formData, setFormData] = useState({
        taskName: '',
        taskDate: '',
        taskDeadline: '',
        taskDescription: '',
        taskPriority: 'P1',
        status: 'pending',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Todo data:', formData);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-10 text-white">
            <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-blue-950/40 backdrop-blur-sm">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-white">Add New Task</h2>
                    <p className="mt-2 text-sm text-slate-300">Create a new todo item with details</p>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-300">Task Name</label>
                        <input
                            type="text"
                            name="taskName"
                            value={formData.taskName}
                            onChange={handleChange}
                            placeholder="Enter task name"
                            className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Task Date</label>
                        <input
                            type="date"
                            name="taskDate"
                            value={formData.taskDate}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Task Deadline</label>
                        <input
                            type="date"
                            name="taskDeadline"
                            value={formData.taskDeadline}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                            required
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-300">Task Description</label>
                        <textarea
                            name="taskDescription"
                            value={formData.taskDescription}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Enter task description"
                            className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Task Priority</label>
                        <select
                            name="taskPriority"
                            value={formData.taskPriority}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                        >
                            <option value="P0">P0</option>
                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                        >
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>
                            <option value="uncomplete">Uncomplete</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addtodo;
