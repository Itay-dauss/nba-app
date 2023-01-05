import { CardContainer, CardTitle, SwapFavoriteButton } from "./styles";
import { PlayerCardProps } from "./interfaces";

const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  isFavorite,
  togglePlayerFavorite,
}: PlayerCardProps) => {
  return (
    <CardContainer>
      <CardTitle>{`${player.first_name} ${player.last_name}`}</CardTitle>
      {isFavorite ? (
        <SwapFavoriteButton
          buttonText={"Remove From Favorite"}
          onClick={() => togglePlayerFavorite(player, false)}
          isFavorite={isFavorite}
        />
      ) : (
        <SwapFavoriteButton
          buttonText={"Move To Favorite"}
          onClick={() => togglePlayerFavorite(player, true)}
          isFavorite={isFavorite}
        />
      )}
    </CardContainer>
  );
};

export default PlayerCard;
