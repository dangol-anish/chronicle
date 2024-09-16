import { ModeToggle } from "@/components/ModeToggle";
import AccountSettings from "@/components/Settings/AccountSettings";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings2, UserRoundCog } from "lucide-react";

export default function SettingsPage() {
  return (
    <>
      <Tabs
        defaultValue="Account"
        className="w-full h-screen overflow-y-auto scrollbar-hide"
      >
        <TabsList className="mb-5 w-full">
          <TabsTrigger className="flex gap-2 w-[50%]" value="Account">
            <UserRoundCog />
            <p>Account </p>
          </TabsTrigger>
          <TabsTrigger className="flex gap-2 w-[50%]" value="General">
            <Settings2 />
            <p>General </p>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="General">
          <div className="flex justify-between items-center">
            <Label className="text-[16px]">Appearance</Label>
            <ModeToggle />
          </div>
          <Separator className="my-4" />
        </TabsContent>
        <TabsContent value="Account">
          <AccountSettings />
        </TabsContent>
      </Tabs>
    </>
  );
}
