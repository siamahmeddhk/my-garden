import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Gardeners from "../pages/Gardeners";
import Form from "../pages/Form";
import Gardentips from "../pages/Gardentips";
import Singeltips from "../comp/Singeltips";
import Tipsdetails from "../pages/Tipsdetails";
import Mytips from "../pages/Mytips";
import Reg from "../pages/Reg";
import Login from "../pages/Login";
import Notfound from "../pages/Notfound";
import Update from "../pages/Update";
import Newsletter from "../pages/Newsletter";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Notfound></Notfound>,
    children: [
        {
            index: true,
            path: '/',
            Component: Home,
        },
        {
          path: '/gardeners',
          loader: () => fetch('https://y-gray-seven.vercel.app/user'),
          Component: Gardeners,
        },
        {
          path: '/tipsubmit',
          Component: Form,
        },
        {
          path: '/browse',
          loader: () => fetch('https://y-gray-seven.vercel.app/tips'),
          Component: Gardentips,
        },
        {
          path: '/tips/:id',
          loader: ({params}) => fetch(`https://y-gray-seven.vercel.app/tips/${params.id}`),
          Component: Tipsdetails,
        },
         {
          path: '/my-tips',
          loader: () => fetch('https://y-gray-seven.vercel.app/tips'),
          Component: Mytips,
        },
        {
          path: '/signup',
          Component: Reg,
        },
        {
          path: '/login',
          Component: Login,
        },
        {
         path: '/updatetips/:id',
         loader: ({params}) => fetch(`https://y-gray-seven.vercel.app/tips/${params.id}`),
         Component: Update,
        },
        {
          path: '/newsletter',
          Component: Newsletter,
        }
    ]
  },
]);