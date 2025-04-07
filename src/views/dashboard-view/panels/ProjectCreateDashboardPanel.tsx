import { Button } from "@/components/ui/button";
import NO_DATA_IMAGE from "../../../assets/NODATA.jpg";
import { useState } from "react";
import NewRepositoryInitializer from "../components/NewRepositoryInitializer";

const ProjectCreateDashboardPanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <img src={NO_DATA_IMAGE} alt="No data to show" height={300} width={300} />
      <h4 className="font-medium">You have not registered with a project</h4>
      <Button variant="default" size="sm" onClick={() => setOpen(true)}>
        Initialize a project
      </Button>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <NewRepositoryInitializer
            open={open}
            setOpen={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCreateDashboardPanel;
