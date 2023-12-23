import { Routes, Route, NavLink } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <section
        className="container-fluid relative  h-screen p-0  bg-cover "
        style={{
          backgroundImage: 'url("/img.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-fluid flex justify-center p-2  border-gray-200 border-dashed rounded-lg dark:border-gray-700  ">
          <div className="max-w-7xl w-full items-center mx-auto my-32 p-6 bg-gradient-to-b from-teal-900  rounded shadow-2xl">
            <h2 className="text-2xl font-semibold flex justify-center text-white mb-4">
              Welcome to URL Shortner WebApp
            </h2>
            <div className="flex justify-center space-x-20 mt-12">
              <NavLink
                to="/register"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Sign In
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
