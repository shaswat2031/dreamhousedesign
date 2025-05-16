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

  // Skip authentication check for login page
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    // If not authenticated and not on login page, redirect to login
    if (!isLoading && !isAuthenticated && !isLoginPage) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, isLoading, router, isLoginPage]);

  // If still loading or is login page, don't show admin layout
  if (isLoading || isLoginPage) {
    return children;
  }

  // If not authenticated, show nothing (will redirect to login)
  if (!isAuthenticated) {
    return null;
  }

  // Handle logout
  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  // Close sidebar when clicking a link on mobile
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full bg-[#1F2937] text-white shadow-lg z-30
        w-64 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:z-0
      `}
      >
        <div className="p-5 border-b border-gray-700 flex justify-between items-center">
          <h1 className="text-xl font-bold">DreamHouse Admin</h1>
          <button
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-4">
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

        <div className="absolute bottom-0 w-full border-t border-gray-700 p-4">
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-300 hover:text-white"
          >
            <FaSignOutAlt className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
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

            {/* Mobile header actions */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-500 flex items-center gap-1 bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-2 transition-colors"
                aria-label="Logout"
              >
                <FaSignOutAlt />
              </button>
            </div>
          </div>
        </header>

        {/* Main content area with breadcrumb */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {/* Optional breadcrumb for larger screens */}
          <div className="hidden md:block bg-white border-b px-6 py-2">
            <div className="text-sm text-gray-500">
              <span className="text-gray-900 font-medium">
                DreamHouse Admin
              </span>
              {pathname !== "/admin/dashboard" && (
                <>
                  <span className="mx-2">›</span>
                  <span>
                    {pathname === "/admin/projects"
                      ? "Projects"
                      : pathname.startsWith("/admin/projects/")
                      ? "Project Details"
                      : ""}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="p-4 sm:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
