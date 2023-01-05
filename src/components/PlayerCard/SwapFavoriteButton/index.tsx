import { ButtonProps } from "./interfaces";
import { BasicButton } from "./styles";

export const SwapFavoriteButton: React.FC<ButtonProps> = ({
  buttonText,
  onClick,
  isFavorite,
}: ButtonProps) => {
  return (
    <BasicButton
      onClick={onClick}
      isFavorite={isFavorite}
      buttonText={buttonText}
    >
      {buttonText}
    </BasicButton>
  );
};
