import {
  FETCH_PLAYERS,
  TOGGLE_PLAYER_FAVORITE,
} from "../actions/players/types";
import { Player } from "../models/player";

const initialState: any = {
  allPlayers: [],
  favoritePlayers: [],
};

const playersReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PLAYERS:
      return {
        ...state,
        allPlayers: action.players,
      };

    case TOGGLE_PLAYER_FAVORITE:
      return () => {
        const { favoritePlayers } = state;
        const isFavoritePlayer: boolean = isPlayerInFavorite(
          action.player,
          state
        );

        if (action.shouldBeFavorite) {
          if (!isFavoritePlayer) {
            return {
              ...state,
              favoritePlayers: [...favoritePlayers, action.player],
            };
          } else {
            return state;
          }
        } else {
          if (isFavoritePlayer) {
            return {
              ...state,
              favoritePlayers: favoritePlayers.filter(
                (favoritePlayer: Player) =>
                  favoritePlayer.id !== action.player.id
              ),
            };
          } else {
            return state;
          }
        }
      };
    default:
      return state;
  }
};

const isPlayerInFavorite = (player: Player, state: any): boolean => {
  const { favoritePlayers } = state;

  const playerIndex = favoritePlayers.indexOf(player);

  return playerIndex >= 0 ? true : false;
};

export default playersReducer;
