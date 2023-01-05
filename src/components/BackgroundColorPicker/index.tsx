import { useState } from "react";
import { ColorPickerButton, ColorPickerContainer } from "./styles";
import { BackgroundColorPickerProps } from "./interfaces";
import ColorPickerOption from "./ColorPickerOption";
import ColorPickerDialog from "./ColorPickerDialog";
import BackgroundContainer from "./BackgroundContainer";
import { Color } from "../../models/color";
import { ColorsPallete, DefaultBackgroundColor } from "../../utils/colors";
import * as Messages from "../../utils/messages";

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

  const getColorPickers = () => {
    return (
      <ColorPickerContainer>
        {ColorsPallete.map((color) => (
          <ColorPickerOption
            key={color.name}
            colorHex={color.hex}
            onClick={() => onColorPick(color)}
          />
        ))}
      </ColorPickerContainer>
    );
  };

  return (
    <BackgroundContainer backgroundColor={backgroundColor}>
      {children}
      <ColorPickerButton onClick={toggleColorPickerDialog}>
        {Messages.PICK_BACKGROUND_COLOR}
      </ColorPickerButton>
      <ColorPickerDialog
        isOpen={isColorPickerOpen}
        handleClose={toggleColorPickerDialog}
        colorPickers={getColorPickers()}
      />
    </BackgroundContainer>
  );
};

export default BackgroundColorPicker;
