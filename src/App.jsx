import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home'

function App() {

  const routes = createBrowserRouter([
    {
      index: true, element: <Layout />, children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },

        // Add experience routing here
        // { path: '/experience', element: ----},
        
        // Add services routing here
        // { path: '/service', element: ----},
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
