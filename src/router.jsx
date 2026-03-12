import {
  createBrowserRouter,
  createMemoryRouter,
  Navigate,
} from "react-router-dom";
import SiteLayout from "./components/site/SiteLayout";
import AboutRoute from "./routes/AboutRoute";
import ContactRoute from "./routes/ContactRoute";
import DonateRoute from "./routes/DonateRoute";
import FaqRoute from "./routes/FaqRoute";
import HomeRoute from "./routes/HomeRoute";
import RegistrationRoute from "./routes/RegistrationRoute";
import StaffRoute from "./routes/StaffRoute";

const primaryRoutes = [
  { path: "/", element: <HomeRoute /> },
  { path: "/about", element: <AboutRoute /> },
  { path: "/registration", element: <RegistrationRoute /> },
  { path: "/donate", element: <DonateRoute /> },
  { path: "/staff", element: <StaffRoute /> },
  { path: "/faq", element: <FaqRoute /> },
  { path: "/contact", element: <ContactRoute /> },
];

export const siteRouteChildren = [
  ...primaryRoutes.map((route) => ({
    index: route.path === "/",
    path: route.path === "/" ? undefined : route.path.slice(1),
    element: route.element,
  })),
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export const createSiteRouter = (initialEntries) =>
  initialEntries
    ? createMemoryRouter(
        [
          {
            path: "/",
            element: <SiteLayout />,
            children: siteRouteChildren,
          },
        ],
        { initialEntries },
      )
    : createBrowserRouter([
        {
          path: "/",
          element: <SiteLayout />,
          children: siteRouteChildren,
        },
      ]);
