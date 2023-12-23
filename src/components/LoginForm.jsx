import { useState } from "react";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const salt = bcrypt.genSaltSync(10);

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post("https://urlbackend-v8sp.onrender.com/login", formData);

      const token = response.data.token;
      sessionStorage.setItem("token", token);

      // Use email to conditionally redirect
      sessionStorage.setItem("user", bcrypt.hashSync(formData.email, salt));

      // Redirect based on isAdmin
      if (response.data.token) {
        navigate("/homepage");
        toast.success("Logged In Successfully!");
      } else {
        navigate("/login");
        toast.error("Incorrect UserID/Password. Try again!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server Error. Try again!");
    }
  };

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
          <div className="max-w-2xl w-96 mx-auto my-32 p-6 bg-gradient-to-b from-teal-900  rounded shadow-2xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
