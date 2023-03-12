import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import UserContext from "../utilities/UserContext";

const HomePage = () => {
  const [sdata, setsdata] = useState("");
  const userContext = useContext(UserContext);
  console.log(userContext.username);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/users/${userContext.username}`
      );
      const data = await response.json();
      console.log(data);
      setsdata(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="inline-block bg-slate-500">
        <div className="flex flex-col item-center py-8">
          <div className="rounded-full overflow-hidden w-32 h-32">
            <img
              className="object-cover object-center h-full w-full"
              src={sdata.avatar_url}
              alt="Avatar"
            />
          </div>
          <div className="px-6 text-bold text-gray-200">{sdata.name}</div>
          <div className="px-6 text-bold text-gray-400">@{sdata.login}</div>
          <div className="flex justify-evenly mt-4">
            <Link to="/follower">
              <span className="font-semibold text-gray-200">
                Followers: {sdata.followers}
              </span>
            </Link>
            <Link to="/following">
              <span className="pl-10 font-semibold text-gray-200">
                Following: {sdata.following}
              </span>
            </Link>
          </div>
          <div className="mt-4 text-gray-200">
            public Repos: {sdata.public_repos}
          </div>
          <button className="bg-gray-200 px-4 py-2 rounded-md mt-4">
            <a href={sdata.html_url} target="_blank" rel="noreferrer">
              <span className="font-bold text-slate-500">View profile</span>
            </a>
          </button>
        </div>
        <div className="bg-gray-800 w-1/3 h-full"></div>
      </div>
    </>
  );
};

export default HomePage;
