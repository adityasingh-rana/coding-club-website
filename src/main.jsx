import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Members from './pages/Members.jsx'
import Contact from './pages/Contact.jsx'
import EventDetails from "./pages/EventDetails";
import Resources from './pages/Resources.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/events",
        element: <Events />
      },
      {
        path: "/members",
        element: <Members />
      },
      {
        path: "/contact",
        element: <Contact />

      },
      {
        path: "/events/:id",
        element: <EventDetails />
      },
      {
        path: "/resources",
        element: <Resources/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
