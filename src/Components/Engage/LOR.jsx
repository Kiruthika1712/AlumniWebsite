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
    date: '', // Adding date field for proper formatting
  });
  const [preview, setPreview] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setTemplate('');
  };

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  const generateLOR = () => {
    const currentDate = new Date().toLocaleDateString(); // Format current date

    let lorContent = `Letter of Recommendation\n\nDate: ${currentDate}\n\n`;

    let greeting = "To Whom It May Concern,";

    if (role === 'student') {
      if (template === 'academic') {
        lorContent += `${greeting}\n\nI am writing to highly recommend ${details.name} for academic recognition at your esteemed institution. As a student at ${details.institution}, ${details.name} has consistently demonstrated exceptional academic performance in courses such as ${details.academicPerformance}. Their intellectual curiosity, critical thinking, and problem-solving abilities have been evident in their work on projects such as ${details.projects}. ${details.name} has also made significant contributions in ${details.areasOfContribution}, showcasing their leadership and initiative. I am confident that ${details.name} will continue to excel in all future academic endeavors.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      } else if (template === 'job') {
        lorContent += `${greeting}\n\nI am writing to recommend ${details.name} for a professional position at your organization. ${details.name} has demonstrated outstanding skills in ${details.skills}, and their work experience includes ${details.workExperience}. Their achievements in ${details.achievements} highlight their ability to deliver high-quality work under pressure. I have no doubt that ${details.name} will bring the same level of professionalism and excellence to your team.\n\nSincerely,\n${details.recommenderName}, ${details.recommenderTitle}`;
      } else if (template === 'general') {
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

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Generate Letter of Recommendation (LOR)</h1>

      <div style={styles.formGroup}>
        <label style={styles.label}>Role</label>
        <select style={styles.input} onChange={handleRoleChange} value={role}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="alumni">Alumni</option>
          <option value="staff">Staff</option>
        </select>
      </div>

      {role && (
        <div style={styles.formGroup}>
          <label style={styles.label}>Recommendation Type</label>
          <select style={styles.input} onChange={handleTemplateChange} value={template}>
            <option value="">Select Template</option>
            <option value="academic">Academic</option>
            <option value="job">Job/Professional</option>
            <option value="general">General</option>
          </select>
        </div>
      )}

      <div style={styles.formGroup}>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          style={styles.input}
          name="name"
          value={details.name}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          style={styles.input}
          name="email"
          value={details.email}
          onChange={handleInputChange}
          placeholder="Your Email"
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Institution Name</label>
        <input
          type="text"
          style={styles.input}
          name="institution"
          value={details.institution}
          onChange={handleInputChange}
          placeholder="Institution Name"
          readOnly
        />
      </div>


      <div style={styles.formGroup}>
        <label style={styles.label}>Recommender's Name</label>
        <input
          type="text"
          style={styles.input}
          name="recommenderName"
          value={details.recommenderName}
          onChange={handleInputChange}
          placeholder="Recommender's Name"
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Recommender's Title</label>
        <input
          type="text"
          style={styles.input}
          name="recommenderTitle"
          value={details.recommenderTitle}
          onChange={handleInputChange}
          placeholder="Recommender's Title"
        />
      </div>

      {template === 'academic' && (
        <>
          <div style={styles.formGroup}>
            <label style={styles.label}>Academic Performance</label>
            <textarea
              style={styles.textarea}
              name="academicPerformance"
              value={details.academicPerformance}
              onChange={handleInputChange}
              placeholder="Details about academic performance"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Projects</label>
            <textarea
              style={styles.textarea}
              name="projects"
              value={details.projects}
              onChange={handleInputChange}
              placeholder="Details about key academic projects"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Areas of Contribution</label>
            <textarea
              style={styles.textarea}
              name="areasOfContribution"
              value={details.areasOfContribution}
              onChange={handleInputChange}
              placeholder="Any contributions made in academic setting"
            />
          </div>
        </>
      )}

      {template === 'job' && (
        <>
          <div style={styles.formGroup}>
            <label style={styles.label}>Skills</label>
            <textarea
              style={styles.textarea}
              name="skills"
              value={details.skills}
              onChange={handleInputChange}
              placeholder="List of skills"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Work Experience</label>
            <textarea
              style={styles.textarea}
              name="workExperience"
              value={details.workExperience}
              onChange={handleInputChange}
              placeholder="Details about work experience"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Achievements</label>
            <textarea
              style={styles.textarea}
              name="achievements"
              value={details.achievements}
              onChange={handleInputChange}
              placeholder="Key achievements"
            />
          </div>
        </>
      )}

      <div style={styles.formGroup}>
        <label style={styles.label}>Additional Notes</label>
        <textarea
          style={styles.textarea}
          name="additionalNotes"
          value={details.additionalNotes}
          onChange={handleInputChange}
          placeholder="Any additional notes"
        />
      </div>

      <button style={styles.button} onClick={generateLOR}>Generate LOR</button>

      {showPreview && (
        <div style={styles.preview}>
          <h2 style={styles.heading}>LOR Preview</h2>
          <pre style={styles.lorText}>{preview}</pre>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    color: '#294D89',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    height: '150px',
  },
  button: {
    backgroundColor: '#EB6F63',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  preview: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  lorText: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    fontSize: '14px',
  },
};

export default LetterOfRecommendation;
