"use client";

import Link from "next/link";

function Navbar() {
    return (
        <nav className="border-b border-gray-200 px-4 py-3 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-xl font-bold text-gray-400">MyLogo</div>
                <ul className="flex space-x-6 text-gray-400 font-medium">
                    {routes.map((route) => (
                        <li key={route.path}>
                            <Link href={route.path}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

const routes = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About",
        path: "/about",
    },
    {
        label: "Contact",
        path: "/contact",
    },
];
