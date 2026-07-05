import { NavLink, useNavigate } from "react-router-dom";

function StudentSidebar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("studentToken");
        navigate("/student-login");
    };

    const menuItems = [
        {
            name: "Dashboard",
            path: "/student-dashboard",
            icon: "🏠",
        },
        {
            name: "My Profile",
            path: "/student-profile",
            icon: "👤",
        },
        {
            name: "My Subjects",
            path: "/student-subjects",
            icon: "📚",
        },
        {
            name: "My Attendance",
            path: "/student-attendance",
            icon: "📅",
        },
        {
            name: "My Marks",
            path: "/student-marks",
            icon: "📝",
        },
        {
            name: "Fee Status",
            path: "/student-fees",
            icon: "💰",
        },
        {
            name: "Change Password",
            path: "/student-change-password",
            icon: "🔑",
        },
    ];

    return (
        <aside className="w-72 min-h-screen bg-blue-900 text-white">

            <div className="text-center py-8 border-b border-blue-700">

                <h1 className="text-3xl font-bold">
                    Student Portal
                </h1>

            </div>

            <nav className="mt-6">

                {menuItems.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-4 px-6 py-4 transition ${isActive
                                ? "bg-white text-blue-900 font-bold"
                                : "hover:bg-blue-800"
                            }`
                        }
                    >
                        <span className="text-xl">
                            {item.icon}
                        </span>

                        <span>
                            {item.name}
                        </span>

                    </NavLink>

                ))}

            </nav>

            

            <div className="absolute bottom-8 w-72 px-6">

                <button
                    onClick={logout}
                    className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold"
                >
                    Logout
                </button>

            </div>

        </aside>
    );
}

export default StudentSidebar;