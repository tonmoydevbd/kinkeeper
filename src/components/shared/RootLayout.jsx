import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"
import { TimelineContext } from "../../../TimelineContext"
import { useState } from "react"
import { ToastContainer } from "react-toastify"

const RootLayout = () => {
  const [timelineData, setTimelineData] = useState([])
  const timelineContextValue = { timelineData, setTimelineData }
  return (
    <>
      <Header />
      <TimelineContext value={timelineContextValue}>
        <div className="bg-[#F8FAFC] px-4">
          <Outlet />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </TimelineContext>
      <Footer />
    </>
  )
}

export default RootLayout