import { Player } from "../../models/player";
import { FETCH_PLAYERS, TOGGLE_PLAYER_FAVORITE } from "./types";

const fetchPlayersSuccess = (players: Player[]) => {
  return {
    type: FETCH_PLAYERS,
    players,
  };
};

const togglePlayerFavorite = (player: Player, isFavorite: boolean) => {
  return {
    type: TOGGLE_PLAYER_FAVORITE,
    player,
    isFavorite,
  };
};

export { fetchPlayersSuccess, togglePlayerFavorite };
