import { useContext, useState } from "react"
import { LuMessageCircleMore } from "react-icons/lu"
import { TimelineContext } from "../../../TimelineContext"
import { FaVideo } from "react-icons/fa"
import { IoCallSharp } from "react-icons/io5"

const Timeline = () => {

  const { timelineData, setTimelineData } = useContext(TimelineContext)
  const [selectedValue, setSelectedValue] = useState('all')

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const filterTimelineData = timelineData.filter(data => {
    if (selectedValue === 'all') return true
    return data.type === selectedValue
  })


  const timelineDataEl = filterTimelineData.map(item => <div key={item.id} className="bg-white flex items-center my-6 p-4 border border-gray-100 shadow-md rounded-md">
    <div className="font-extrabold text-4xl mr-4">
      {item.type === 'text' ? <LuMessageCircleMore /> : item.type === 'video' ? <FaVideo /> : <IoCallSharp />}
    </div>
    <div>
      <p><span className="font-bold capitalize text-xl text-[#244d3f]">{item.type}</span> with <span className="capitalize">{item.name}</span></p>
      <p>{item.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
    </div>
  </div>)

  return (
    <div className="max-w-277.5 mx-auto py-20">
      <h2 className="text-5xl font-bold mb-6">Timeline</h2>
      <select onChange={handleChange} defaultValue={selectedValue} className="select">
        <option value='all'>All</option>
        <option value='text'>Text only</option>
        <option value='video'>Video only</option>
        <option value='call'>Call only</option>
      </select>
      <div>{timelineDataEl}</div>
    </div>
  )
}

export default Timeline