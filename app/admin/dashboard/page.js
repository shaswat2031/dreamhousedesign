"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFolderPlus, FaExternalLinkAlt } from "react-icons/fa";

export default function AdminDashboard() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch count of projects
    const fetchProjectsCount = async () => {
      try {
        const response = await fetch("/api/projects/count");
        if (response.ok) {
          const data = await response.json();
          setProjectsCount(data.count);
        }
      } catch (error) {
        console.error("Error fetching projects count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectsCount();
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Stats card: Projects */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
            Total Projects
          </h3>
          <div className="flex items-end">
            {isLoading ? (
              <div className="h-8 sm:h-10 w-12 sm:w-16 bg-gray-200 animate-pulse rounded"></div>
            ) : (
              <p className="text-2xl sm:text-3xl font-bold text-[#4361EE]">
                {projectsCount}
              </p>
            )}
            <p className="ml-2 text-sm sm:text-base text-gray-500">projects</p>
          </div>
        </div>

        {/* Quick action cards */}
        <div className="bg-gradient-to-r from-[#4361EE] to-[#3A0CA3] rounded-lg shadow p-4 sm:p-6 text-white">
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Quick Actions
          </h3>
          <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
            <Link
              href="/admin/projects/new"
              className="flex items-center bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-lg transition-colors"
            >
              <FaFolderPlus className="mr-2 sm:mr-3" />
              <span className="text-sm sm:text-base">Add New Project</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-700">
            Website Links
          </h3>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm sm:text-base font-medium">Homepage</span>
            <FaExternalLinkAlt className="text-gray-500" />
          </Link>

          <Link
            href="/projects"
            target="_blank"
            className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm sm:text-base font-medium">
              Projects Page
            </span>
            <FaExternalLinkAlt className="text-gray-500" />
          </Link>

          <Link
            href="/contact"
            target="_blank"
            className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm sm:text-base font-medium">
              Contact Page
            </span>
            <FaExternalLinkAlt className="text-gray-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
