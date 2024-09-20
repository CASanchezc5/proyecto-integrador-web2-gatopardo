import Contact from "../pages/Contact";
import ErrorNotFound from "../pages/ErrorNotFound";
import Home from "../pages/Home";
import Workshops from "../pages/Workshops";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Gallery from "../pages/Gallery";

export let routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorNotFound />
  },
  {
    path: '/workshops', /*talleres*/ 
    element: <Workshops />,
    
  },
  {
    path: '/gallery',  
    element: <Gallery />,
    
  },
  {
    path: '/contact',
    element: <Contact />,
    
  },
  {
    path: '/login',
    element: <Login />,
    
  },
  {
    path: '/register',
    element: <Register />,
    
  },
]