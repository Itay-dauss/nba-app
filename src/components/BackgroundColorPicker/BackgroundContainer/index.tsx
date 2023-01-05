import { BackgroundProps } from "./interfaces";
import { BasicBackground } from "./styles";

const BackgroundContainer: React.FC<BackgroundProps> = ({
  backgroundColor,
  children,
}: BackgroundProps) => {
  return (
    <BasicBackground
      backgroundColor={backgroundColor}
      children={children}
    ></BasicBackground>
  );
};

export default BackgroundContainer;
