import { use, useContext, useState } from "react"
import { Link, useParams } from "react-router"
import FriendDetailsBody from "./FriendDetailsBody"
import { TimelineContext } from "../../../TimelineContext";



const friendsDataPromise = fetch('/friends.json').then(res => res.json())

function formatDate(inputString) {
  // Replace dashes with slashes to safely parse as local time
  const date = new Date(inputString.replace(/-/g, '/'));

  // Configure configuration options for the shortened string style
  const options = {
    month: 'short', // "Feb"
    day: 'numeric', // "27"
    year: 'numeric' // "2026"
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}


const FriendDetails = () => {

  // const [timelineData, setTimelineData] = useState([])
  const { timelineData, setTimelineData } = useContext(TimelineContext)


  const friendsData = use(friendsDataPromise)
  const { friendId } = useParams()
  const friend = friendsData.find(item => item.id === parseInt(friendId))

  const handleCall = () => {
    setTimelineData(prev => [...prev, { id: crypto.randomUUID(), name: friend.name, type: 'call', date: new Date() }])
  }
  const handleText = () => {
    setTimelineData(prev => [...prev, { id: crypto.randomUUID(), name: friend.name, type: 'text', date: new Date() }])
  }
  const handleVideo = () => {
    setTimelineData(prev => [...prev, { id: crypto.randomUUID(), name: friend.name, type: 'video', date: new Date() }])
  }

  return (
    <>
      <FriendDetailsBody
        friend={friend}
        formatDate={formatDate}
        handleCall={handleCall}
        handleText={handleText}
        handleVideo={handleVideo}
      />
    </>
  )
}

export default FriendDetails