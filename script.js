var resumeData;

function generateResume() {
    var personalInfo = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };
    var education = {
        degree: document.getElementById("degree").value,
        institution: document.getElementById("institution").value,
        graduationYear: document.getElementById("graduationYear").value
    };
    var skills = document.getElementById("skills").value.split(',');
    var workExperience = {
        jobTitle: document.getElementById("jobTitle").value,
        company: document.getElementById("company").value,
        duration: document.getElementById("duration").value,
        responsibilities: document.getElementById("responsibilities").value
    };
    resumeData = { personalInfo: personalInfo, education: education, skills: skills, workExperience: workExperience };
    displayResume();
}
function displayResume() {
    var resumeSection = document.getElementById("generatedResume");
    resumeSection.innerHTML = "\n        <h2 contenteditable=\"true\" onblur=\"updateField('name', this.textContent)\">".concat(resumeData.personalInfo.name, "</h2>\n        <p contenteditable=\"true\" onblur=\"updateField('email', this.textContent)\">Email: ").concat(resumeData.personalInfo.email, "</p>\n        <p contenteditable=\"true\" onblur=\"updateField('phone', this.textContent)\">Phone: ").concat(resumeData.personalInfo.phone, "</p>\n        \n        <h3>Education</h3>\n        <p>\n            <span contenteditable=\"true\" onblur=\"updateField('degree', this.textContent)\">").concat(resumeData.education.degree, "</span>, \n            <span contenteditable=\"true\" onblur=\"updateField('institution', this.textContent)\">").concat(resumeData.education.institution, "</span> \n            (<span contenteditable=\"true\" onblur=\"updateField('graduationYear', this.textContent)\">").concat(resumeData.education.graduationYear, "</span>)\n        </p>\n        \n        <h3>Skills</h3>\n        <p contenteditable=\"true\" onblur=\"updateField('skills', this.textContent)\">").concat(resumeData.skills.join(", "), "</p>\n        \n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\" onblur=\"updateField('jobTitle', this.textContent)\">").concat(resumeData.workExperience.jobTitle, " at \n            <span contenteditable=\"true\" onblur=\"updateField('company', this.textContent)\">").concat(resumeData.workExperience.company, "</span>\n        </p>\n        <p contenteditable=\"true\" onblur=\"updateField('duration', this.textContent)\">").concat(resumeData.workExperience.duration, "</p>\n        <p contenteditable=\"true\" onblur=\"updateField('responsibilities', this.textContent)\">Responsibilities: ").concat(resumeData.workExperience.responsibilities, "</p>\n    ");
}
// Function to update specific fields in the resumeData object
function updateField(field, value) {
    if (!value)
        return; // Exit if the content is empty or null
    switch (field) {
        case 'name':
            resumeData.personalInfo.name = value;
            break;
        case 'email':
            resumeData.personalInfo.email = value;
            break;
        case 'phone':
            resumeData.personalInfo.phone = value;
            break;
        case 'degree':
            resumeData.education.degree = value;
            break;
        case 'institution':
            resumeData.education.institution = value;
            break;
        case 'graduationYear':
            resumeData.education.graduationYear = value;
            break;
        case 'skills':
            resumeData.skills = value.split(',').map(function (skill) { return skill.trim(); });
            break;
        case 'jobTitle':
            resumeData.workExperience.jobTitle = value;
            break;
        case 'company':
            resumeData.workExperience.company = value;
            break;
        case 'duration':
            resumeData.workExperience.duration = value;
            break;
        case 'responsibilities':
            resumeData.workExperience.responsibilities = value;
            break;
    }
}
