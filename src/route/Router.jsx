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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: '/',
            Component: Home,
        },
        {
          path: '/gardeners',
          loader: () => fetch('http://localhost:3000/user'),
          Component: Gardeners,
        },
        {
          path: '/tipsubmit',
          Component: Form,
        },
        {
          path: '/browse',
          loader: () => fetch('http://localhost:3000/tips'),
          Component: Gardentips,
        },{
          path: '/tips/:id',
          loader: ({params}) => fetch(`http://localhost:3000/tips/${params.id}`),
          Component: Tipsdetails,
        },
         {
          path: '/my-tips',
          loader: () => fetch('http://localhost:3000/tips'),
          Component: Mytips,
        },
        {
          path: '/signup',
          Component: Reg,
        }
    ]
  },
]);