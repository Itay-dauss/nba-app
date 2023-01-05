import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import PlayerCard from "../PlayerCard";
import { ListContainer, SearchPlayer, ListTitle, PlayersList } from "./styles";
import { Player } from "../../models/player";
import { getAllPlayers, getPlayersBySearch } from "../../utils/api";
import {
  fetchPlayersSuccess,
  togglePlayerFavorite,
} from "../../actions/players";
import { allPlayersProps } from "./interfaces";

const AllPlayersList: React.FC<allPlayersProps> = ({
  allPlayersFetched,
  togglePlayerFavorite,
  storePlayersFetched,
}: allPlayersProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const prevSearchValueRef = useRef("");

  useEffect(() => {
    getAllPlayers().then((allPlayersRes: Player[]) => {
      storePlayersFetched(allPlayersRes);
    });
  }, [storePlayersFetched]);

  useEffect(() => {
    // Avoid fetching data on first render
    if (searchValue === "" && prevSearchValueRef.current.length === 0) return;

    getPlayersBySearch(searchValue).then((filteredPlayersRes: Player[]) => {
      storePlayersFetched(filteredPlayersRes);
    });

    prevSearchValueRef.current = searchValue;
  }, [searchValue, storePlayersFetched]);

  const onInputChange = (event: any): void => {
    setSearchValue(event.target.value);
  };

  console.log(allPlayersFetched);
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
            togglePlayerFavorite={() => togglePlayerFavorite(player, true)}
          ></PlayerCard>
        ))}
      </PlayersList>
    </ListContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    storePlayersFetched: (playersFetched: Player[]) =>
      dispatch(fetchPlayersSuccess(playersFetched)),
    togglePlayerFavorite: (player: Player, shouldBeFavorite: boolean) =>
      dispatch(togglePlayerFavorite(player, shouldBeFavorite)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    allPlayersFetched: state.playersReducer.allPlayers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPlayersList);
