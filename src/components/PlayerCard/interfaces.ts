import { Player } from "../../models/player";

export interface PlayerCardProps {
  player: Player;
  isFavorite: boolean;
  togglePlayerFavorite: any;
}
