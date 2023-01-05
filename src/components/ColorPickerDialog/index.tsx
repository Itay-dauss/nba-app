import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { ColorPickerContainer, ColorOption } from "./styles";
import { ColorsPallete } from "../../utils/colors";

const ColorPickerDialog = (props: {
  isOpen: boolean;
  handleClose: any;
  onColorPick: any;
}) => {
  const { isOpen, handleClose, onColorPick } = props;

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Pick Background Color</DialogTitle>
      <DialogContent>
        <ColorPickerContainer>
          {ColorsPallete.map((color) => (
            <ColorOption
              key={color.name}
              colorHex={color.hex}
              onClick={() => onColorPick(color)}
            />
          ))}
        </ColorPickerContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ColorPickerDialog;
