import FriendCard from "./FriendCard"

const FriendsList = () => {
  return (
    <div className="max-w-277.5 mx-auto my-4">
      <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <FriendCard />
      </div>
    </div>
  )
}

export default FriendsList