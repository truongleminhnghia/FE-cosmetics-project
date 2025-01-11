import { createBrowserRouter } from "react-router-dom";
import Layout01 from "./src/components/layouts/Layout01";
import Home from "./src/pages/Home";
import Introduce from "./src/pages/introduce/Introduce";
import Product from "./src/pages/product/Product";
import Promotion from "./src/pages/promotions/Promotion";
import New from "./src/pages/news/New";
import HotLine from "./src/pages/hotlines/HotLine";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout01 />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/gioi-thieu",
                element: <Introduce />
            },
            {
                path: "/san-pham",
                element: <Product />
            },
            {
                path: "/khuyen-mai",
                element: <Promotion />
            },
            {
                path: "/tin-tuc",
                element: <New />
            },
            {
                path: "/lien-he",
                element: <HotLine />
            },
        ]
    },
    // {
    //     path: "/",
    //     element: <GuestLayout />,
    //     children: [
    //         {
    //             path: "/login",
    //             element: <LoginPage />
    //         },
    //     ]
    // },
    // {
    //     path: "/login",
    //     element: <LoginPage />
    // },
    // {
    //     path: "/register",
    //     element: <RegisterPage />
    // }

]);

export default router;