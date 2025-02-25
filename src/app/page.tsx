import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <>
      <div className="p-5 ">
        <Button label="Button" size="sm" />
        <Button label="Button" suffixIcon="Down" size="sm" />
        <Button label="Button" prefixIcon="BurgerMenu5" size="sm" />
        <Button suffixIcon="BurgerMenu5" size="sm" />

        <Button label="Button" size="sm" isRounded />

        <Button
          size="sm"
          variant="primary"
          label="Button"
          isRounded
          suffixIcon="Down"
          color="primary"
        />
        <Button
          size="sm"
          variant="primary"
          label="Button"
          isRounded
          prefixIcon="BurgerMenu5"
          color="primary"
        />
        <Button
          variant="primary"
          isRounded
          suffixIcon="BurgerMenu5"
          size="sm"
        />
        <div className="p-5">
          <h1>Outline</h1>
        </div>
        <Button variant="outline" label="Button" size="sm" />
        <Button variant="outline" label="Button" suffixIcon="Down" size="sm" />
        <Button
          variant="outline"
          label="Button"
          prefixIcon="BurgerMenu5"
          size="sm"
        />
        <Button variant="outline" suffixIcon="BurgerMenu5" size="sm" />

        <Button variant="outline" label="Button" size="sm" isRounded />

        <Button
          variant="outline"
          size="sm"
          label="Button"
          isRounded
          suffixIcon="Down"
          color="primary"
        />
        <Button
          variant="outline"
          size="sm"
          label="Button"
          isRounded
          prefixIcon="BurgerMenu5"
          color="primary"
        />
        <Button
          variant="outline"
          isRounded
          suffixIcon="BurgerMenu5"
          size="sm"
        />
      </div>
      <div className="p-5">
        <Input label="input" inputSize="base" placeholder="Email" />
        <Input
          label="input"
          inputSize="base"
          icon="Magnifier"
          placeholder="Search"
        />
      </div>
    </>
  );
}
