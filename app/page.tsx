"use client";

import { ScholarshipTable } from "@/src/ScholarshipTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Education Matters Scholarships
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and apply for scholarships that match your goals. Use our advanced filtering to find the perfect opportunities.
          </p>
        </div>

        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body p-6">
            <ScholarshipTable
              itemsPerPage="10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
