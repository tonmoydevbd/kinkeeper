import { use } from "react"
import { FriendsContext } from "../../../FriendsContext"
import Footer from "../../components/shared/Footer"
import Header from "../../components/shared/Header"
import Statistics from "../../components/shared/Statistics"
import FriendsList from "./FriendsList"
import TitleWithBtn from "./TitleWithBtn"

const friendsDataPromise = fetch('./friends.json').then(res => res.json())


const Home = () => {

  const friendsData = use(friendsDataPromise)

  return (
    <>
      <Header />
      <FriendsContext value={friendsData}>
        <div className="py-20">
          <TitleWithBtn />
          <Statistics />
          <FriendsList />
        </div>
      </FriendsContext>
      <Footer />
    </>
  )
}

export default Home