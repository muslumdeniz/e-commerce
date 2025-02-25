const fs = require("fs");
const path = require("path");

const iconsDir = path.resolve(__dirname, "../src/components/ui/icons/all");
const outputFilePath = path.resolve(
  __dirname,
  "../src/components/ui/icons/index.tsx"
);
const outputTypesFilePath = path.resolve(
  __dirname,
  "../src/components/ui/icons/_model.ts"
);

const icons = fs
  .readdirSync(iconsDir)
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => path.basename(file, ".tsx"));

const iconTypes = icons.map((icon) => `'${icon}'`).join(" | ");
const imports = `
import * as AllIcons from './all';
import {IconProps} from './_model';`;
const cases = icons
  .map(
    (icon) => `
    case '${icon}':
      return <AllIcons.${icon} width={size} height={size} color={color} {...props} />;`
  )
  .join("");

const types = `
export type IconTypes = ${iconTypes};
export type IconProps = React.SVGProps<SVGSVGElement> & {
  name: IconTypes;
  size?: number;
  color?: string;
  className?: string;
};
`;
const content = `
${imports}
const Icons: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  ...props
}) => {
  switch (name) {${cases}
    default:
      return null;
  }
};

export default Icons;
`;

fs.writeFileSync(outputTypesFilePath, types, "utf8");
fs.writeFileSync(outputFilePath, content, "utf8");
console.log(`Generated ${outputFilePath}`);
