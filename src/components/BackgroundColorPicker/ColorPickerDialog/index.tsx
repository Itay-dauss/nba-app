import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { ColorPickerDialogProps } from "./interfaces";

const ColorPickerDialog: React.FC<ColorPickerDialogProps> = ({
  isOpen,
  handleClose,
  colorPickers,
}: ColorPickerDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Pick Background Color</DialogTitle>
      <DialogContent>{colorPickers}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ColorPickerDialog;
