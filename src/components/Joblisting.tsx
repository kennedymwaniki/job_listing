import JobCard from "./JobCard";
import jobListings from "../data.json";
import type { JobListing } from "../types/types";

const JoblistingComponent = () => {
  // Cast the imported data to our defined type
  const jobs = jobListings as JobListing[];

  return (
    <div className="px-4 py-8 space-y-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JoblistingComponent;
