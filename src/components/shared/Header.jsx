import { ImStatsDots } from "react-icons/im";
import { LuClock3 } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";

const Header = () => {

  const navLink = [
    { icon: <RiHome2Line />, title: 'home', linkTo: '/' },
    { icon: <LuClock3 />, title: 'timeline', linkTo: '/timeline' },
    { icon: <ImStatsDots />, title: 'stats', linkTo: '/stats' }
  ]
  const navLinkEl = navLink.map(item => <li key={item.title}><NavLink to={item.linkTo} className={({ isActive }) =>
    `btn btn-ghost capitalize ${isActive ? "bg-[#244D3F] text-white" : ""}`
  }>{item.icon} {item.title}</NavLink></li>)

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-360 mx-auto">
        <div className="navbar-start">
          <a href="/" className="text-xl font-bold ">Keen<span className="text-[#244D3F]">Keeper</span></a>
        </div>
        <div className="navbar-end">
          <div className=" hidden sm:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinkEl}
            </ul>
          </div>
          <div className=" dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navLinkEl}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;