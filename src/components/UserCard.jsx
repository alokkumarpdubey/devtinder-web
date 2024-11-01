import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { API_URL, REQUESTS_SEND_API } from "../utils/constants";
import { removeFeeds } from "../utils/feedSlice";

const UserCard = ({ data }) => {
  const { _id, firstName, lastName, photo, about, age, gender, skills } = data;
  const userSkills = skills && skills.length ? skills.join(", ") : "";

  const dispatch = useDispatch();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(false);

  const handleRequests = async (action, _id) => {
    try {
      const response = await axios.post(
        API_URL + REQUESTS_SEND_API + action + "/" + _id,
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {

        setToastMessage(response.data.message);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
        dispatch(removeFeeds(_id));
      }
    } catch (error) {
      console.log("REQUESTS ERROR: ", error);
    }
  };

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
          <p>{gender}</p>
        )}
        <p>{about}</p>
        <p>Skills: {userSkills}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleRequests("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleRequests("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-end mt-14">
          <div className="alert alert-success">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
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
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default UserCard;
