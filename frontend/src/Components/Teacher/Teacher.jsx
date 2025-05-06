import React from "react";
import "./Teacher.css"; 

const teachers = [
  {
    title: "Full Stack Web Developer",
    salary: "$127,005 average salary (US)",
    roles: "16,500 open roles (US)",
    rating: "4.7",
    reviews: "440K ratings",
    hours: "87.5 total hours",
    image: "https://s.udemycdn.com/career-academies/careers/full-stack-web-developer/frontend-webdev-human.png", // Replace with your local image paths
    bgColor: "#FFD580",
  },
  {
    title: "Digital Marketer",
    salary: "$61,126 average salary (US)",
    roles: "36,600 open roles (US)",
    rating: "4.6",
    reviews: "3.3K ratings",
    hours: "28.4 total hours",
    image: "https://s.udemycdn.com/career-academies/careers/full-stack-web-developer/frontend-webdev-human.png",
    bgColor: "#9F5AE0", 
  },
  {
    title: "Data Scientist",
    salary: "$126,629 average salary (US)",
    roles: "20,800 open roles (US)",
    rating: "4.6",
    reviews: "215K ratings",
    hours: "46.8 total hours",
    image: "https://s.udemycdn.com/career-academies/careers/full-stack-web-developer/frontend-webdev-human.png",
    bgColor: "#D94FCF", 
  },
];

const Teacher = () => {
  return (
    <div className="teachers-section">
      <h2 className="teachers-title">Ready to reimagine your career?</h2>
      <p className="teachers-subtitle">
        Get the skills and real-world experience employers want with Career Accelerators.
      </p>
      <div className="teachers-grid">
        {teachers.map((teacher, index) => (
          <div className="teacher-card" key={index}>
            <div
              className="teacher-image"
              style={{ backgroundColor: teacher.bgColor }}
            >
              <img src={teacher.image} alt={teacher.title} />
            </div>
            <div className="teacher-content">
              <h3>{teacher.title}</h3>
              <p className="salary">
                {teacher.salary} • {teacher.roles}
              </p>
              <div className="teacher-footer">
                <span className="rating">⭐ {teacher.rating}</span>
                <span className="reviews">{teacher.reviews}</span>
                <span className="hours">{teacher.hours}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
