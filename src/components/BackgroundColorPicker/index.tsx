import { useState } from "react";
import { BackgroundContainer, ColorPickerButton } from "./styles";
import ColorPickerDialog from "../ColorPickerDialog";
import { DefaultBackgroundColor } from "../../utils/colors";
import { Color } from "../../models/color";

const BackgroundColorPicker = (props: { children: any }) => {
  const { children } = props;

  const [backgroundColor, setBackgroundColor] = useState<string>(
    DefaultBackgroundColor.hex
  );
  const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false);

  const toggleColorPickerWindow = () => {
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
      <ColorPickerButton onClick={toggleColorPickerWindow}>
        Pick Background Color
      </ColorPickerButton>
      <ColorPickerDialog
        isOpen={isColorPickerOpen}
        handleClose={toggleColorPickerWindow}
        onColorPick={onColorPick}
      />
    </BackgroundContainer>
  );
};

export default BackgroundColorPicker;
