import React from "react";

const UserCard = ({ data }) => {
  console.log("data => ", data);
  const { firstName, lastName, photo, about, age, gender, skills } = data;
  return (
    <div className="card bg-base-200 w-96 shadow-xl">
      <figure>
        <img src={photo} alt="User Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <p>{age} years old, {gender}</p>        
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Reject</button>
          <button className="btn btn-secondary">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
