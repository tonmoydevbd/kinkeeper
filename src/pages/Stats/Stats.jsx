import InteractionChart from "./InteractionChart"
import { FaSquare } from "react-icons/fa"

const Stats = () => {
  return (
    <div className="max-w-277.5 mx-auto py-20">
      <h2 className="text-5xl font-bold mb-6">Friendship Analytics</h2>
      <div className="p-8 bg-white">
        <h3 className="text-xl font-medium text-[#244d3f]">By Interaction Type</h3>
        <div className="flex flex-col justify-center items-center">
          <InteractionChart />
          <div className="flex gap-4 mt-5">
            <div className="flex items-center"><span className="text-[#7f37f5]"><FaSquare /></span>Text</div>
            <div className="flex items-center"><span className="text-[#37a163]"><FaSquare /></span>Video</div>
            <div className="flex items-center"><span className="text-[#244d3f]"><FaSquare /></span>Call</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats