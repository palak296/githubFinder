import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utilities/UserContext";

const Body = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const userContext = useContext(UserContext);
  const handleButtonClick = () => {
    userContext.setUsername(username);
    if (username != "") navigate("/home");
  };

  const handleUsernameChange = (e) => {
    setusername(e.target.value);
  };

  return (
    <div className=" grid place-content-center mt-20">
      <div className="  ">
        <h2 className="text-3xl text-center text-bold text-yellow-900 mb-10">
          Thanks for using!
        </h2>

        <form>
          <div className="mb-6">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Name*
            </label>
            <input
              type="text"
              id="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#f9f3ee] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white hover:bg-[#6a503b] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#423122] dark:hover:bg-[#6a503b] dark:focus:ring-blue-900"
            onClick={handleButtonClick}
          >
            Proceed to homepage
          </button>{" "}
          ;
        </form>
      </div>
    </div>
  );
};

export default Body;
