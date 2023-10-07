import { PositionPlayer } from "../shared/enums/position-player";

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