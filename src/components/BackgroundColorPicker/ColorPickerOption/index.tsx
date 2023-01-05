import { ColorOptionProps } from "./interfaces";
import { BasicColorOption } from "./styles";

const ColorPickerOption: React.FC<ColorOptionProps> = ({
  colorHex,
  onClick,
}: ColorOptionProps) => {
  return (
    <BasicColorOption colorHex={colorHex} onClick={onClick}></BasicColorOption>
  );
};

export default ColorPickerOption;
