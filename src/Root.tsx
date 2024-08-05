import { Outlet } from "react-router-dom";
import MainNavigation from "./components/home/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
