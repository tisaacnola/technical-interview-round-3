import React from "react";

export default function Card({program}){

  return (
    <div className="card">
      <img src={program.image.cloudinaryURL} alt="card--img"/>
      <h3>{program.name}</h3>
      <h4>{program.institution.name}</h4>
      <h5>{program.programType}</h5>
    </div>
  );
};