import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Error from './pages/Error'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Header from './components/Header'
import Contact from './pages/Contact'
import Footer from './components/Footer'


export default function App() {
  function PageLayOut(){
    return<>
    <Header />
    <Outlet />
    <Footer />
    </>
  }
  const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <PageLayOut />,
    children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />,
      },
      {
          path: "/listing",
          element: <Listing />
      },
      {
          path: "/services",
          element: <Services />
      },
      {
          path: "/blog",
          element: <Blog />
      },
      {
          path: "/contact",
          element: <Contact />
      },
      
      {
          path: "/contacts",
          element: <Contact />
      },
      
    ]
  },
  
  {
    path: "*",
    element: <Error />
  }

  ])
  return (
   <div className="bg-yellow">
    <RouterProvider router={pageRoutes}></RouterProvider>
   </div>
  )
}
