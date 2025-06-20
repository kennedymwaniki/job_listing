import { useState } from "react";
import JobCard from "./JobCard";
import jobListings from "../data.json";
import type { JobListing } from "../types/types";

const JoblistingComponent = () => {
  // Cast the imported data to our defined type
  const jobs = jobListings as JobListing[];
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((item) => item !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter((job) => {
    if (filters.length === 0) return true;

    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];

    return filters.every((filter) => jobTags.includes(filter));
  });

  return (
    <div>
      {filters.length > 0 && (
        <div className="bg-white px-4 py-4 mx-auto max-w-4xl -mt-8 mb-8 rounded-md shadow-md flex justify-between">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <div
                key={filter}
                className="flex items-center bg-cyan-100 rounded overflow-hidden"
              >
                <span className="px-2 py-1 font-semibold">{filter}</span>
                <button
                  onClick={() => removeFilter(filter)}
                  className="bg-cyan-700 text-white px-2 py-1 hover:bg-gray-800"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={clearFilters}
            className="text-gray-500 hover:text-cyan-700 hover:underline font-medium"
          >
            Clear
          </button>
        </div>
      )}

      <div className="px-4 py-8 space-y-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} onFilterClick={addFilter} />
        ))}
      </div>
    </div>
  );
};

export default JoblistingComponent;
