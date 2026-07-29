import { useEffect, useState } from 'react';
import { LoginUser } from '../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let dispatch = useDispatch();
    let nav = useNavigate()
    let { user, error, loading } = useSelector(state => state.userReducer);
    console.log(user, error, loading)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginUser(formData))
    };

    useEffect(() => {
        if (!error && !loading && user) {
            nav("/")
        }
    }, [user])

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-10 text-white">
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-blue-950/40 backdrop-blur-sm">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                    <p className="mt-2 text-sm text-slate-300">Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
