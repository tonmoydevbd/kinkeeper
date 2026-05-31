import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"
import { TimelineContext } from "../../../TimelineContext"
import { useState } from "react"

const RootLayout = () => {
  const [timelineData, setTimelineData] = useState([])
  const timelineContextValue = { timelineData, setTimelineData }
  return (
    <>
      <Header />
      <TimelineContext value={timelineContextValue}>
        <Outlet />
      </TimelineContext>
      <Footer />
    </>
  )
}

export default RootLayout