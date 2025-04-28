import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';

const MentorshipPage = () => {
  const [activeTab, setActiveTab] = useState('find');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [formData, setFormData] = useState({
    industry: '',
    role: '',
    company: '',
    guidanceAreas: [],
    contactMethod: '',
    availability: '',
    bio: '',
    linkedin: '',
  });

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/mentors');
        if (!response.ok) throw new Error('Failed to fetch mentors');
        const data = await response.json();
        setMentors(data);
        setLoading(false);
      } catch (error) {
        setFetchError(error.message);
        setLoading(false);
      }
    };
    fetchMentors();
  }, []);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedAreas = checked
        ? [...formData.guidanceAreas, value]
        : formData.guidanceAreas.filter((area) => area !== value);
      setFormData({ ...formData, guidanceAreas: updatedAreas });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.industry.trim()) errors.industry = 'Industry is required';
    if (!formData.role.trim()) errors.role = 'Role is required';
    if (!formData.company.trim()) errors.company = 'Company is required';
    if (formData.guidanceAreas.length === 0) errors.guidanceAreas = 'Select at least one area';
    if (!formData.contactMethod) errors.contactMethod = 'Contact method is required';
    if (!formData.availability.trim()) errors.availability = 'Availability is required';
    if (!formData.bio.trim()) errors.bio = 'Bio is required';
    if (!formData.linkedin.trim()) errors.linkedin = 'LinkedIn is required';
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
      if (!currentUser) {
        console.error("User is not logged in!");
        return; 
      }
  
      const formDataToSubmit = {
        industry: formData.industry,
        role: formData.role,
        company: formData.company,
        guidance_areas: formData.guidanceAreas.join(", "), 
        contact_method: formData.contactMethod,
        availability: formData.availability,
        linkedin: formData.linkedin,
        bio: formData.bio,
        is_verified: false,
        approver_name: 'Kirthi', 
        user_id_id: currentUser.id, 
      };
  
      fetch("http://127.0.0.1:8000/api/mentors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSubmit),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsFormSubmitted(true);
          console.log("Success:", data);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const handleRequestMentorship = (mentor) => {
    setSelectedMentor(mentor);
    setIsRequestModalOpen(true);
  };

  const filteredMentors = mentors.filter((mentor) =>
    [mentor.mentor_user_name, mentor.role, mentor.industry, mentor.company, ...(mentor.tags || [])]
      .join(' ')
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-auto font-poppins text-lg bg-gradient-to-r from-sky-300 ">
      <SectionHeader
        title="Mentor Connect"
        subtitle="We are bringing mentors and mentees together to exchange valuable know-how."
        className="text-center text-white"
      />

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 overflow-x-auto pt-10">
        {['find', 'become'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium text-lg transition-all duration-200 ${activeTab === tab ? 'bg-gradient-to-r from-red-400 to-yellow-400 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {tab === 'find' ? '🔍 Find a Mentor' : '✍️ Become a Mentor'}
          </button>
        ))}
      </div>

      {/* FIND A MENTOR */}
      {activeTab === 'find' && (
        <>
          <div className="mb-8 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search mentors by name, field, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {loading ? (
            <p className="text-center text-white">Loading mentors...</p>
          ) : fetchError ? (
            <p className="text-center text-red-500">Error: {fetchError}</p>
          ) : filteredMentors.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12 px-4 sm:px-20">
              {filteredMentors.map((mentor) => (
                <div key={mentor.id} className="bg-white shadow-lg hover:shadow-xl rounded-xl p-6 transition-all duration-300 transform hover:scale-105">
                  <div>
                    <h2 className="text-2xl font-semibold text-red-500">{mentor.mentor_user_name}</h2>
                    <p className="text-lg truncate gray-500">{mentor.role} at {mentor.company}</p>
                    <p className="text-lg text-gray-500 mb-3">Industry: {mentor.industry}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(mentor.tags || []).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-indigo-300 text-indigo-700 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-lg text-gray-500">Availability: {mentor.availability}</p>
                  </div>
                  <button
                    onClick={() => handleRequestMentorship(mentor)}
                    className="mt-4 w-full bg-yellow-400 hover:bg-gradient-to-r hover:bg-sky-300 text-white px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    Request Mentorship
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-white mt-6">No mentors found matching your search.</p>
          )}
        </>
      )}

      {/* BECOME A MENTOR */}
      {activeTab === 'become' && (
        <>
          {isFormSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center max-w-xl mx-auto">
              <strong className="font-bold">Thank you!</strong>
              <p className="mt-1">
                Your mentor profile has been submitted for review. You will receive a confirmation
                email soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="bg-white shadow-lg p-6 sm:p-8 rounded-xl max-w-2xl mx-auto mb-10">
              {/* Form Fields */}
              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-1">Industry</label>
                <input
                  name="industry"
                  value={formData.industry}
                  onChange={handleFormChange}
                  placeholder="Enter your industry"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                {formErrors.industry && <p className="text-red-500 text-sm">{formErrors.industry}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-1">Current Role / Job Title</label>
                <input
                  name="role"
                  value={formData.role}
                  onChange={handleFormChange}
                  placeholder="Enter your current role"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                {formErrors.role && <p className="text-red-500 text-sm">{formErrors.role}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-1">Company Name</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                {formErrors.company && <p className="text-red-500 text-sm">{formErrors.company}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-1">Availability</label>
                <input
                  name="availability"
                  value={formData.availability}
                  onChange={handleFormChange}
                  placeholder="When are you available?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                {formErrors.availability && <p className="text-red-500 text-sm">{formErrors.availability}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-1">Guidance Areas</label>
                <div className="flex flex-wrap gap-4">
                  {['Technical Skills', 'Career Growth', 'Soft Skills', 'Networking', 'Industry Insights'].map((area) => (
                    <label key={area} className="flex items-center gap-2 text-lg">
                      <input
                        type="checkbox"
                        value={area}
                        onChange={handleFormChange}
                        checked={formData.guidanceAreas.includes(area)}
                      />
                      {area}
                    </label>
                  ))}
                </div>
                {formErrors.guidanceAreas && <p className="text-red-500 text-sm">{formErrors.guidanceAreas}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-1">LinkedIn Profile</label>
                <input
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleFormChange}
                  placeholder="Enter your LinkedIn URL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                {formErrors.linkedin && <p className="text-red-500 text-sm">{formErrors.linkedin}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-1">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleFormChange}
                  placeholder="Write a short bio about yourself"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                {formErrors.bio && <p className="text-red-500 text-sm">{formErrors.bio}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-red-400  text-white py-3 px-6 rounded-lg shadow-lg"
              >
                Submit Profile
              </button>
            </form>
          )}
        </>
      )}

      {/* Request Modal */}
      {isRequestModalOpen && selectedMentor && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-auto">
            <h2 className="text-xl font-semibold text-center mb-4  ">Request Mentorship</h2>
            <p className="text-lg mb-4">
              Do you want to request mentorship from {selectedMentor.mentor_user_name}?
            </p>
            <div className="flex justify-around">
              <button
                onClick={() => setIsRequestModalOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsRequestModalOpen(false)}
                className="bg-sky-300 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorshipPage;
