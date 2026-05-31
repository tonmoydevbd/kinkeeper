import { Link } from "react-router";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

const NotFound = () => {

  return (

    <div className="w-screen h-screen bg-[#244d3f] text-white flex flex-col items-center justify-center gap-4">
      <h2 className="text-5xl font-extrabold text-center">404 - Page Not Found</h2>
      <p className="text-center">Oops! The page you are looking for does not exist.</p>
      <Link className="btn font-bold text-xl" to="/">Go Back Home</Link>
    </div>

  );
}

export default NotFound