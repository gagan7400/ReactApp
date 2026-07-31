import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Alltodos = () => {
    const [todos, setTodos] = useState([])
    let { user } = useSelector(state => state.userReducer);

    let getTodos = async () => {
        let data = await fetch("http://localhost:3000/todos/?createdBy=" + user?.id);
        let res = await data.json();
        setTodos([...res])
        console.log(res)
    }
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
    useEffect(() => {
        getTodos()
    }, [])

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
