import React from "react";
import './Categories.css'
const categories = ["Web Development", "Data Science", "Design", "Marketing", "Business","python"];

function Categories() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Top Categories</h2>
      <div className="row">
        {categories.map((cat, index) => (
          <div className="col-6 col-md-2 mb-3" key={index}>
            <div className="border rounded text-center py-3 bg-light category-name">{cat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
