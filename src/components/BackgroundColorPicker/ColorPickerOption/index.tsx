import { ColorOptionProps } from "./interfaces";
import { BasicColorOption } from "./styles";

export const ColorPickerOption: React.FC<ColorOptionProps> = ({
  colorHex,
  onClick,
}: ColorOptionProps) => {
  return (
    <BasicColorOption colorHex={colorHex} onClick={onClick}></BasicColorOption>
  );
};
