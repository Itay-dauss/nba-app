import { Player } from "../../models/player";
import { CardContainer, CardTitle, SwapFavoriteButton } from "./styles";

const PlayerCard = (props: {
  player: Player;
  isFavorite: boolean;
  togglePlayerFavorite: any;
}) => {
  const { player, isFavorite, togglePlayerFavorite } = props;

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
