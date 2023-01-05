import { useState, useEffect } from "react";
import PlayerCard from "../PlayerCard";
import BackgroundColorPicker from "../BackgroundColorPicker";
import { ListContainer, ListTitle, PlayersList } from "./styles";
import { Player } from "../../models/player";

const FavoritePlayersList = () => {
  const [favoritePlayers, setFavoritePlayers] = useState<Player[]>([]);

  const togglePlayerFavorite = (player: Player, isFavorite: boolean) => {};
  // const addPlayerToFavorite = (newPlayer: Player): void => {
  //   const playerIndex = favoritePlayers.indexOf(newPlayer);
  //   if (playerIndex === -1) {
  //     setFavoritePlayers((currentFavoritePlayers) => {
  //       return [...currentFavoritePlayers, newPlayer];
  //     });
  //   }
  // };

  // const removePlayerFromFavorite = (playerToRemove: Player): void => {
  //   const playerIndex = favoritePlayers.indexOf(playerToRemove);
  //   if (playerIndex >= 0) {
  //     setFavoritePlayers((currentFavoritePlayers) => {
  //       return currentFavoritePlayers.filter(
  //         (player) => player.id !== playerToRemove.id
  //       );
  //     });
  //   }
  // };

  return (
    <ListContainer>
      <BackgroundColorPicker>
        <ListTitle>Favorite Players</ListTitle>
        <PlayersList>
          {favoritePlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              isFavorite={true}
              togglePlayerFavorite={togglePlayerFavorite}
            ></PlayerCard>
          ))}
        </PlayersList>
      </BackgroundColorPicker>
    </ListContainer>
  );
};

export default FavoritePlayersList;
