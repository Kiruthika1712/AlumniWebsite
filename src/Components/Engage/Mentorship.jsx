import React, { useState, useEffect } from 'react';

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
        if (!response.ok) {
          throw new Error('Failed to fetch mentors');
        }
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
      console.log('Submitted Mentor Data:', formData);
      setIsFormSubmitted(true);
    }
  };

  const handleRequestMentorship = (mentor) => {
    setSelectedMentor(mentor);
    setIsRequestModalOpen(true);
  };

  const filteredMentors = mentors.filter((mentor) =>
    [mentor.name, mentor.role, mentor.industry, mentor.company, ...(mentor.tags || [])]
      .join(' ')
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-8 pt-12">
        <h1 className="text-4xl font-bold text-[#294D89]">Mentorship Program</h1>
        <p className="text-lg text-gray-600 mt-2">Connect students and alumni for growth and guidance.</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 overflow-x-auto pb-4 mb-10">
        {['find', 'become'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === tab ? 'bg-LightRed text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab === 'find' ? '🔍 Find a Mentor' : '✍️ Become a Mentor'}
          </button>
        ))}
      </div>

      {/* FIND A MENTOR */}
      {activeTab === 'find' && (
        <>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search mentors by name, field, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm"
            />
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Loading mentors...</p>
          ) : fetchError ? (
            <p className="text-center text-red-500">Error: {fetchError}</p>
          ) : filteredMentors.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white shadow-sm hover:shadow-md rounded-xl p-5 transition-all duration-200 flex flex-col justify-between h-full"
                >
                  <h2 className="text-lg font-semibold text-[#294D89]">{mentor.name}</h2>
                  <p className="text-sm text-gray-600 truncate">
                    {mentor.role} at {mentor.company}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">Industry: {mentor.industry}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(mentor.tags || []).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-[#B4D5DE] text-[#294D89] px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Availability: {mentor.availability}</p>
                  <button
                    onClick={() => handleRequestMentorship(mentor)}
                    className="bg-[#294D89] hover:bg-[#1f3b6e] text-white px-4 py-2 rounded-md mt-auto"
                  >
                    Request Mentorship
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-4">No mentors found matching your search.</p>
          )}
        </>
      )}

      {/* BECOME A MENTOR */}
      {activeTab === 'become' && (
        <>
          {isFormSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-4 rounded relative text-center max-w-xl mx-auto">
              <strong className="font-bold">Thank you!</strong>
              <p>Your mentor profile has been submitted for review. You will receive a confirmation email soon.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="bg-white shadow-md p-6 rounded-xl max-w-3xl mx-auto">
              {[['Industry', 'industry'], ['Current Role / Job Title', 'role'], ['Company Name', 'company'], ['Availability', 'availability']].map(
                ([label, name]) => (
                  <div key={name} className="mb-4">
                    <label className="block text-sm sm:text-base font-medium mb-1">{label}</label>
                    <input
                      name={name}
                      value={formData[name]}
                      onChange={handleFormChange}
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-LightBlue"
                    />
                    {formErrors[name] && <p className="text-red-500 text-sm">{formErrors[name]}</p>}
                  </div>
                )
              )}

              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium mb-1">Mentoring Areas</label>
                <div className="flex flex-wrap gap-3 mt-2">
                  {['Career', 'Higher Studies', 'Skill Development'].map((area) => (
                    <label key={area} className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        value={area}
                        checked={formData.guidanceAreas.includes(area)}
                        onChange={handleFormChange}
                      />
                      {area}
                    </label>
                  ))}
                </div>
                {formErrors.guidanceAreas && <p className="text-red-500 text-sm">{formErrors.guidanceAreas}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium mb-1">Preferred Contact Method</label>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleFormChange}
                  className="w-full border rounded-md px-3 py-2 mt-1"
                >
                  <option value="">Select</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Zoom">Zoom</option>
                </select>
                {formErrors.contactMethod && <p className="text-red-500 text-sm">{formErrors.contactMethod}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm sm:text-base font-medium mb-1">Short Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleFormChange}
                  className="w-full border rounded-md px-3 py-2 mt-1"
                  rows="3"
                />
                {formErrors.bio && <p className="text-red-500 text-sm">{formErrors.bio}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm sm:text-base font-medium mb-1">LinkedIn Profile</label>
                <input
                  name="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={handleFormChange}
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
                {formErrors.linkedin && <p className="text-red-500 text-sm">{formErrors.linkedin}</p>}
              </div>

              <button type="submit" className="bg-[#294D89] hover:bg-[#1f3b6e] text-white px-6 py-2 rounded-md">
                Submit
              </button>
            </form>
          )}
        </>
      )}

      {/* Request Modal */}
      {isRequestModalOpen && selectedMentor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 px-4 sm:px-0">
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-lg">
            <h2 className="text-xl font-semibold text-[#294D89] mb-4">Confirm Mentorship Request</h2>
            <p className="mb-4">Do you want to request mentorship from <strong>{selectedMentor.name}</strong>?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setIsRequestModalOpen(false)} className="px-4 py-2 rounded-md bg-gray-300 text-gray-800">Cancel</button>
              <button
                onClick={() => {
                  setIsRequestModalOpen(false);
                  alert('Mentorship request sent successfully!');
                }}
                className="px-4 py-2 rounded-md bg-[#294D89] text-white"
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