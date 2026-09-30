import {
  createBrowserRouter,
  createMemoryRouter,
  Navigate,
} from "react-router-dom";
import SiteLayout from "./components/site/PosterLayout";
import { AboutPage, CampLifePage, ColoradoPage, ContactPage, DonatePage, FamiliesPage, FaqPage, HomePage, NotFoundPage, RegistrationPage, StaffPage } from "./routes/CampPages";

const primaryRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/camp-life", element: <CampLifePage /> },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/colorado", element: <ColoradoPage /> },
  { path: "/families", element: <FamiliesPage /> },
  { path: "/donate", element: <DonatePage /> },
  { path: "/staff", element: <StaffPage /> },
  { path: "/faq", element: <FaqPage /> },
  { path: "/contact", element: <ContactPage /> },
];

export const siteRouteChildren = [
  ...primaryRoutes.map((route) => ({
    index: route.path === "/",
    path: route.path === "/" ? undefined : route.path.slice(1),
    element: route.element,
  })),
  {
    path: "history",
    element: <Navigate to="/about" replace />,
  },
  {
    path: "counselors",
    element: <Navigate to="/staff" replace />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
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
