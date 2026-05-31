import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white px-4 md:px-0 py-8">
      <div className="text-center ">
        <h2 className="text-6xl font-extrabold md:mt-12">KeenKeeper</h2>
        <p className="my-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <h3 className="text-xl font-medium mb-4">Social Links</h3>
        <div className="flex justify-center gap-2 text-black">
          <Link className="p-3 bg-white rounded-full" to={'www.facebook.com'}><FaFacebookSquare /></Link>
          <Link className="p-3 bg-white rounded-full" to={'www.instagram.com'}><TbBrandInstagramFilled /></Link>
          <Link className="p-3 bg-white rounded-full" to={'www.x.com'}><FaXTwitter /></Link>
        </div>
      </div>
      <div className="max-w-277.5 mx-auto sm:flex justify-between items-center py-6">
        <p className="text-center md:text-left">© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex flex-col md:flex-row text-center md:gap-8">
          <Link to={'/'}>Privacy Policy</Link>
          <Link to={'/'}>Terms of Service</Link>
          <Link to={'/'}>Cookies</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;