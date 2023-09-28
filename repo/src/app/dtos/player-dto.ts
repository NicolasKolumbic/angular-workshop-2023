import { CourtPosition } from "../shared/enums/court-position";

export interface PlayerDto {
    name: string;
    lastName: string;
    currentClub: string;
    countryClub: string;
    age: number;
    tShirtNumber: number;
    photo: string;
    position: CourtPosition;
    isInside: boolean;
    yellowCard: number;
}