import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <>
      <div className="p-5">
        <Button label="Button" size="lg" />
        <Button variant="outline" label="Button" size="sm" />
        <Button variant="outline" label="Button" isRounded />
      </div>
      <div className="p-5">
        <Input label="input" inputSize="base" placeholder="Email" />
      </div>
    </>
  );
}
