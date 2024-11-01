import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";


const Profile = () => {
  const user = useSelector((store) => store.user);  
  return (
    user && (
    <div className="flex justify-center items-center mx-30">
      <EditProfile user={user}></EditProfile>      
    </div>
    )
  );
};

export default Profile;
