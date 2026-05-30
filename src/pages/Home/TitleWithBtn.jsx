import { FaPlus } from "react-icons/fa"
import { Link } from "react-router"

const TitleWithBtn = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-5xl font-bold">Friends to keep close in your life</h2>
      <p className="text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the
        <br />relationships that matter most.</p>
      <Link to={'/'} className="btn mt-4 bg-[#244D3F] text-white font-semibold"><FaPlus />Add a Friend</Link>
    </div>
  )
}

export default TitleWithBtn