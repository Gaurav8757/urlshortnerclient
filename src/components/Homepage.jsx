import Logout from "./Logout";
import UrlShort from "./UrlShort";

const Navbar = () => {
    return (
        <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">URL Shortener</h1>
          <Logout/>
        </div>
      </nav>
      <section
        className="container-fluid relative   h-screen p-0  bg-cover pt-32"
        style={{
          backgroundImage: 'url("/img.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >




<UrlShort/>


        </section>
      </>
    );
  };
  export default Navbar;
  

  