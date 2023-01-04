import { Player } from "../../models/player";
import { CardContainer, CardTitle, SwapFavoriteButton } from "./styles";

const PlayerCard = (props: { player: Player; addPlayerToFavorite?: any; removePlayerFromFavorite?: any }) => {
    const { player, addPlayerToFavorite, removePlayerFromFavorite } = props;
    const isFavorite: boolean = removePlayerFromFavorite !== undefined;

    return (    
        <CardContainer>
            <CardTitle>{`${player.first_name} ${player.last_name}`}</CardTitle>
            {isFavorite ? 
                <SwapFavoriteButton buttonText={"Remove From Favorite"} onClick={removePlayerFromFavorite} isFavorite={isFavorite} /> :
                <SwapFavoriteButton buttonText={"Move To Favorite"} onClick={addPlayerToFavorite} isFavorite={isFavorite} />
            }
        </CardContainer>
    )
}

export default PlayerCard;