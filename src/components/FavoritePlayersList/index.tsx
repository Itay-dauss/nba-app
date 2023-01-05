import PlayerCard from "../PlayerCard";
import BackgroundColorPicker from "../BackgroundColorPicker";
import { ListContainer, ListTitle, PlayersList } from "./styles";
import { Player } from "../../models/player";
import { connect } from "react-redux";
import { favoritePlayersProps } from "./interfaces";
import { togglePlayerFavorite } from "../../actions/players";

const FavoritePlayersList: React.FC<favoritePlayersProps> = ({
  togglePlayerFavorite,
  favoritePlayersFetched,
}: favoritePlayersProps) => {
  return (
    <ListContainer>
      <BackgroundColorPicker>
        <ListTitle>Favorite Players</ListTitle>
        <PlayersList>
          {favoritePlayersFetched.map((player: Player) => (
            <PlayerCard
              key={player.id}
              player={player}
              isFavorite={true}
              togglePlayerFavorite={() => togglePlayerFavorite(player, false)}
            ></PlayerCard>
          ))}
        </PlayersList>
      </BackgroundColorPicker>
    </ListContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    togglePlayerFavorite: (player: Player, shouldBeFavorite: boolean) =>
      dispatch(togglePlayerFavorite(player, shouldBeFavorite)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    favoritePlayersFetched: state.playersReducer.favoritePlayers,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritePlayersList);
