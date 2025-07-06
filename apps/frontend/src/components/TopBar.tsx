"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function TopBar() {
  return (
    <div className="border-b">
      <header className="flex items-center justify-between px-4 py-2">
        <div className="text-lg font-semibold">3D Puzzle Studio</div>
        <div className="flex gap-2">
          <Button variant="default">Start</Button>
          <Button variant="secondary">Restart</Button>
        </div>
      </header>
      <Separator />
    </div>
  );
}
