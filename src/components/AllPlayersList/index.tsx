import { useState, useEffect } from "react";
import PlayerCard from "../PlayerCard";
import { ListContainer, SearchPlayer, ListTitle, PlayersList } from "./styles";
import { Player } from "../../models/player";
import { getAllPlayers, getPlayersBySearch } from "../../utils/api";

const AllPlayersList = () => {
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    getAllPlayers().then((allPlayersRes: Player[]) => {
      setAllPlayers(allPlayersRes);
    });
  }, []);

  useEffect(() => {
    if (searchValue === "") return;

    getPlayersBySearch(searchValue).then((filteredPlayersRes: Player[]) => {
      setAllPlayers(filteredPlayersRes);
    });
  }, [searchValue]);

  const onInputChange = (event: any): void => {
    setSearchValue(event.target.value);
  };

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
      <ListTitle>NBA Players</ListTitle>
      <SearchPlayer
        value={searchValue}
        placeholder="Search for a player..."
        onChange={onInputChange}
      />
      <PlayersList>
        {allPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            isFavorite={false}
            togglePlayerFavorite={togglePlayerFavorite}
          ></PlayerCard>
        ))}
      </PlayersList>
    </ListContainer>
  );
};

export default AllPlayersList;
