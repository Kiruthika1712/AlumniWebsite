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
    <div className="mx-auto font-poppins text-lg">
      <SectionHeader
        title="Mentor Connect"
        subtitle="We are bringing mentors and mentees together to exchange valuable know-how."
        className="text-center mb-12"
      />

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 overflow-x-auto scrollbar-hide pt-10">
        {['find', 'become'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium text-lg transition-all duration-200 ${
              activeTab === tab
                ? 'bg-LightRed text-white shadow-md'
                : 'bg-gray-100 text-muted hover:bg-gray-200'
            }`}
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-DarkBlue focus:border-DarkBlue transition-all"
            />
          </div>

          {loading ? (
            <p className="text-center text-muted">Loading mentors...</p>
          ) : fetchError ? (
            <p className="text-center text-red-500">Error: {fetchError}</p>
          ) : filteredMentors.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12 px-4 sm:px-20">
              {filteredMentors.map((mentor) => (
  <div
    key={mentor.id}
    className="bg-white shadow-sm hover:shadow-lg rounded-xl p-6 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1"
  >
    <div>
      <h2 className="text-2xl font-semibold text-DarkBlue">{mentor.mentor_user_name}</h2> {/* Displaying mentor name */}
      <p className="text-xl truncate text-LightRed">
        {mentor.role} at {mentor.company}
      </p>
      <p className="text-lg text-muted mb-3">Industry: {mentor.industry}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {(mentor.tags || []).map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-LightBlue text-DarkBlue px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-lg text-muted">Availability: {mentor.availability}</p>
    </div>
    <button
      onClick={() => handleRequestMentorship(mentor)}
      className="mt-4 w-full bg-DarkBlue hover:bg-dark-hover text-white px-4 py-2 rounded-lg transition-colors"
    >
      Request Mentorship
    </button>
  </div>
))}

            </div>
          ) : (
            <p className="text-center text-muted mt-6">No mentors found matching your search.</p>
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
            <form
              onSubmit={handleFormSubmit}
              className="bg-white shadow-md p-6 sm:p-8 rounded-xl max-w-2xl mx-auto mb-10"
            >
              {[['Industry', 'industry'], ['Current Role / Job Title', 'role'], ['Company Name', 'company'], ['Availability', 'availability']].map(([label, name]) => (
                <div key={name} className="mb-5">
                  <label className="block text-lg font-medium text-DarkBlue mb-1">{label}</label>
                  <input
                    name={name}
                    value={formData[name]}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-DarkBlue focus:border-DarkBlue transition-all"
                  />
                  {formErrors[name] && (
                    <p className="text-red-500 text-xs mt-1">{formErrors[name]}</p>
                  )}
                </div>
              ))}

              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-2">
                  Mentoring Areas
                </label>
                <div className="flex flex-wrap gap-4">
                  {['Career', 'Higher Studies', 'Skill Development'].map((area) => (
                    <label key={area} className="flex items-center gap-2 text-lg text-muted">
                      <input
                        type="checkbox"
                        value={area}
                        checked={formData.guidanceAreas.includes(area)}
                        onChange={handleFormChange}
                        className="h-4 w-4 text-DarkBlue focus:ring-DarkBlue border-gray-300 rounded"
                      />
                      {area}
                    </label>
                  ))}
                </div>
                {formErrors.guidanceAreas && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.guidanceAreas}</p>
                )}
              </div>

              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-1">
                  Preferred Contact Method
                </label>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-DarkBlue focus:border-DarkBlue transition-all"
                >
                  <option value="">Select a method</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                </select>
                {formErrors.contactMethod && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.contactMethod}</p>
                )}
              </div>

              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-1">LinkedIn Profile</label>
                <input
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-DarkBlue focus:border-DarkBlue transition-all"
                />
                {formErrors.linkedin && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.linkedin}</p>
                )}
              </div>

              <div className="mb-5">
                <label className="block text-lg font-medium text-DarkBlue mb-1">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-DarkBlue focus:border-DarkBlue transition-all"
                />
                {formErrors.bio && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.bio}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-DarkBlue text-white py-2 rounded-lg hover:bg-dark-hover transition-all"
              >
                Submit Mentor Profile
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default MentorshipPage;
