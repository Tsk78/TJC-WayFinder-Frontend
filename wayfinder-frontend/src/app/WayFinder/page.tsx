import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import Images from "./components/images";
export const metadata: Metadata = {
  title: "WayFinder",
  description: "WayFinder is a webapp that helps you find your way around TJC!",
};
export default function WayFinder() {
  return (
    <div className="bg-[#328C2A] flex flex-col h-screen justify-center items-center ">
      <Card className="w-auto">
        <CardHeader>
          <CardTitle>Finding your way...</CardTitle>
        </CardHeader>
        <CardContent>
        <Images /> 
        </CardContent>
        <CardFooter className="flex justify-center">
          <h4>Follow red line to destiation</h4>
          <Button className="px-8 py-4 text-lg">
            <Link href="/MapInput">Back</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
