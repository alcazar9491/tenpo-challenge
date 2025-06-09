import { ThemeSwitch } from "components/themeSwitch/ThemeSwitch";
import { useDispatch } from "react-redux";
import { signout } from "services/auth.servise";
import { logOut } from 'store/slices/authentication/authSlice'


export const Header = () => {

  const dispatch = useDispatch();


 const handlerSignOut = () => {
      signout()
      dispatch(logOut())
 };

  return (
    <div className="w-full">
      <nav className="bg-white dark:bg-[#030712] shadow-sm ">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 px-[12%] md:px-[10%]">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold dark:text-[#c1c6cc]">Tenpo</h1>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlerSignOut}

                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
              Sign out
              </button>
              <ThemeSwitch />

            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};
