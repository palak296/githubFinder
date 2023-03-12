import React, { useContext, useEffect, useState } from "react";
import UserContext from "../utilities/UserContext";
import { useNavigate } from "react-router-dom";

const Followers = () => {
  const [fdata, setfdata] = useState([]);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (user) => {
    userContext.setUsername(user);

    navigate("/home");
  };

  useEffect(() => {
    console.log(userContext.username);
    async function fetchFdata() {
      const data = await fetch(
        `https://api.github.com/users/${userContext.username}/following`
      );
      const json = await data.json();
      setfdata(json);
    }
    fetchFdata();
  }, []);
  return (
    <>
      {fdata.map((i) => {
        return (
          <div>
            <div
              className="cursor-pointer"
              onClick={() => {
                handleClick(i.login);
              }}
            >
              {i.login}
            </div>
            <img src={i.avatar_url} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Followers;
