import * as React from 'react';
import { ScholarshipData, SchoolType, CategoryType } from './types/scholarship.types';
import { scholarshipData } from './data/scholarshipData';

interface ScholarshipTableProps {
  collectionId?: string;
  apiToken?: string;
  itemsPerPage?: string;
  proxyUrl?: string; // Optional proxy URL for production deployment
}

export const ScholarshipTable = ({
  collectionId = '',
  apiToken = '',
  itemsPerPage = '10',
  proxyUrl = '',
}: ScholarshipTableProps) => {
  // Data states
  const [scholarships, setScholarships] = React.useState<ScholarshipData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

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

  const itemsPerPageNum = parseInt(itemsPerPage) || 10;

  // Extract unique options
  const schoolOptions = React.useMemo(() => {
    return Array.from(new Set(scholarships.map(s => s.school))).sort();
  }, [scholarships]);

  const categoryOptions = React.useMemo(() => {
    return Array.from(new Set(scholarships.map(s => s.category))).sort();
  }, [scholarships]);

  // Fetch data from Webflow API
  React.useEffect(() => {
    const fetchData = async () => {
      // If no API token, use mock data
      if (!apiToken || !collectionId) {
        setScholarships(scholarshipData);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        // Determine which endpoint to use
        let url: string;
        let fetchOptions: RequestInit;

        if (proxyUrl) {
          // Use custom proxy URL (for production deployment)
          url = `${proxyUrl}?collectionId=${collectionId}&apiToken=${encodeURIComponent(apiToken)}`;
          fetchOptions = {
            headers: {
              'accept': 'application/json',
            },
          };
        } else {
          // Try local Next.js API route first, fall back to direct API
          const isLocalDev = typeof window !== 'undefined' &&
            (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

          if (isLocalDev) {
            // Use local proxy for development
            url = `/api/webflow-proxy?collectionId=${collectionId}&apiToken=${encodeURIComponent(apiToken)}`;
            fetchOptions = {
              headers: {
                'accept': 'application/json',
              },
            };
          } else {
            // Direct API call (will fail with CORS on Webflow, but shows clear error)
            url = `https://api.webflow.com/v2/collections/${collectionId}/items/live`;
            fetchOptions = {
              headers: {
                'Authorization': `Bearer ${apiToken}`,
                'accept': 'application/json',
              },
            };
          }
        }

        const response = await fetch(url, fetchOptions);

        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Transform API response to ScholarshipData
        const transformedData: ScholarshipData[] = data.items.map((item: any) => ({
          id: item.id,
          title: item.fieldData.title || '',
          donor: item.fieldData.donor || '',
          value: item.fieldData.value || '',
          available: item.fieldData.available || 0,
          fieldOfStudy: item.fieldData['field-of-study'] || item.fieldData.fieldOfStudy || '',
          school: item.fieldData.school || '',
          category: item.fieldData.category || '',
        }));

        setScholarships(transformedData);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch scholarships:', err);
        setError(err instanceof Error ? err.message : 'Failed to load scholarships');
        // Fall back to mock data on error
        setScholarships(scholarshipData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionId, apiToken]);

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Filter toggle handlers
  const toggleSchool = (school: string) => {
    setSelectedSchools(prev =>
      prev.includes(school) ? prev.filter(s => s !== school) : [...prev, school]
    );
    setCurrentPage(1);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedSchools([]);
    setSelectedCategories([]);
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Filter logic
  const getFilteredData = (): ScholarshipData[] => {
    let filtered = scholarships;

    if (selectedSchools.length > 0) {
      filtered = filtered.filter(item => selectedSchools.includes(item.school));
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item => selectedCategories.includes(item.category));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.donor.toLowerCase().includes(query) ||
        item.fieldOfStudy.toLowerCase().includes(query) ||
        item.value.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const filteredData = getFilteredData();

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPageNum);
  const startIndex = (currentPage - 1) * itemsPerPageNum;
  const endIndex = startIndex + itemsPerPageNum;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Highlighting function
  const highlightText = (text: string, query: string): React.ReactNode => {
    if (!query.trim()) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="bg-yellow-200 font-bold">{part}</mark>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  // Pagination controls
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const hasActiveFilters = selectedSchools.length > 0 || selectedCategories.length > 0 || searchQuery.trim() !== '';
  const activeFilterCount = selectedSchools.length + selectedCategories.length + (searchQuery.trim() ? 1 : 0);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center p-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // Error state
  if (error && scholarships.length === 0) {
    return (
      <div className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full p-5">
      {/* Error warning if using fallback data */}
      {error && (
        <div className="alert alert-warning mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{error}. Showing sample data.</span>
        </div>
      )}

      {/* Desktop: Single row layout */}
      <div className="hidden md:flex gap-2 mb-5 items-center flex-wrap" ref={dropdownRef}>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search scholarships..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="input input-bordered flex-1 min-w-[200px]"
        />

        {/* Schools Dropdown */}
        <div className="dropdown dropdown-end">
          <button
            onClick={() => setOpenDropdown(openDropdown === 'schools' ? null : 'schools')}
            className={`btn ${selectedSchools.length > 0 ? 'btn-primary' : 'btn-ghost'}`}
          >
            Schools
            {selectedSchools.length > 0 && (
              <span className="badge badge-sm ml-1">{selectedSchools.length}</span>
            )}
          </button>
          {openDropdown === 'schools' && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow mt-1">
              {schoolOptions.map(school => (
                <li key={school}>
                  <label className="label cursor-pointer justify-start">
                    <input
                      type="checkbox"
                      checked={selectedSchools.includes(school)}
                      onChange={() => toggleSchool(school)}
                      className="checkbox checkbox-sm mr-2"
                    />
                    <span className="label-text">{school}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Categories Dropdown */}
        <div className="dropdown dropdown-end">
          <button
            onClick={() => setOpenDropdown(openDropdown === 'categories' ? null : 'categories')}
            className={`btn ${selectedCategories.length > 0 ? 'btn-primary' : 'btn-ghost'}`}
          >
            Categories
            {selectedCategories.length > 0 && (
              <span className="badge badge-sm ml-1">{selectedCategories.length}</span>
            )}
          </button>
          {openDropdown === 'categories' && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow mt-1">
              {categoryOptions.map(category => (
                <li key={category}>
                  <label className="label cursor-pointer justify-start">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="checkbox checkbox-sm mr-2"
                    />
                    <span className="label-text">{category}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button onClick={clearAllFilters} className="btn btn-error btn-sm">
            Clear Filters
          </button>
        )}
      </div>

      {/* Mobile: Stacked layout */}
      <div className="md:hidden mb-5">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search scholarships..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="input input-bordered w-full mb-2"
        />

        {/* Filters Toggle Button */}
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="btn btn-ghost w-full justify-between"
        >
          <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
          <span>{showMobileFilters ? '▲' : '▼'}</span>
        </button>

        {/* Collapsible Filter Section */}
        {showMobileFilters && (
          <div className="border rounded-lg p-4 mt-2 space-y-2" ref={dropdownRef}>
            {/* Schools Dropdown */}
            <div className="dropdown dropdown-end w-full">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'schools' ? null : 'schools')}
                className={`btn w-full ${selectedSchools.length > 0 ? 'btn-primary' : 'btn-ghost'}`}
              >
                Schools
                {selectedSchools.length > 0 && (
                  <span className="badge badge-sm ml-1">{selectedSchools.length}</span>
                )}
              </button>
              {openDropdown === 'schools' && (
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 w-full p-2 shadow mt-1">
                  {schoolOptions.map(school => (
                    <li key={school}>
                      <label className="label cursor-pointer justify-start">
                        <input
                          type="checkbox"
                          checked={selectedSchools.includes(school)}
                          onChange={() => toggleSchool(school)}
                          className="checkbox checkbox-sm mr-2"
                        />
                        <span className="label-text">{school}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Categories Dropdown */}
            <div className="dropdown dropdown-end w-full">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'categories' ? null : 'categories')}
                className={`btn w-full ${selectedCategories.length > 0 ? 'btn-primary' : 'btn-ghost'}`}
              >
                Categories
                {selectedCategories.length > 0 && (
                  <span className="badge badge-sm ml-1">{selectedCategories.length}</span>
                )}
              </button>
              {openDropdown === 'categories' && (
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 w-full p-2 shadow mt-1">
                  {categoryOptions.map(category => (
                    <li key={category}>
                      <label className="label cursor-pointer justify-start">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="checkbox checkbox-sm mr-2"
                        />
                        <span className="label-text">{category}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button onClick={clearAllFilters} className="btn btn-error w-full btn-sm">
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm opacity-60">
        Showing {paginatedData.length > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} scholarships
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-5">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Value</th>
              <th>Title</th>
              <th>Donor</th>
              <th># Available</th>
              <th>Field of Study</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <tr key={item.id} className="hover">
                  <td className="font-semibold text-primary">
                    {highlightText(item.value, searchQuery)}
                  </td>
                  <td>{highlightText(item.title, searchQuery)}</td>
                  <td>{highlightText(item.donor, searchQuery)}</td>
                  <td className="text-center">{item.available}</td>
                  <td>{highlightText(item.fieldOfStudy, searchQuery)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-10 opacity-50">
                  No scholarships found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <div className="join">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="join-item btn btn-sm"
            >
              «
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`join-item btn btn-sm ${currentPage === page ? 'btn-active' : ''}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="join-item btn btn-sm"
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
