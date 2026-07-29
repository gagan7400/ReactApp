import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user } = useSelector(state => state.userReducer)
    let dispatch = useDispatch();
    let nav = useNavigate()
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-10 text-white">
            <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-blue-950/40 backdrop-blur-sm">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                    <div className="flex flex-col items-center lg:w-1/3">
                        <img
                            src={user?.profileImageUrl}
                            alt={user?.name}
                            className="h-40 w-40 rounded-full border-4 border-blue-400 object-cover shadow-lg"
                        />
                        <h2 className="mt-5 text-2xl font-bold text-white">{user?.name}</h2>
                        <p className="text-sm text-slate-300">Personal Profile</p>
                    </div>

                    <div className="grid flex-1 gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                            <p className="text-sm font-medium text-slate-300">Name</p>
                            <p className="mt-1 text-base font-semibold text-white">{user?.name}</p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                            <p className="text-sm font-medium text-slate-300">Email</p>
                            <p className="mt-1 text-base font-semibold text-white">{user?.email}</p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                            <p className="text-sm font-medium text-slate-300">Age</p>
                            <p className="mt-1 text-base font-semibold text-white">{user?.age}</p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                            <p className="text-sm font-medium text-slate-300">Gender</p>
                            <p className="mt-1 text-base font-semibold text-white">{user?.gender}</p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4 sm:col-span-2">
                            <p className="text-sm font-medium text-slate-300">Address</p>
                            <p className="mt-1 text-base font-semibold text-white">{user?.address}</p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                            <p className="text-sm font-medium text-slate-300">Phone Number</p>
                            <p className="mt-1 text-base font-semibold text-white">{user?.phonenumber}</p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4">
                            <p className="text-sm font-medium text-slate-300">Profile</p>
                            <button onClick={() => {
                                dispatch(logout());
                                nav("/login")
                            }}>Logout </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
