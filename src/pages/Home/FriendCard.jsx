import { use, useContext } from "react"
import { FriendsContext } from "../../../FriendsContext"
import { Link } from "react-router"



const FriendCard = () => {
  const friendsData = useContext(FriendsContext)

  const friendsDataEl = friendsData.map(friend => <Link key={friend.id} to={`/friend-details/${friend.id}`} > <div className="flex flex-col gap-4 justify-center items-center shadow-md p-4">
    <img src={friend.picture} width={100} />
    <h3 className="text-xl font-semibold">{friend.name}</h3>
    <p>{friend.days_since_contact}d ago</p>
    <div className="flex gap-1">
      {friend.tags.map(tag => <small key={tag} className="uppercase bg-green-200 text-green-950 px-2 py-1 rounded-full">{tag}</small>)}
    </div>

    <p className={`px-2 py-1 rounded-full capitalize text-white ${friend.status === 'overdue' ? 'bg-red-600' : friend.status === 'on-track' ? 'bg-green-600' : 'bg-amber-500'}`}>{friend.status}</p>
  </div>
  </Link>
  )

  return (
    <>
      {friendsDataEl}
    </>
  )
}

export default FriendCard