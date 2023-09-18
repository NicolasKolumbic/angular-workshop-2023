import { PositionPlayer } from "../shared/position-player.enum";

export interface PlayerDto {
    name: string;
    lastName: string;
    currentClub: string;
    countryClub: string;
    age: number;
    tShirtNumber: number;
    photo: string;
    position: PositionPlayer;
    isInside: boolean;
    yellowCard: number;
}