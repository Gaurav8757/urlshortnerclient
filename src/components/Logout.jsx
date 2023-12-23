import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// Logout button after login exports this to header
export default function Logout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = sessionStorage.getItem("token");
  // admin user store
  const isUser = sessionStorage.getItem('user');
  const handleLogout = () => {
    // sessionStorage.removeItem("token");
    // sessionStorage.removeItem("user");
    sessionStorage.clear();
    if(isUser && isLoggedIn){
      navigate("/login");
      toast.success("Logout Successfully !");
    } else{
      navigate("/register");
      toast.success("Logout Successfully !");
    }
   
  };
  if (isLoggedIn  && location.pathname !== "") {
    return (
      <button type="button" onClick={handleLogout} className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Logout</button>
    
    );
  }
  return null;
}