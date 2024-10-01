import React, { useState } from "react";
import Button from "./Button";
import Subject from "./Subject";
import subjectsData from "../../subjectsData.json";

const subjectDescription = `Learn more about the tracks and subjects offered in UST Computer Science`;

const Subjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Data Science");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="main-container flex flex-col items-center justify-center my-[100px] p-5"
      id="subjects"
    >
      <div className="upper-container text-center mb-20">
        <h3>Subjects</h3>
        <h6 className="mb-6">{subjectDescription}</h6>
        <div className="button-container flex justify-center gap-[15px]">
          <Button
            text="Data Science"
            onClick={() => handleCategoryChange("Data Science")}
          />
          <Button
            text="Core Science"
            onClick={() => handleCategoryChange("Core Science")}
          />
          <Button
            text="Game Development"
            onClick={() => handleCategoryChange("Game Development")}
          />
        </div>
      </div>
      <div className="subjects-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {subjectsData[selectedCategory].map((subject, index) => (
          <Subject
            key={index}
            subjectCode={subject.subjectCode}
            subjectName={subject.subjectName}
          />
        ))}
      </div>
    </div>
  );
};

export default Subjects;
