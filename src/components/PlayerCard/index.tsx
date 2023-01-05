import { CardContainer, CardTitle } from "./styles";
import { PlayerCardProps } from "./interfaces";
import { SwapFavoriteButton } from "./SwapFavoriteButton";
import * as Messages from "../../utils/messages";

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
          buttonText={Messages.REMOVE_PLAYER_FROM_FAVORITE}
          onClick={() => togglePlayerFavorite(player, false)}
          isFavorite={isFavorite}
        />
      ) : (
        <SwapFavoriteButton
          buttonText={Messages.ADD_PLAYER_TO_FAVORITE}
          onClick={() => togglePlayerFavorite(player, true)}
          isFavorite={isFavorite}
        />
      )}
    </CardContainer>
  );
};

export default PlayerCard;
