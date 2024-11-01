import axios from "axios";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../utils/userSlice";
import { API_URL, UPDATE_PROFILE_API } from "../utils/constants";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [photo, setPhoto] = useState(user?.photo);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const [showToast, setShowToast] = useState(false);

  const handleUpdate = async () => {
    try {
      const response = await axios.post(
        API_URL + UPDATE_PROFILE_API,
        {
          firstName,
          lastName,
          photo,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(response.data.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center mx-10">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Edit Profile</h2>
            <div className="card-actions justify-end">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">gender</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">About</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>
            </div>
            <p className="text-error">{error}</p>
            <div className="card-actions justify-end mt-5">
              <button className="btn btn-primary" onClick={handleUpdate}>
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard
        data={{ firstName, lastName, age, gender, about, photo }}
      ></UserCard>
      {showToast && (
        <div className="toast toast-top toast-end mt-14">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

EditProfile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    about: PropTypes.string,
    photo: PropTypes.string,
  }),
};

export default EditProfile;
