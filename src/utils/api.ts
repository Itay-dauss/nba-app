import axios from "axios";
import config from "../config.json";
import { Player } from "../models/player";

const balldontlieConfig = config.api.balldontlie;

export const getAllPlayers = async (): Promise<Player[]> => {
  const { data: allPlayers } = await axios.get(
    balldontlieConfig.baseUrl + balldontlieConfig.routes.getAllPlayers
  );
  return allPlayers.data;
};

export const getPlayersBySearch = async (
  searchValue: string
): Promise<Player[]> => {
  const { data: filteredPlayers } = await axios.get(
    `${
      balldontlieConfig.baseUrl + balldontlieConfig.routes.getAllPlayers
    }?search=${searchValue}`
  );
  return filteredPlayers.data;
};
