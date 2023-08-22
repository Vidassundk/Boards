import { buttonVariants } from "@/components/ui/Button";
import SignUp from "@/components/SignUp";
import { cn } from "@/lib/utils";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";

const page = ({}) => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex-col flex items-center justify-center gap-20">
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -mt-20"
          )}
        >
          <ChevronsLeft className="mr-2 h-4 w-4" />
          Home
        </Link>
        <SignUp />
      </div>
    </div>
  );
};

export default page;
