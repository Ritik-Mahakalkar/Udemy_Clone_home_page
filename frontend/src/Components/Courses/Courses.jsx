import React from "react";
import './Courses.css';

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "John Doe",
    price: "$19.99",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    id: 2,
    title: "Advanced Node.js",
    instructor: "Jane Smith",
    price: "$24.99",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 3,
    title: "Mastering Python",
    instructor: "Mark Lee",
    price: "$14.99",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
];

function Courses() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Featured Courses</h2>
      <div className="row">
        {courses.map(course => (
          <div className="col-md-4 mb-4" key={course.id}>
            <div className="card h-100">
              <img
                src={course.image}
                alt={course.instructor}
                className="card-img-top"
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Instructor: {course.instructor}</p>
                <p className="card-text fw-bold">{course.price}</p>
                <button className="btn button-enroll w-100">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;

