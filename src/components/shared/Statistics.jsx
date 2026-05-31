import { useContext } from "react"
import { FriendsContext } from "../../../FriendsContext"

const Statistics = () => {

  const friendsData = useContext(FriendsContext)
  const totalFriends = friendsData.length
  const onTrack = friendsData.filter(item => item.status === 'on-track').length
  const needAttention = totalFriends - onTrack
  // const interactionsThisMonth

  const data = [
    { id: 0, stats: totalFriends, title: 'total friends' },
    { id: 1, stats: onTrack, title: 'on track' },
    { id: 2, stats: needAttention, title: 'need attention' },
    { id: 3, stats: 12, title: 'interactions this month' },
  ]

  const element = data.map(item => <div key={item.id} className="p-8 flex flex-col justify-center items-center shadow-lg">
    <h3 className="text-3xl font-semibold text-[#244D3F]">{item.stats}</h3>
    <p className="text-lg capitalize">{item.title}</p>
  </div>)

  return (
    <div className="my-10 max-w-277.5 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 ">
      {element}
    </div>
  )
}

export default Statistics