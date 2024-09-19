
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Sidebar from "./Components/Layout/SideBar";
import InventoryPage from "./Pages /inventory";
import HomePage from "./Pages /Home";
import InventoryPlantWisePage from "./Pages /inventory/InventoryPlantWisePage";
import PlantsPage from "./Pages /plantPage";
import ChartViewChartPage from "./Pages /chartViewChartPage";
import SalesChartViewPage from "./Pages /SalesPage/SalesChartViewPage";
import ReportPage from "./Pages /reportPage";
import SalesPage from "./Pages /SalesPage/SalesPage";
import PlantWisePage from "./Pages /plantWise";
import PlantWiseSummary from "./Pages /plantWise/PlantWiseSummary";
import InwardOutWardChartPage from "./Pages /inward-outward/InwardOutWardChartPage";
import InwardOutWardPage from "./Pages /inward-outward/InwardOutWardChartPage";
import Header from "./Components/Layout/Header"; 
import SalesPlantWisePage from "./Pages /SalesPage/SalesPlantWisePage";
import ManPowerChartPage from "./Pages /SalesPage/SalesChartViewPage";
import ManPowerPage from "./Pages /ManPowerPage"; 
import ManPowerWisePlant from "./Pages /ManPowerWisePlant/ManPowerWisePlant";
import Profile from "./Pages /Profile"
import ProductionPage from "./Pages /ProductionPage";
import ProductionChartViewPage from "./Pages /ProductionPage/ProductionChartViewPage";
import PlantWiseChartPage from "./Pages /plantWise/PlantWiseChartPage";
import LoginPage from "./Pages /Login/LoginPage";


const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar className="hidden sm:flex h-full" />
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col ml-2 sm:ml-16 md:ml-16 lg:ml-[5.8rem] overflow-x-hidden">
          <Header label="inventory" />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-xs px-8 pt-6 pb-8 m-auto mb-4 sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/home", element: <HomePage /> },
        { path: "/inventory", element: <InventoryPage /> },
        { path: "/inventory/:plantName", element: <InventoryPlantWisePage /> },
        { path: "/chart-view", element: <ChartViewChartPage /> },
        { path: "/inventory/plant/:plantName", element: <PlantsPage /> },
        { path: "/MIS", element: <ReportPage /> },
        { path: "/sales", element: <SalesPage /> },
        { path: "/sales-chart-view", element: <SalesChartViewPage /> },
        { path: "/sales-plant-wise", element: <SalesPlantWisePage /> },
        { path: "/production", element: <ProductionPage /> },
        { path: "/production-chart-view", element: <ProductionChartViewPage /> },
        { path: "/man-power", element: <ManPowerPage /> },
        { path: "/man-power-chart", element: <ManPowerChartPage /> },
        { path: "/man-power-plant-wise", element: <ManPowerWisePlant /> },
        { path: "/profile", element: <Profile /> },
        { path: "/inward-outward-page", element: <InwardOutWardPage /> },
        { path: "/inward-outward-chart", element: <InwardOutWardChartPage /> },
        { path: "/plant-wise", element: <PlantWisePage /> },
        { path: "/plant-wise-chart", element: <PlantWiseChartPage /> },
        { path: "/plant-wise-summary", element: <PlantWiseSummary /> },
      ],
    },
    {
      path: "/login",
      element: <AuthLayout />,
      children: [{ path: "", element: <LoginPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
