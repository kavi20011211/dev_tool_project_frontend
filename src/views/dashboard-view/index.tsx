import Dashboard from "./panels/Dashboard";
import ProjectCreateDashboardPanel from "./panels/ProjectCreateDashboardPanel";

const GITHUB_PROJECTS_COUNT = 0; // REPLACE THIS WITH ACTUAL VALUES
const DashboardPanelShifter = () => {
  return (
    <>
      {GITHUB_PROJECTS_COUNT > 0 ? (
        <Dashboard />
      ) : (
        <ProjectCreateDashboardPanel />
      )}
    </>
  );
};

export default DashboardPanelShifter;
