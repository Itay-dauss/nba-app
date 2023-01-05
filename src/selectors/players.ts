import { useSelector } from "react-redux";

// TODO: rename
export const getAllPlayersFetched = () =>
  useSelector((state: any) => state.allPlayers);

export const getFavoritePlayersFetched = () =>
  useSelector((state: any) => state.favoritePlayers);
