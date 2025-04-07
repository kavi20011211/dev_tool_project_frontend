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
import { XCircle } from "lucide-react";

interface NewRepositoryInitializerProps {
  open: boolean;
  setOpen: () => void;
}

const NewRepositoryInitializer = (props: NewRepositoryInitializerProps) => {
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
        <Input type="text" placeholder="github URL" />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default NewRepositoryInitializer;
