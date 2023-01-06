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
import Spinner from "./Spinner";
import * as Messages from "../../utils/messages";

const AllPlayersList: React.FC<allPlayersProps> = ({
  allPlayersFetched,
  togglePlayerFavorite,
  storePlayersFetched,
}: allPlayersProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const prevSearchValueRef = useRef("");
  const isFetchRequestExecuted = useRef(false);

  // Effects firing twice in <React.StrictMode /> was added in React 18.
  // isFetchRequestExecuted is for fetch data once.
  useEffect(() => {
    if (isFetchRequestExecuted.current) return;

    isFetchRequestExecuted.current = true;

    getAllPlayers().then((allPlayersRes: Player[]) => {
      storePlayersFetched(allPlayersRes);
      setIsLoading(false);
    });
  }, [storePlayersFetched]);

  useEffect(() => {
    // Avoid fetching data on first render
    if (searchValue === "" && prevSearchValueRef.current.length === 0) return;
    setIsLoading(true);

    getPlayersBySearch(searchValue).then((filteredPlayersRes: Player[]) => {
      storePlayersFetched(filteredPlayersRes);
      setIsLoading(false);
    });

    prevSearchValueRef.current = searchValue;
  }, [searchValue, storePlayersFetched]);

  const onInputChange = (event: any): void => {
    setSearchValue(event.target.value);
  };

  return (
    <ListContainer>
      <ListTitle>{Messages.ALL_PLAYERS_TITLE}</ListTitle>
      <SearchPlayer
        value={searchValue}
        placeholder={Messages.SEARCH_PLAYER_PLACEHOLDER}
        onChange={onInputChange}
      />
      {isLoading ? (
        <Spinner isVisible={isLoading} />
      ) : (
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
      )}
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
