"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import {
  FaHome,
  FaFolder,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function AdminLayout({ children }) {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !isLoginPage) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, isLoading, isLoginPage, router]);

  if (isLoading || isLoginPage) return children;
  if (!isAuthenticated) return null;

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
    fixed top-0 left-0 h-full w-64 z-30 bg-[#1F2937] text-white shadow-lg
    transform transition-transform duration-300 ease-in-out
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:static md:z-0
  `}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Top section */}
          <div>
            <div className="p-5 border-b border-gray-700 flex justify-between items-center">
              <h1 className="text-xl font-bold">DreamHouse Admin</h1>
              <button
                className="md:hidden text-white"
                onClick={() => setSidebarOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            <nav className="mt-6 px-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/admin/dashboard"
                    className={`flex items-center py-3 px-4 rounded-lg ${
                      pathname === "/admin/dashboard"
                        ? "bg-[#4361EE] text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                    onClick={handleNavClick}
                  >
                    <FaHome className="mr-3" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/projects"
                    className={`flex items-center py-3 px-4 rounded-lg ${
                      pathname === "/admin/projects"
                        ? "bg-[#4361EE] text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                    onClick={handleNavClick}
                  >
                    <FaFolder className="mr-3" />
                    <span>Projects</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Bottom logout */}
          <div className="border-t border-gray-700 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-300 hover:text-white"
            >
              <FaSignOutAlt className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
            <button
              className="text-gray-600 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars size={24} />
            </button>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 ml-2 md:ml-0">
              {pathname === "/admin/dashboard" && "Dashboard"}
              {pathname === "/admin/projects" && "Manage Projects"}
              {pathname.startsWith("/admin/projects/") &&
                pathname !== "/admin/projects" &&
                "Project Details"}
            </h2>

            <div className="md:hidden">
              <button onClick={handleLogout} className="text-gray-600 p-2">
                <FaSignOutAlt />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
