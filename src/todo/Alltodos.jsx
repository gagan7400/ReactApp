const Alltodos = () => {
    const todos = [
        {
            id: 1,
            taskName: 'Design Homepage',
            taskDate: '2026-07-29',
            taskDeadline: '2026-08-02',
            taskDescription: 'Create the landing page layout and wire up the hero section.',
            taskPriority: 'P0',
            status: 'pending',
        },
        {
            id: 2,
            taskName: 'Prepare API Integration',
            taskDate: '2026-07-30',
            taskDeadline: '2026-08-05',
            taskDescription: 'Connect the frontend to the backend endpoints for todo management.',
            taskPriority: 'P1',
            status: 'complete',
        },
        {
            id: 3,
            taskName: 'Write Unit Tests',
            taskDate: '2026-07-31',
            taskDeadline: '2026-08-06',
            taskDescription: 'Add tests for the main todo CRUD actions.',
            taskPriority: 'P2',
            status: 'uncomplete',
        },
    ];

    const statusColors = {
        pending: 'bg-yellow-100 text-yellow-800',
        complete: 'bg-green-100 text-green-800',
        uncomplete: 'bg-red-100 text-red-800',
    };

    const priorityColors = {
        P0: 'bg-red-600 text-white',
        P1: 'bg-blue-600 text-white',
        P2: 'bg-gray-600 text-white',
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-10 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-white">All Todos</h2>
                    <p className="mt-2 text-sm text-slate-300">A simple overview of all your tasks</p>
                </div>

                <div className="grid gap-6">
                    {todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-blue-950/40 backdrop-blur-sm"
                        >
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                <div className="flex-1">
                                    <div className="mb-3 flex flex-wrap items-center gap-2">
                                        <h3 className="text-xl font-semibold text-white">{todo.taskName}</h3>
                                        <span className={`rounded-full px-3 py-1 text-sm font-medium ${priorityColors[todo.taskPriority]}`}>
                                            {todo.taskPriority}
                                        </span>
                                        <span className={`rounded-full px-3 py-1 text-sm font-medium ${statusColors[todo.status]}`}>
                                            {todo.status}
                                        </span>
                                    </div>

                                    <p className="mb-3 text-sm leading-6 text-slate-300">{todo.taskDescription}</p>

                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <div>
                                            <p className="text-sm font-medium text-slate-400">Task Date</p>
                                            <p className="text-sm text-slate-200">{todo.taskDate}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-400">Deadline</p>
                                            <p className="text-sm text-slate-200">{todo.taskDeadline}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alltodos;
