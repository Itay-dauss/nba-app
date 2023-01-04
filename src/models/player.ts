import { Team } from "./team";

export type Player = {
    id: number,
    first_name: string,
    height_feet: number,
    height_inches: number,
    last_name: string,
    position: string,
    team: Team,
    weight_pounds: number
} 