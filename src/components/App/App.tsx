import { useState, useEffect } from "react";
import "./App.css";
import PlayerCard from "../PlayerCard";
import BackgroundColorPicker from "../BackgroundColorPicker";
import {
  Container,
  Logo,
  ListContainer,
  ListsSection,
  SearchPlayer,
  ListTitle,
  PlayersList,
} from "./styles";
import { Player } from "../../models/player";
import { getAllPlayers, getPlayersBySearch } from "../../utils/api";
import NbaLogo from "../../images/NBA-logo.png";

function App() {
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  const [favoritePlayers, setFavoritePlayers] = useState<Player[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    getAllPlayers().then((allPlayersRes: Player[]) => {
      setAllPlayers(allPlayersRes);
    });
  }, []);

  useEffect(() => {
    getPlayersBySearch(searchValue).then((filteredPlayersRes: Player[]) => {
      setAllPlayers(filteredPlayersRes);
    });
  }, [searchValue]);

  const onInputChange = (event: any): void => {
    setSearchValue(event.target.value);
  };

  const addPlayerToFavorite = (newPlayer: Player): void => {
    const playerIndex = favoritePlayers.indexOf(newPlayer);
    if (playerIndex === -1) {
      setFavoritePlayers((currentFavoritePlayers) => {
        return [...currentFavoritePlayers, newPlayer];
      });
    }
  };

  const removePlayerFromFavorite = (playerToRemove: Player): void => {
    const playerIndex = favoritePlayers.indexOf(playerToRemove);
    if (playerIndex >= 0) {
      setFavoritePlayers((currentFavoritePlayers) => {
        return currentFavoritePlayers.filter(
          (player) => player.id !== playerToRemove.id
        );
      });
    }
  };

  return (
    <Container>
      <Logo src={NbaLogo} />
      <ListsSection>
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
                addPlayerToFavorite={() => addPlayerToFavorite(player)}
              ></PlayerCard>
            ))}
          </PlayersList>
        </ListContainer>
        <BackgroundColorPicker>
          <ListTitle>Favorite Players</ListTitle>
          {favoritePlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              removePlayerFromFavorite={() => removePlayerFromFavorite(player)}
            ></PlayerCard>
          ))}
        </BackgroundColorPicker>
      </ListsSection>
    </Container>
  );
}

export default App;
