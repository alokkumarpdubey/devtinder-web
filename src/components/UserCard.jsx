import PropTypes from "prop-types";


const UserCard = ({ data }) => {
  const { firstName, lastName, photo, about, age, gender, skills } = data;
  const userSkills = skills && skills.length ? skills.join(", ") : "";
  console.log("data => ", data);
  console.log("Skills => ", skills);
  console.log("userSkills => ", userSkills);
  return (
    <div className="card bg-base-200 w-96 shadow-xl">
      <figure>
        <img src={photo} alt="User Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        {age ? (
          <p>
            {age} years old, {gender}
          </p>
        ) : (
          <p>
            {gender}
          </p>
        )}
        <p>{about}</p>
        <p>Skills: {userSkills}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Reject</button>
          <button className="btn btn-secondary">Accept</button>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
    data: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      age: PropTypes.number,
      skills: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
  };

export default UserCard;
