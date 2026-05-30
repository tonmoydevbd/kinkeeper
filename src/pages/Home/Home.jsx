import Footer from "../../components/shared/Footer"
import Header from "../../components/shared/Header"
import Statistics from "../../components/shared/Statistics"
import TitleWithBtn from "./TitleWithBtn"


const Home = () => {
  return (
    <>
      <Header />
      <div className="py-20">
        <TitleWithBtn />
        <Statistics />
      </div>
      <Footer />
    </>
  )
}

export default Home