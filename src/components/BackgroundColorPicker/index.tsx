import { useState } from "react";
import { ColorPickerButton } from "./styles";
import ColorPickerDialog from "./ColorPickerDialog";
import { DefaultBackgroundColor } from "../../utils/colors";
import { Color } from "../../models/color";
import { BackgroundContainer } from "./BackgroundContainer";
import { BackgroundColorPickerProps } from "./interfaces";

const BackgroundColorPicker: React.FC<BackgroundColorPickerProps> = ({
  children,
}: BackgroundColorPickerProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    DefaultBackgroundColor.hex
  );
  const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false);

  const toggleColorPickerDialog = () => {
    setIsColorPickerOpen((currentValue: boolean) => {
      return !currentValue;
    });
  };

  const onColorPick = (color: Color) => {
    setBackgroundColor(color.hex);
    setIsColorPickerOpen(false);
  };

  return (
    <BackgroundContainer backgroundColor={backgroundColor}>
      {children}
      <ColorPickerButton onClick={toggleColorPickerDialog}>
        Pick Background Color
      </ColorPickerButton>
      <ColorPickerDialog
        isOpen={isColorPickerOpen}
        handleClose={toggleColorPickerDialog}
        onColorPick={onColorPick}
      />
    </BackgroundContainer>
  );
};

export default BackgroundColorPicker;
