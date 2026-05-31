import { Suspense, use } from "react"
import { Link, useParams } from "react-router"
import Header from "../../components/shared/Header"
import Footer from "../../components/shared/Footer"
import { HiOutlineBellSnooze } from "react-icons/hi2"
import { LuArchive, LuPhoneCall } from "react-icons/lu"
import { RiDeleteBinLine } from "react-icons/ri"
import { MdOutlineTextsms } from "react-icons/md"
import { IoVideocamOutline } from "react-icons/io5"

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

  const friendsData = use(friendsDataPromise)
  const { friendId } = useParams()
  const friend = friendsData.find(item => item.id === parseInt(friendId))


  return (
    <>
      <Header />
      <Suspense fallback={<span>loading...</span>}>
        <div className="max-w-277.5 mx-auto grid grid-cols-3 py-20 gap-6">
          <div className="col-span-1">
            <div className="flex flex-col items-center gap-4 my-4 p-4 shadow-md border border-gray-100">
              <img src={friend.picture} width={100} />
              <h3 className="text-xl font-semibold">{friend.name}</h3>
              <p className={`px-2 py-1 rounded-full capitalize text-white ${friend.status === 'overdue' ? 'bg-red-600' : friend.status === 'on-track' ? 'bg-green-600' : 'bg-amber-500'}`}>{friend.status}</p>
              <div className="flex gap-1">
                {friend.tags.map(tag => <small key={tag} className="uppercase bg-green-200 text-green-950 px-2 py-1 rounded-full">{tag}</small>)}
              </div>
              <p className="text-center">{friend.bio}</p>
              <p>{friend.email}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <button className="flex justify-center items-center py-4 w-full gap-2 text-xl shadow-md border border-gray-100"><HiOutlineBellSnooze />Snooze 2 weeks</button>
              <button className="flex justify-center items-center py-4 w-full gap-2 text-xl shadow-md border border-gray-100"><LuArchive />Archive</button>
              <button className="flex justify-center items-center py-4 w-full gap-2 text-xl text-red-600 shadow-md border border-gray-100"><RiDeleteBinLine />Delete</button>
            </div>
          </div>
          <div className="col-span-2 flex flex-col py-4 gap-6">
            <div className="grid grid-cols-3  gap-6">
              <div className="text-center shadow-md border border-gray-100 py-8">
                <h3 className="text-3xl font-semibold text-[#244d3f]">{friend.days_since_contact}</h3>
                <p className="text-lg capitalize">Days Since Contact</p>
              </div>
              <div className="text-center shadow-md border border-gray-100 py-8">
                <h3 className="text-3xl font-semibold text-[#244d3f]">{friend.goal}</h3>
                <p className="text-lg capitalize">Goal (Days)</p>
              </div>
              <div className="text-center shadow-md border border-gray-100 py-8">
                <h3 className="text-3xl font-semibold text-[#244d3f]">{formatDate(friend.next_due_date)}</h3>
                <p className="text-lg capitalize">Next Due</p>
              </div>
            </div>
            <div className="flex justify-between shadow-md border border-gray-100 py-8 gap-4 p-8">
              <div>
                <h3 className="text-xl font-medium text-[#244d3f]">Relationship Goal</h3>
                <p>Connect every <span className="font-bold text-lg">30 days</span></p>
              </div>
              <div><button className="text-[#244d3f] btn btn-outline rounded-md">Edit</button></div>
            </div>
            <div className=" shadow-md border border-gray-100 py-8 gap-4 p-8">
              <h3 className="text-xl font-medium text-[#244d3f]">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <Link className="flex flex-col justify-center items-center bg-gray-100 py-4 border border-gray-100 rounded-md"><h3 className="text-4xl"><LuPhoneCall /></h3>Call</Link>
                <Link className="flex flex-col justify-center items-center py-4 bg-gray-100 border border-gray-100 rounded-md"><h3 className="text-4xl"><MdOutlineTextsms /></h3>Text</Link>
                <Link className="flex flex-col justify-center items-center py-4 bg-gray-100 border border-gray-100 rounded-md"><h3 className="text-4xl"><IoVideocamOutline /></h3>Video</Link>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
      <Footer />
    </>
  )
}

export default FriendDetails