import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import ServiceDetails from "../components/Services/ServiceDetails";
import Checkout from "../components/Checkout/Checkout";
import BookingService from "../components/Services/BookingService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services/"),
      },
      {
        path: "/services/service-detail/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/service-detail/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/check-out/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/service-detail/${params.id}`),
      },
      {
        path: "/booking/:id",
        element: <BookingService></BookingService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/service-detail/${params.id}`),
      },
    ],
  },
]);

export default router;
