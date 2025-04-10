import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

import { XCircle, GitBranchIcon } from "lucide-react";
import { useState } from "react";

interface NewRepositoryInitializerProps {
  open: boolean;
  setOpen: () => void;
}

const NewRepositoryInitializer = (props: NewRepositoryInitializerProps) => {
  const [type, setType] = useState("public");
  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <h5>Initialize a github repository</h5>
          <Button variant="outline" size="sm" onClick={props.setOpen}>
            <XCircle />
          </Button>
        </CardTitle>
        <CardDescription>
          Initialize the git repository by adding the git repository URL
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="default" className="mb-3">
              <GitBranchIcon />
              {type === "public" ? "Public" : "Private"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="cursor-pointer bg-accent p-2 rounded-b-sm"
          >
            <DropdownMenuItem onClick={() => setType("public")}>
              Public
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setType("private")}>
              Private
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input type="text" placeholder="github URL" className="mb-3" />
        {type === "private" && (
          <Input type="text" placeholder="github API" className="mb-3" />
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default NewRepositoryInitializer;
