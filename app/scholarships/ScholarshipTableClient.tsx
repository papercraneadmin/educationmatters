'use client';

import * as React from 'react';
import { ScholarshipData } from '@/src/types/scholarship.types';

interface ScholarshipTableClientProps {
  initialData: ScholarshipData[];
  itemsPerPage?: number;
}

export function ScholarshipTableClient({
  initialData,
  itemsPerPage = 10,
}: ScholarshipTableClientProps) {
  // Filter states
  const [selectedSchools, setSelectedSchools] = React.useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  // Dropdown states
  const [openDropdown, setOpenDropdown] = React.useState<'schools' | 'categories' | null>(null);
  const [showMobileFilters, setShowMobileFilters] = React.useState<boolean>(false);

  // Dropdown ref for click outside
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Extract unique options
  const schoolOptions = React.useMemo(() => {
    return Array.from(new Set(initialData.map(s => s.school))).sort();
  }, [initialData]);

  const categoryOptions = React.useMemo(() => {
    return Array.from(new Set(initialData.map(s => s.category))).sort();
  }, [initialData]);

  // Filter scholarships
  const filteredScholarships = React.useMemo(() => {
    return initialData.filter(scholarship => {
      const matchesSchool = selectedSchools.length === 0 || selectedSchools.includes(scholarship.school);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(scholarship.category);
      const matchesSearch = searchQuery === '' ||
        Object.values(scholarship).some(value =>
          value.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesSchool && matchesCategory && matchesSearch;
    });
  }, [initialData, selectedSchools, selectedCategories, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredScholarships.length / itemsPerPage);
  const paginatedScholarships = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredScholarships.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredScholarships, currentPage, itemsPerPage]);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedSchools, selectedCategories, searchQuery]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSchool = (school: string) => {
    setSelectedSchools(prev =>
      prev.includes(school) ? prev.filter(s => s !== school) : [...prev, school]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedSchools([]);
    setSelectedCategories([]);
    setSearchQuery('');
    setCurrentPage(1);
  };

  if (initialData.length === 0) {
    return (
      <div className="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>No scholarships available at this time.</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Search */}
        <div className="form-control w-full md:w-96">
          <input
            type="text"
            placeholder="Search scholarships..."
            className="input input-bordered w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:flex gap-2" ref={dropdownRef}>
          {/* School Filter */}
          <div className="dropdown dropdown-end">
            <button
              className="btn btn-outline"
              onClick={() => setOpenDropdown(openDropdown === 'schools' ? null : 'schools')}
            >
              Schools {selectedSchools.length > 0 && `(${selectedSchools.length})`}
            </button>
            {openDropdown === 'schools' && (
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto">
                {schoolOptions.map(school => (
                  <li key={school}>
                    <label className="label cursor-pointer">
                      <span className="label-text">{school}</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={selectedSchools.includes(school)}
                        onChange={() => toggleSchool(school)}
                      />
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Category Filter */}
          <div className="dropdown dropdown-end">
            <button
              className="btn btn-outline"
              onClick={() => setOpenDropdown(openDropdown === 'categories' ? null : 'categories')}
            >
              Categories {selectedCategories.length > 0 && `(${selectedCategories.length})`}
            </button>
            {openDropdown === 'categories' && (
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto">
                {categoryOptions.map(category => (
                  <li key={category}>
                    <label className="label cursor-pointer">
                      <span className="label-text">{category}</span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                      />
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {(selectedSchools.length > 0 || selectedCategories.length > 0) && (
            <button className="btn btn-ghost" onClick={clearFilters}>
              Clear
            </button>
          )}
        </div>

        {/* Mobile Filter Toggle */}
        <button
          className="btn btn-outline md:hidden"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          Filters
        </button>
      </div>

      {/* Mobile Filters */}
      {showMobileFilters && (
        <div className="md:hidden space-y-4 p-4 border rounded-lg">
          <div>
            <h3 className="font-bold mb-2">Schools</h3>
            <div className="space-y-2">
              {schoolOptions.map(school => (
                <label key={school} className="label cursor-pointer">
                  <span className="label-text">{school}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={selectedSchools.includes(school)}
                    onChange={() => toggleSchool(school)}
                  />
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2">Categories</h3>
            <div className="space-y-2">
              {categoryOptions.map(category => (
                <label key={category} className="label cursor-pointer">
                  <span className="label-text">{category}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                </label>
              ))}
            </div>
          </div>

          {(selectedSchools.length > 0 || selectedCategories.length > 0) && (
            <button className="btn btn-ghost w-full" onClick={clearFilters}>
              Clear All Filters
            </button>
          )}
        </div>
      )}

      {/* Results Count */}
      <div className="text-sm text-base-content/70">
        Showing {paginatedScholarships.length} of {filteredScholarships.length} scholarships
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>School</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Deadline</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {paginatedScholarships.map((scholarship, index) => (
              <tr key={index}>
                <td>{scholarship.name}</td>
                <td>{scholarship.school}</td>
                <td>
                  <span className="badge badge-primary">{scholarship.category}</span>
                </td>
                <td>{scholarship.amount}</td>
                <td>{scholarship.deadline}</td>
                <td>
                  {scholarship.link && (
                    <a
                      href={scholarship.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      Apply
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <div className="join">
            <button
              className="join-item btn"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              «
            </button>
            <button className="join-item btn">
              Page {currentPage} of {totalPages}
            </button>
            <button
              className="join-item btn"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
