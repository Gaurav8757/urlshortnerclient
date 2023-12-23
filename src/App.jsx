
import { Outlet } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
function App() {

  return (
    <>
    <RegisterForm/>
    <LoginForm/>
    <Outlet/>
    </>
  )
}

export default App;
