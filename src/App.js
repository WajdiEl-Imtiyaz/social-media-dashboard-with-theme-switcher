import "./App.css";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import twitter from "./images/icon-twitter.svg";
import youtube from "./images/icon-youtube.svg";
import down from "./images/icon-down.svg";
import up from "./images/icon-up.svg";
import React from "react";

function App() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white dark:bg-slate-900 ">
      <div className="bg-slate-100 rounded-b-lg dark:bg-slate-800 ">
        <div className="lg:flex lg:items-center lg:justify-between p-8">
          <div>
            <h1 className="font-bold text-2xl dark:text-white">
              Social Media Dashboard
            </h1>
            <h2 className="font-bold text-gray-500 pb-5 dark:text-slate-400 ">
              Total Followers: 23,004
            </h2>
          </div>
          <div className="flex justify-center item-center border-t-2 border-gray-900 pt-5 w- m-auto lg:hidden dark:border-slate-600 "></div>
          <div className="flex items-center">
            <p className="font-bold text-gray-500 dark:text-slate-400 pr-1">
              Dark Mode
            </p>
            <button
              onClick={handleThemeSwitch}
              className="bg-gray-400 rounded-full w-12 h-6 hover:bg-gradient-to-r from-blue-500 to-emerald-500 "
            ></button>
          </div>
        </div>
      </div>

      <div className="lg:flex">
        <div className="flex flex-col pt-5 lg:basis-1/4 " alt="facebook">
          <div className=" bg-blue-500 lg:w-1/16 w-10/12 h-1 m-auto rounded-t-lg"></div>
          <div className="bg-gray-100 lg:w-1/16 w-10/12 h-64 m-auto rounded-b-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="flex flex-row justify-center items-center pt-7">
              <img className="w-1/12 h-1/12" src={facebook} alt="facebook" />
              <p className="font-bold  text-gray-500 pl-2 dark:text-slate-400">
                @nathanf
              </p>
            </div>
            <div className="flex flex-col justify-center items-center pt-7">
              <p className="font-bold text-7xl dark:text-white">1987</p>
              <p className="text-gray-500 pl-2 tracking-widest p-2">
                FOLLOWERS
              </p>
            </div>
            <div className="flex flex-row justify-center items-center pt-4">
              <img className="h-1 " src={up} alt="up" />
              <p className="text-emerald-500 pl-1 font-bold">12 Today</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-5 lg:basis-1/4">
          <div className=" bg-blue-400 lg:w-1/16 w-10/12 h-1 m-auto rounded-t-lg"></div>
          <div className="bg-gray-100 lg:w-1/16 w-10/12 h-64 m-auto rounded-b-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="flex flex-row justify-center items-center pt-7">
              <img className="w-1/12 h-1/12" src={twitter} alt="twitter" />
              <p className="font-bold  text-gray-500 pl-2 dark:text-slate-400">
                @nathanf
              </p>
            </div>
            <div className="flex flex-col justify-center items-center pt-7">
              <p className="font-bold text-7xl  dark:text-white">1044</p>
              <p className="text-gray-500 pl-2 tracking-widest p-2">
                FOLLOWERS
              </p>
            </div>
            <div className="flex flex-row justify-center items-center pt-4">
              <img className="h-1 " src={up} alt="up" />
              <p className="text-emerald-500 pl-1 font-bold">99 Today</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-5 lg:basis-1/4">
          <div className=" bg-gradient-to-r from-yellow-500 to-fuchsia-500 lg:w-1/16 w-10/12 h-1 m-auto rounded-t-lg"></div>
          <div className="bg-gray-100  lg:w-1/16 w-10/12 h-64 m-auto rounded-b-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="flex flex-row justify-center items-center pt-7">
              <img className="w-1/12 h-1/12" src={instagram} alt="instagram" />
              <p className="font-bold  text-gray-500 pl-2 dark:text-slate-400">
                @realnathanf
              </p>
            </div>
            <div className="flex flex-col justify-center items-center pt-7">
              <p className="font-bold text-7xl dark:text-white ">11K</p>
              <p className="text-gray-500 pl-2 tracking-widest p-2">
                FOLLOWERS
              </p>
            </div>
            <div className="flex flex-row justify-center items-center pt-4">
              <img className="h-1 " src={up} alt="up" />
              <p className="text-emerald-500 pl-1 font-bold">1099 Today</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-5 lg:basis-1/4 ">
          <div className=" bg-red-700 lg:w-1/16 w-10/12 h-1 m-auto rounded-t-lg"></div>
          <div className="bg-gray-100 lg:w-1/16 w-10/12 h-64 m-auto rounded-b-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="flex flex-row justify-center items-center pt-7">
              <img className="w-1/12 h-1/12" src={youtube} alt="youtube" />
              <p className="font-bold  text-gray-500 pl-2 dark:text-slate-400">
                Nathan F.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center pt-7">
              <p className="font-bold text-7xl dark:text-white">8239</p>
              <p className="text-gray-500 pl-2 tracking-widest p-2">
                SUBSCRIBERS
              </p>
            </div>
            <div className="flex flex-row justify-center items-center pt-4">
              <img className="h-1 " src={down} alt="down" />
              <p className="text-red-500 pl-1 font-bold">144 Today</p>
            </div>
          </div>
        </div>
      </div>

      <p className="font-bold text-gray-500 text-left pl-8 pb-3 pt-5 text-3xl">
        Overview - Today
      </p>

      <div className="lg:flex">
        <div className="pt-5 lg:basis-1/4 ">
          <div className="flex flex-row bg-gray-100 w-10/12 h-32 m-auto rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="basis-1/2">
              <div className="flex justify-start pl-6 pt-6">
                <div>
                  <p className="font-bold text-gray-500 dark:text-slate-400">
                    Page Views
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-4xl pt-5 pl-6 dark:text-white">
                    87
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex justify-end pr-6 pt-6 ">
                <div>
                  <img className="w-7 h-7 " src={facebook} alt="facebook" />
                </div>
              </div>
              <div className="flex  justify-end pt-7 pr-6 pl-1">
                <div className="pt-2">
                  <img className="h-1 " src={up} alt="up" />
                </div>
                <p className="text-emerald-500 pl-1 font-bold">3%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 lg:basis-1/4">
          <div className="flex flex-row bg-gray-100 w-10/12 h-32 m-auto rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="basis-1/2">
              <div className="flex justify-start pl-6 pt-6">
                <div>
                  <p className="font-bold text-gray-500 dark:text-slate-400">
                    Likes
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-4xl pt-5 pl-6 dark:text-white">
                    52
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex justify-end pr-6 pt-6 ">
                <div>
                  <img className="w-7 h-7 " src={facebook} alt="facebook" />
                </div>
              </div>
              <div className="flex  justify-end pt-7 pr-6 pl-1">
                <div className="pt-2">
                  <img className="h-1 " src={down} alt="down" />
                </div>
                <p className="text-red-500 pl-1 font-bold">2%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 lg:basis-1/4">
          <div className="flex flex-row bg-gray-100 w-10/12 h-32 m-auto rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="basis-1/2">
              <div className="flex justify-start pl-6 pt-6">
                <div>
                  <p className="font-bold text-gray-500 dark:text-slate-400">
                    Profile Views
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-4xl pt-5 pl-6 dark:text-white">
                    52K
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex justify-end pr-6 pt-6 ">
                <div>
                  <img className="w-7 h-7 " src={instagram} alt="instagram" />
                </div>
              </div>
              <div className="flex  justify-end pt-7 pr-6 pl-1">
                <div className="pt-2">
                  <img className="h-1 " src={up} alt="up" />
                </div>
                <p className="text-emerald-500 pl-1 font-bold ">1375%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 lg:basis-1/4">
          <div className="flex flex-row bg-gray-100 w-10/12 h-32 m-auto rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="basis-1/2">
              <div className="flex justify-start pl-6 pt-6">
                <div>
                  <p className="font-bold text-gray-500 dark:text-slate-400">
                    Likes
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-4xl pt-5 pl-6 dark:text-white">
                    5462
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex justify-end pr-6 pt-6 ">
                <div>
                  <img className="w-7 h-7 " src={instagram} alt="instagram" />
                </div>
              </div>
              <div className="flex  justify-end pt-7 pr-6 pl-1">
                <div className="pt-2">
                  <img className="h-1 " src={up} alt="up" />
                </div>
                <p className="text-emerald-500 pl-1 font-bold">2257%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex">
        <div className="pt-5 lg:basis-1/4">
          <div className="flex flex-row bg-gray-100 w-10/12 h-32 m-auto rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="basis-1/2">
              <div className="flex justify-start pl-6 pt-6">
                <div>
                  <p className="font-bold text-gray-500 dark:text-slate-400">
                    Retweets
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-4xl pt-5 pl-6 dark:text-white">
                    117
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex justify-end pr-6 pt-6 ">
                <div>
                  <img className="w-7 h-7 " src={twitter} alt="twitter" />
                </div>
              </div>
              <div className="flex  justify-end pt-7 pr-6 pl-1">
                <div className="pt-2">
                  <img className="h-1 " src={up} alt="up" />
                </div>
                <p className="text-emerald-500 pl-1 font-bold">303%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 lg:basis-1/4">
          <div className="flex flex-row bg-gray-100 w-10/12 h-32 m-auto rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="basis-1/2">
              <div className="flex justify-start pl-6 pt-6">
                <div>
                  <p className="font-bold text-gray-500 dark:text-slate-400">
                    Likes
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-4xl pt-5 pl-6 dark:text-white">
                    507
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex justify-end pr-6 pt-6 ">
                <div>
                  <img className="w-7 h-7 " src={twitter} alt="twitter" />
                </div>
              </div>
              <div className="flex  justify-end pt-7 pr-6 pl-1">
                <div className="pt-2">
                  <img className="h-1 " src={up} alt="up" />
                </div>
                <p className="text-emerald-500 pl-1 font-bold">553%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 lg:basis-1/4">
          <div className="flex flex-row bg-gray-100 w-10/12 h-32 m-auto rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="basis-1/2">
              <div className="flex justify-start pl-6 pt-6">
                <div>
                  <p className="font-bold text-gray-500 dark:text-slate-400">
                    Likes
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-4xl pt-5 pl-6 dark:text-white">
                    107
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex justify-end pr-6 pt-6 ">
                <div>
                  <img className="w-7 h-7 " src={youtube} alt="youtube" />
                </div>
              </div>
              <div className="flex  justify-end pt-7 pr-6 pl-1">
                <div className="pt-2">
                  <img className="h-1 " src={down} alt="down" />
                </div>
                <p className="text-red-500 pl-1 font-bold">19%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 pb-5 lg:basis-1/4">
          <div className="flex flex-row bg-gray-100 w-10/12 h-32 m-auto rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700">
            <div className="basis-1/2">
              <div className="flex justify-start pl-6 pt-6">
                <div>
                  <p className="font-bold text-gray-500 dark:text-slate-400">
                    Total Views
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="font-bold text-4xl pt-5 pl-6 dark:text-white">
                    1407
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex justify-end pr-6 pt-6 ">
                <div>
                  <img className="w-7 h-7 " src={youtube} alt="youtube" />
                </div>
              </div>
              <div className="flex  justify-end pt-7 pr-6 pl-1">
                <div className="pt-2">
                  <img className="h-1 " src={down} alt="down" />
                </div>
                <p className="text-red-500 pl-1 font-bold">12%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
