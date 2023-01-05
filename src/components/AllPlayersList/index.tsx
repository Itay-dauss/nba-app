import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PlayerCard from "../PlayerCard";
import { ListContainer, SearchPlayer, ListTitle, PlayersList } from "./styles";
import { Player } from "../../models/player";
import { getAllPlayers, getPlayersBySearch } from "../../utils/api";
import {
  fetchPlayersSuccess,
  togglePlayerFavorite,
} from "../../actions/players";
import { getAllPlayersFetched } from "../../selectors/players";
import { allPlayersProps } from "./interfaces";

const AllPlayersList: React.FC<allPlayersProps> = ({
  allPlayersFetched,
  togglePlayerFavorite,
  storePlayersFetched,
}: allPlayersProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    getAllPlayers().then((allPlayersRes: Player[]) => {
      storePlayersFetched(allPlayersRes);
    });
  }, []);

  useEffect(() => {
    if (searchValue === "") return;

    getPlayersBySearch(searchValue).then((filteredPlayersRes: Player[]) => {
      storePlayersFetched(filteredPlayersRes);
    });
  }, [searchValue]);

  const onInputChange = (event: any): void => {
    setSearchValue(event.target.value);
  };

  return (
    <ListContainer>
      <ListTitle>NBA Players</ListTitle>
      <SearchPlayer
        value={searchValue}
        placeholder="Search for a player..."
        onChange={onInputChange}
      />
      <PlayersList>
        {allPlayersFetched.map((player: Player) => (
          <PlayerCard
            key={player.id}
            player={player}
            isFavorite={false}
            togglePlayerFavorite={() => togglePlayerFavorite(player, false)}
          ></PlayerCard>
        ))}
      </PlayersList>
    </ListContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    storePlayersFetched: dispatch((playersFetched: Player[]) =>
      fetchPlayersSuccess(playersFetched)
    ),
    togglePlayerFavorite: dispatch((player: Player, isFavorite: boolean) =>
      togglePlayerFavorite(player, isFavorite)
    ),
  };
};

const mapStateToProps = (state: any) => {
  return {
    allPlayersFetched: getAllPlayersFetched(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPlayersList);
