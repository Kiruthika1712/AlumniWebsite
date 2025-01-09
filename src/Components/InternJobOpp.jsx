import React, { useState } from "react";

const InternJobOpp = ({ setShowInternJobOpp }) => {
  const [jobPosts, setJobPosts] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobDetails, setJobDetails] = useState("");
  const [isAlumni, setIsAlumni] = useState(false); // Check if job is alumni-owned
  const [image, setImage] = useState(null); // Image state
  const [imagePreview, setImagePreview] = useState(""); // Image preview state
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    postType: "",
  });
  const [charCount, setCharCount] = useState(0);
  const maxChars = 100;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the base64 image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostJob = () => {
    if (jobTitle && company && location && jobType) {
      const newJob = {
        id: Date.now(),
        title: jobTitle,
        company,
        location,
        jobType,
        jobDetails,
        isAlumni,
        image, // Image included in the job post
      };
      setJobPosts((prevPosts) => [newJob, ...prevPosts]);
      setJobTitle("");
      setCompany("");
      setLocation("");
      setJobType("");
      setJobDetails("");
      setIsAlumni(false);
      setImage(null);
      setImagePreview("");
      setCharCount(0);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      location: "",
      jobType: "",
      postType: "",
    });
  };

  const handleJobDetailsChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setJobDetails(text);
      setCharCount(text.length);
    } else {
      alert("You can only enter a maximum of 100 characters.");
    }
  };

  const filteredJobs = jobPosts.filter((job) => {
    return (
      (filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
      (filters.jobType ? job.jobType === filters.jobType : true) &&
      (filters.postType ? job.isInternship === (filters.postType === "Internship") : true) &&
      (filters.isAlumni ? job.isAlumni : true)
    );
  });

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <span
          onClick={() => setShowInternJobOpp(false)}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          ← Back to Engage Page
        </span>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">Internship & Job Opportunities</h1>

      {/* Filters Section */}
      <div className="mb-6 flex justify-between items-center space-x-4">
        <input
          type="text"
          name="location"
          placeholder="Search by Location"
          value={filters.location}
          onChange={handleFilterChange}
          className="p-3 border rounded-lg w-full sm:w-1/4"
        />
        <select
          name="jobType"
          value={filters.jobType}
          onChange={handleFilterChange}
          className="p-3 border rounded-lg w-full sm:w-1/4"
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Freelance">Freelance</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="In-office">In-office</option>
        </select>
        <select
          name="postType"
          value={filters.postType}
          onChange={handleFilterChange}
          className="p-3 border rounded-lg w-full sm:w-1/4"
        >
          <option value="">Select Opportunity Type</option>
          <option value="Internship">Internship</option>
          <option value="Job">Job</option>
        </select>
        <button
          onClick={handleClearFilters}
          className="ml-4 px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 w-1/5" // Adjusted width for "Clear Filters"
        >
          Clear Filters
        </button>
      </div>

      {/* Post Job Form */}
      <div className="bg-white shadow p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Post a Job or Internship</h2>
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Freelance">Freelance</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="In-office">In-office</option>
        </select>
        <textarea
          value={jobDetails}
          onChange={handleJobDetailsChange}
          placeholder="Additional Details (Optional)"
          className="w-full p-3 mb-4 border rounded-lg max-h-24 overflow-y-auto resize-none"
          rows="4"
        />
        
        {/* Image upload input */}
        <input
          type="file"
          onChange={handleImageChange}
          className="mb-4"
        />
        {imagePreview && (
          <div className="mt-4">
            <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover" /> {/* Cropped image */}
          </div>
        )}

        {/* Alumni-Owned Checkbox */}
        <label className="flex items-center mt-4">
          <input
            type="checkbox"
            checked={isAlumni}
            onChange={() => setIsAlumni((prev) => !prev)}
            className="mr-2"
          />
          Alumni-Owned?
        </label>

        <button
          onClick={handlePostJob}
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Post Job
        </button>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className={`bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all ${job.isAlumni ? "border-l-4 border-green-500" : "border-l-4 border-blue-500"} flex`}>
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">{job.title}</h3>
                <p className="text-lg text-gray-600 mb-2">{job.company}</p>
                <p className="text-gray-600 mb-2">{job.location}</p>
                <p className="mt-2 text-gray-500 mb-2">{job.jobType}</p>
                {job.isAlumni && (
                  <p className="mt-2 text-sm text-green-500 font-semibold">Alumni-Owned</p>
                )}
                {job.jobDetails && (
                  <p className="mt-4 text-gray-600 break-words">{job.jobDetails}</p>
                )}
              </div>
              {job.image && (
                <div className="ml-4">
                  <img src={URL.createObjectURL(job.image)} alt="Job Post" className="w-48 h-48 object-cover" />
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No jobs or internships available</p>
        )}
      </div>
    </section>
  );
};

export default InternJobOpp;
