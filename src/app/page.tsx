import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Button label="Button" />
      <Button variant="outline" label="Button" />
      <Button variant="outline" label="Button" isRounded />
    </div>
  );
}
