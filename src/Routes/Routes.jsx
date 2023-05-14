import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../Layouts/LayoutMain";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain></LayoutMain>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path:'checkout/:id',
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:4000/services/${params.id}`)
        },
        {
          path:'bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;