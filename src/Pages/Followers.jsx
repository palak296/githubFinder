import React, { useContext, useEffect, useState } from "react";
import UserContext from "../utilities/UserContext";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const Followers = () => {
  const [fdata, setfdata] = useState([]);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (user) => {
    userContext.setUsername(user);
    navigate("/home");
  };

  useEffect(() => {
    async function fetchFdata() {
      const data = await fetch(
        `https://api.github.com/users/${userContext.username}/followers`
      );
      const json = await data.json();
      setfdata(json);
    }
    fetchFdata();
  }, []);

  return (
    <>
      <Header  />
      <div className="h-screen bg-slate-500">
        <div className="bg-gray-800 w-full max-w-md rounded-md p-8">
          {fdata.map((i) => {
            return (
              <div
                key={i.id}
                className="flex items-center mb-3 cursor-pointer"
                onClick={() => {
                  handleClick(i.login);
                }}
              >
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={i.avatar_url}
                  alt="avatar"
                />
                <div className="text-gray-200">{i.login}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Followers;
