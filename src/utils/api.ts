import axios from "axios";
import config from "../config.json";
import { Player } from "../models/player";

export const getAllPlayers = async (): Promise<Player[]> => {
  const allPlayersRes = await axios.get(config.api.getAllPlayers);
  return allPlayersRes.data.data;
};

export const getPlayersBySearch = async (
  searchValue: string
): Promise<Player[]> => {
  const allPlayersRes = await axios.get(
    `${config.api.getAllPlayers}?search=${searchValue}`
  );
  return allPlayersRes.data.data;
};
