import AppHeader from "@/components/header";
import { AppSidebar } from "@/components/sidebar/";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const GITHUB_PROJECTS_COUNT = 0; // REPLACE THIS WITH ACTUAL VALUES

const Layout = () => {
  return (
    <>
      <SidebarProvider>
        {GITHUB_PROJECTS_COUNT > 0 && <AppSidebar />}

        <main className="w-full h-screen overflow-y-hidden">
          <AppHeader />
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
};

export default Layout;
