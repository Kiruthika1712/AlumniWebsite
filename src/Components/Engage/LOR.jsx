import React, { useState } from 'react';

const LetterOfRecommendation = () => {
  const [role, setRole] = useState('');
  const [template, setTemplate] = useState('');
  const [details, setDetails] = useState({
    name: '',
    email: '',
    institution: 'Pondicherry University Department of Computer Science',
    purpose: '',
    recommenderTitle: '',
    recommenderName: '',
    academicPerformance: '',
    workExperience: '',
    skills: '',
    achievements: '',
    areasOfContribution: '',
    projects: '',
    specificSkills: '',
    additionalNotes: '',
    date: '',
  });
  const [preview, setPreview] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    role: '',
    template: '',
    name: '',
    recommenderName: '',
    recommenderTitle: '',
    academicPerformance: '',
    workExperience: '',
    skills: '',
    projects: '',
    purpose: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Reset error message when the user changes the input
    }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setTemplate('');
    setPreview('');
    setShowPreview(false);
    setErrorMessages({
      ...errorMessages,
      role: '',
    });
  };

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
    setPreview('');
    setShowPreview(false);
    setErrorMessages({
      ...errorMessages,
      template: '',
    });
  };

  const handleGenerateLOR = async () => {
    // Clear any existing error messages before the validation check
    setErrorMessages({
      role: '',
      template: '',
      name: '',
      recommenderName: '',
      recommenderTitle: '',
      academicPerformance: '',
      workExperience: '',
      skills: '',
      projects: '',
      purpose: '',
    });
  
    const errors = {};
  
    // Validation checks
    if (!role) errors.role = 'Role is required.';
    if (!template) errors.template = 'Template type is required.';
    if (!details.name) errors.name = 'Name is required.';
    if (!details.recommenderName) errors.recommenderName = 'Recommender\'s name is required.';
    if (!details.recommenderTitle) errors.recommenderTitle = 'Recommender\'s title is required.';
    if (template === 'academic' && !details.academicPerformance) errors.academicPerformance = 'Academic performance is required.';
    if (template === 'job' && !details.skills) errors.skills = 'Skills are required.';
    if (template === 'job' && !details.workExperience) errors.workExperience = 'Work experience is required.';
    if (template === 'academic' && !details.projects) errors.projects = 'Projects are required.';
    if (template === 'general' && !details.purpose) errors.purpose = 'Purpose is required.';
    if (template === 'academic' && !details.areasOfContribution) errors.areasOfContribution = 'Areas of contribution are required.';
    if (template === 'job' && !details.achievements) errors.achievements = 'Achievements are required.';
  
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors); // Set error messages if validation fails
      return;
    }
  
    // Continue with LOR generation if validation passes
    const lorData = {
      role,
      template,
      name: details.name,
      recommender_name: details.recommenderName,
      recommender_title: details.recommenderTitle,
      academic_performance: details.academicPerformance || '',
      work_experience: details.workExperience || '',
      skills: details.skills || '',
      projects: details.projects || '',
      areas_of_contribution: details.areasOfContribution || '',
      achievements: details.achievements || '',
      purpose: details.purpose || '',
    };
  
    const currentDate = new Date().toLocaleDateString();
    let lorContent = `Letter of Recommendation\n\nDate: ${currentDate}\n\n`;

    const greeting = "Respected Sir/Madam,";

    // Build content based on role and template
    if (role === 'student') {
      if (template === 'academic') {
        lorContent += `${greeting}\n\nI am writing to highly recommend ${details.name} for academic recognition at your esteemed institution. As a student at ${details.institution}, ${details.name} has consistently demonstrated exceptional academic performance in courses such as ${details.academicPerformance}. Their intellectual curiosity, critical thinking, and problem-solving abilities have been evident in their work on projects such as ${details.projects}. ${details.name} has also made significant contributions in ${details.areasOfContribution}, showcasing their leadership and initiative. I am confident that ${details.name} will continue to excel in all future academic endeavors.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      } else if (template === 'job') {
        lorContent += `${greeting}\n\nI am writing to recommend ${details.name} for a professional position at your organization. ${details.name} has demonstrated outstanding skills in ${details.skills}, and their work experience includes ${details.workExperience}. Their achievements in ${details.achievements} highlight their ability to deliver high-quality work under pressure. I have no doubt that ${details.name} will bring the same level of professionalism and excellence to your team.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      } else {
        lorContent += `${greeting}\n\nIt is with great pleasure that I recommend ${details.name} for ${details.purpose}. ${details.name} is an individual of high integrity, possessing strong leadership skills and a relentless work ethic. They have been a valuable asset in our academic community and I believe they will excel in any future endeavor. I wholeheartedly support their application and future ambitions.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      }
    } else if (role === 'alumni') {
      if (template === 'academic') {
        lorContent += `${greeting}\n\nI am writing to recommend ${details.name}, an alumni of ${details.institution}, for academic recognition. ${details.name} has consistently demonstrated outstanding dedication and contributions in their field of study, particularly in ${details.areasOfContribution}. Their passion for research and innovation is evident in their work on ${details.projects}. ${details.name}'s leadership and collaborative spirit in academic settings have made a lasting impact, and I am confident that their academic career will continue to flourish.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      } else if (template === 'job') {
        lorContent += `${greeting}\n\nIt is my privilege to recommend ${details.name} for a position at your organization. With a wealth of experience in ${details.skills}, ${details.name} has made significant contributions in their professional career, particularly in ${details.achievements}. Their work on ${details.projects} has demonstrated their exceptional problem-solving skills and leadership abilities. ${details.name}'s experience and dedication make them an excellent candidate for any role.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      } else {
        lorContent += `${greeting}\n\nI am pleased to recommend ${details.name} for ${details.purpose}. Their contributions, both in academic and professional contexts, have been truly remarkable. They have consistently demonstrated outstanding integrity, leadership, and dedication, making them an ideal candidate for future opportunities.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      }
    } else if (role === 'staff') {
      if (template === 'academic') {
        lorContent += `${greeting}\n\nI am honored to recommend ${details.name}, a colleague at ${details.institution}, for academic recognition. ${details.name} has been instrumental in contributing to various academic initiatives, particularly in ${details.areasOfContribution}. Their leadership in ${details.projects} and their ability to collaborate with others has made a significant impact in our department. ${details.name} continues to demonstrate an unwavering commitment to academic excellence and student success.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      } else if (template === 'job') {
        lorContent += `${greeting}\n\nIt is with confidence that I recommend ${details.name} for a position at your esteemed organization. ${details.name} has consistently delivered high-quality work in their role at ${details.institution}, and their expertise in ${details.skills} has been invaluable to our team. ${details.name}'s accomplishments, including ${details.achievements}, showcase their ability to perform under pressure and drive results.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      } else {
        lorContent += `${greeting}\n\nIt is a pleasure to recommend ${details.name} for ${details.purpose}. Their contributions to our academic community and beyond have been exceptional, and I have no doubt they will continue to thrive in future endeavors.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      }
    }

    setPreview(lorContent);
    setShowPreview(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(preview);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://your-backend-url.com/api/lor/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${yourToken}`,
        },
        body: JSON.stringify(lorData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit LOR');
      }
  
      alert('LOR submitted successfully!');
    } catch (error) {
      console.error('Error submitting LOR:', error);
      alert('Error submitting LOR');
    }
  };

  const styles = {
    container: { maxWidth: '800px', margin: '0 auto', paddingTop: '30px' },
    heading: { fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' },
    formGroup: { marginBottom: '20px' },
    label: { display: 'block', marginBottom: '5px', fontWeight: 'bold' },
    input: { width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' },
    textarea: { width: '100%', padding: '10px', height: '100px', border: '1px solid #ccc', borderRadius: '4px' },
    button: {
      backgroundColor: '#294D89',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      borderRadius: '5px',
    },
    previewContainer: {
      backgroundColor: '#f9f9f9',
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginTop: '20px',
    },
    copyButton: {
      backgroundColor: '#EB6F63',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      borderRadius: '5px',
      marginTop: '10px',
    },
    error: {
      color: 'red',
      fontSize: '12px',
      marginTop: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Letter of Recommendation Generator</h1>
      <h1 style={styles.heading}>Letter of Recommendation Generator</h1>
      {/* Role Selection */}
      <div style={styles.formGroup}>
        <label style={styles.label}>Role</label>
        <select name="role" style={styles.input} value={role} onChange={handleRoleChange}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="alumni">Alumni</option>
          <option value="staff">Staff</option>
        </select>
        {errorMessages.role && <div style={styles.error}>{errorMessages.role}</div>}
      </div>

      {/* Template Selection */}
      <div style={styles.formGroup}>
        <label style={styles.label}>Template Type</label>
        <select name="template" style={styles.input} value={template} onChange={handleTemplateChange}>
          <option value="">Select Template</option>
          <option value="academic">Academic</option>
          <option value="job">Job</option>
          <option value="general">General</option>
        </select>
        {errorMessages.template && <div style={styles.error}>{errorMessages.template}</div>}
      </div>

      {/* Fields for All Templates */}
      <div style={styles.formGroup}>
        <label style={styles.label}>Your Name</label>
        <input
          type="text"
          name="name"
          style={styles.input}
          value={details.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
        />
        {errorMessages.name && <div style={styles.error}>{errorMessages.name}</div>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Recommender's Name</label>
        <input
          type="text"
          name="recommenderName"
          style={styles.input}
          value={details.recommenderName}
          onChange={handleInputChange}
          placeholder="Enter recommender's name"
        />
        {errorMessages.recommenderName && <div style={styles.error}>{errorMessages.recommenderName}</div>}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Recommender's Title</label>
        <input
          type="text"
          name="recommenderTitle"
          style={styles.input}
          value={details.recommenderTitle}
          onChange={handleInputChange}
          placeholder="Enter recommender's title"
        />
        {errorMessages.recommenderTitle && <div style={styles.error}>{errorMessages.recommenderTitle}</div>}
      </div>

      {template === 'academic' && (
        <div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Academic Performance</label>
            <textarea
              name="academicPerformance"
              style={styles.textarea}
              value={details.academicPerformance}
              onChange={handleInputChange}
              placeholder="Describe the academic performance"
            />
            {errorMessages.academicPerformance && <div style={styles.error}>{errorMessages.academicPerformance}</div>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Projects</label>
            <textarea
              name="projects"
              style={styles.textarea}
              value={details.projects}
              onChange={handleInputChange}
              placeholder="List the projects"
            />
            {errorMessages.projects && <div style={styles.error}>{errorMessages.projects}</div>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Areas of Contribution</label>
            <textarea
              name="areasOfContribution"
              style={styles.textarea}
              value={details.areasOfContribution}
              onChange={handleInputChange}
              placeholder="Describe the areas of contribution"
            />
            {errorMessages.areasOfContribution && <div style={styles.error}>{errorMessages.areasOfContribution}</div>}
          </div>
        </div>
      )}

{template === 'job' && (
  <div>
    <div style={styles.formGroup}>
      <label style={styles.label}>Skills</label>
      <textarea
        name="skills"
        style={styles.textarea}
        value={details.skills}
        onChange={handleInputChange}
        placeholder="Describe the skills"
      />
      {errorMessages.skills && <div style={styles.error}>{errorMessages.skills}</div>}
    </div>
    <div style={styles.formGroup}>
      <label style={styles.label}>Work Experience</label>
      <textarea
        name="workExperience"
        style={styles.textarea}
        value={details.workExperience}
        onChange={handleInputChange}
        placeholder="Describe work experience"
      />
      {errorMessages.workExperience && <div style={styles.error}>{errorMessages.workExperience}</div>}
    </div>
    <div style={styles.formGroup}>
      <label style={styles.label}>Achievements</label>
      <textarea
        name="achievements"
        style={styles.textarea}
        value={details.achievements}
        onChange={handleInputChange}
        placeholder="List achievements"
      />
      {errorMessages.achievements && <div style={styles.error}>{errorMessages.achievements}</div>}
    </div>
  </div>
)}


      {template === 'general' && (
        <div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Purpose</label>
            <textarea
              name="purpose"
              style={styles.textarea}
              value={details.purpose}
              onChange={handleInputChange}
              placeholder="Purpose for LOR"
            />
            {errorMessages.purpose && <div style={styles.error}>{errorMessages.purpose}</div>}
          </div>
        </div>
      )}

      <div style={styles.formGroup}>
        <button style={styles.button} onClick={handleGenerateLOR}>Generate LOR</button>
      </div>

      {showPreview && (
  <div style={styles.previewContainer}>
    <h3>Preview:</h3>
    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
      {preview}
    </pre>
    <button style={styles.copyButton} onClick={handleCopy}>Copy Preview</button>
  </div>
)}


      {showPreview && (
        <div className='pt-10' style={styles.formGroup}>
          <button style={styles.button} onClick={handleSubmit}>Submit LOR</button>
        </div>
      )}
    </div>
  );
};

export default LetterOfRecommendation;
