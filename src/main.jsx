import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home'
import Timeline from './pages/Timeline/Timeline'
import Stats from './pages/Stats/Stats'
import './index.css'
import FriendDetails from './pages/FriendDetails/FriendDetails'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'timeline',
    element: <Timeline />
  },
  {
    path: 'stats',
    element: <Stats />
  },
  {
    path: 'friend-details/:friendId',
    element: <FriendDetails />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
