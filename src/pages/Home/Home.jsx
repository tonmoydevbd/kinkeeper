import Footer from "../../components/shared/Footer"
import Header from "../../components/shared/Header"
import TitleWithBtn from "./TitleWithBtn"


const Home = () => {
  return (
    <>
      <Header />
      <div className="py-20">
        <TitleWithBtn />
      </div>
      <Footer />
    </>
  )
}

export default Home