import React, { useEffect, useState } from "react";
// import axios from "axios"; // Comment out axios import for now

import SectionHeader from "./SectionHeader";

const OpportunitiesPage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filters, setFilters] = useState({ jobType: "", location: "", search: "" });
  const [formData, setFormData] = useState({
    title: "",
    company_name: "",
    location: "",
    job_type: "",
    duration: "",
    stipend: "",
    application_deadline: "",
    description: "",
    application_link: "",
    contact_email: "",
    alumni_owned: false,
  });
  const [successMsg, setSuccessMsg] = useState("");

  // Mock data for opportunities
  const mockOpportunities = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company_name: "TechCorp",
      location: "Puducherry",
      job_type: "Internship",
      description: "A great opportunity to learn software engineering.",
      application_link: "#",
      alumni_owned: true,
    },
    {
      id: 2,
      title: "Data Scientist",
      company_name: "DataWorks",
      location: "Chennai",
      job_type: "Full-time",
      description: "Join our team of data scientists.",
      application_link: "#",
      alumni_owned: false,
    },
    // Add more mock jobs as needed
  ];

  useEffect(() => {
    // Simulate fetching opportunities
    setOpportunities(mockOpportunities);
  }, []);

  const fetchOpportunities = async () => {
    try {
      // Use mock data instead of axios
      // const res = await axios.get("http://127.0.0.1:8000/api/opportunities");
      // setOpportunities(res.data);
      // Simulate successful response with mock data
      setOpportunities(mockOpportunities);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredList = opportunities.filter((job) => {
    return (
      (filters.jobType === "" || job.job_type === filters.jobType) &&
      (filters.location === "" || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.search === "" || job.title.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate posting a new opportunity by adding it to the list
      const newOpportunity = {
        ...formData,
        id: opportunities.length + 1, // Simulate new ID
      };
      
      // Simulate posting the opportunity (without backend)
      // await axios.post("http://127.0.0.1:8000/api/opportunities/", formData);
      setOpportunities([newOpportunity, ...opportunities]);
      setSuccessMsg("Opportunity posted successfully!");

      // Reset form data
      setFormData({
        title: "",
        company_name: "",
        location: "",
        job_type: "",
        duration: "",
        stipend: "",
        application_deadline: "",
        description: "",
        application_link: "",
        contact_email: "",
        alumni_owned: false,
      });
    } catch (error) {
      setSuccessMsg("Failed to post opportunity.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 md:px-12 py-10">
      <SectionHeader title="Internship and Job Opportunities" subtitle="Explore exciting internship and job opportunities, including alumni-owned companies, with easy-to-use filters to find your perfect match!" />

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 pt-12">
        <input type="text" name="search" placeholder="Search by title..." onChange={handleFilterChange} className="p-3 border rounded shadow-sm" />
        <select name="jobType" onChange={handleFilterChange} className="p-3 border rounded shadow-sm">
          <option value="">All Types</option>
          <option value="Internship">Internship</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
        <input type="text" name="location" placeholder="Location..." onChange={handleFilterChange} className="p-3 border rounded shadow-sm" />
      </div>

      {/* Post Opportunity Form */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-md mb-12">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Post a New Opportunity</h3>
        {successMsg && <p className="mb-4 text-green-600 font-medium">{successMsg}</p>}

        <form onSubmit={handlePostSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Position Title" required className="p-3 border rounded" />
          <input name="company_name" value={formData.company_name} onChange={handleInputChange} placeholder="Company Name" required className="p-3 border rounded" />
          <input name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" required className="p-3 border rounded" />
          <select name="job_type" value={formData.job_type} onChange={handleInputChange} required className="p-3 border rounded">
            <option value="">Select Job Type</option>
            <option value="Internship">Internship</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
          <input name="duration" value={formData.duration} onChange={handleInputChange} placeholder="Duration (if Internship)" className="p-3 border rounded" />
          <input name="stipend" value={formData.stipend} onChange={handleInputChange} placeholder="Stipend / Salary" className="p-3 border rounded" />
          <input type="date" name="application_deadline" value={formData.application_deadline} onChange={handleInputChange} className="p-3 border rounded" />
          <input type="email" name="contact_email" value={formData.contact_email} onChange={handleInputChange} placeholder="Contact Email" required className="p-3 border rounded" />
          <input name="application_link" value={formData.application_link} onChange={handleInputChange} placeholder="Application Link" required className="p-3 border rounded md:col-span-2" />
          <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Job Description" required rows="4" className="p-3 border rounded md:col-span-2" />
          
          {/* Alumni-owned checkbox */}
          <div className="md:col-span-2 flex items-center gap-2">
            <input type="checkbox" name="alumni_owned" checked={formData.alumni_owned} onChange={handleInputChange} className="w-4 h-4" />
            <label htmlFor="alumni_owned" className="text-sm text-gray-700">This opportunity is from an Alumni-owned company</label>
          </div>

          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 md:col-span-2 mt-2 transition">
            Submit Opportunity
          </button>
        </form>
      </div>

      {/* Opportunity Cards */}
      {filteredList.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredList.map((job) => (
            <div key={job.id} className={`p-5 rounded-lg shadow-md border transition ${job.alumni_owned ? "bg-yellow-50 border-yellow-400" : "bg-white"}`}>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-blue-800">{job.title}</h2>
                {job.alumni_owned && <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">Alumni-Owned</span>}
              </div>
              <p className="text-gray-700 font-medium">{job.company_name} • {job.location}</p>
              <p className="text-sm text-gray-500 italic">{job.job_type}</p>
              <p className="mt-2 text-sm text-gray-600">{job.description.slice(0, 150)}...</p>
              <a href={job.application_link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No opportunities found.</p>
      )}
    </div>
  );
};

export default OpportunitiesPage;
