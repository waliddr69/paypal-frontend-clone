import { useMediaQuery } from "react-responsive";
import logo from "../../public/PayPal_Symbol_0.svg";
import { useEffect, useState } from "react";

const NavBar = () => {
  const lg = useMediaQuery({
    query: "(max-width:1080px) and (min-width:1020px)",
  });
  const [classname, setClassname] = useState(
    "NavBar h-[12vh]  p-10.5 flex-center"
  );
  useEffect(() => {
    if (lg) {
      setClassname("NavBar h-[12vh]  p-0 flex-center");
    }
  });
  return (
    <header className={`${classname}`}>
      <nav className="container flex justify-between">
        <div className="flex gap-5">
          <img src={logo} alt="logo" className="w-9 h-9" />
          <ul className="hidden lg:flex-center lg:gap-5 font-semibold">
            <li className="flex ">
              Particuliers{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </li>
            <li className="flex">
              Professionnels
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </li>
            <li className="flex">
              Entreprises
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </li>
            <li className="font-semibold  hover:sm:outline-gray-500 hidden hover:sm:rounded-full transition-transform duration-300 lg:block hover:text-blue-700 sm:px-2 sm:text-base">
              Developpeurs
            </li>
          </ul>
        </div>

        <div className="cta flex-center gap-2">
          <div className=" flex gap-3">
            <button className="font-semibold  hover:sm:outline-gray-500 hidden hover:sm:rounded-full transition-transform duration-300 lg:block hover:text-blue-700 sm:px-2 sm:text-base">
              Aide
            </button>
            <button className="font-semibold border-3 border-black text-xs rounded-full px-0.5 sm:px-2 sm:text-base hover:px-1 hover:sm:px-3 transition-all ">
              <p className="font-bold ">Connexion</p>
            </button>
            <button className="font-semibold border-3 rounded-full border-black px-0.5 text-xs sm:px-2 sm:text-base text-white bg-black py-2 hover:bg-blue transition-all cursor-pointer hover:px-1 hover:sm:px-3 hover:text-black">
              <p className="font-bold ">Ouvrir un compte</p>
            </button>
          </div>

          <div className="menu cursor-pointer  lg:hidden flex-center ">
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
