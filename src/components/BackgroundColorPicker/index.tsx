import { useState } from "react";
import { BackgroundContainer, ColorPickerButton } from "./styles";
import ColorPickerDialog from "../ColorPickerDialog";

const BackgroundColorPicker = (props: { children: any }) => {
  const { children } = props;

  const [backgroundColor, setBackgroundColor] = useState<string>("#cc2b31");
  const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false);

  const toggleColorPickerWindow = () => {
    setIsColorPickerOpen((currentValue) => {
      return !currentValue;
    });
  };

  const onColorPick = (colorHex: string) => {
    setBackgroundColor(colorHex);
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
