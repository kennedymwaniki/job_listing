import type { JobListing } from "../types/types";

interface JobCardProps {
  job: JobListing;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div
      className={`p-4 mx-auto max-w-4xl sm:flex grid items-center justify-between gap-4 bg-gray-50 rounded-md shadow-md  border-l-3 border-cyan-400 `}
    >
      <div className="grid gap-4 sm:flex">
        <div className="flex items-center space-x-4">
          <img src={job.logo} alt={`${job.company} logo`} />
        </div>
        <div className="grid">
          <div className="flex items-center gap-2 ">
            <h2 className="text-lg font-semibold text-cyan-200">
              {job.company}
            </h2>
            {job.new && (
              <span className="bg-cyan-400 text-white px-2 py-1 rounded-full text-xs">
                NEW!
              </span>
            )}
            {job.featured && (
              <span className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs">
                FEATURED
              </span>
            )}
          </div>
          <p className="text-black font-bold">{job.position}</p>
          <div className="flex items-center gap-4 ">
            <p className="text-gray-500 justify-between flex gap-1 text-nowrap">
              <span>{job.postedAt}</span>
              <span>.</span>
              <span>{job.contract}</span>
              <span>.</span>
              <span>{job.location}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-semibold bg-cyan-100 p-1 rounded">
            {job.role}
          </span>
          <span className="font-semibold bg-cyan-100 p-1 rounded">
            {job.level}
          </span>
          {job.languages.map((language) => (
            <span
              key={language}
              className="font-semibold bg-cyan-100 p-1 rounded"
            >
              {language}
            </span>
          ))}
          {job.tools.map((tool) => (
            <span key={tool} className="font-semibold  bg-cyan-100 p-1 rounded">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
