import { PositionPlayer } from "../shared/enums/court-position";


export class Player {
     name!: string;
    lastName!: string;
    currentClub!: string;
    countryClub!: string;
    age!: number;
    tShirtNumber!: number;
    photo!: string;
    position!: PositionPlayer;
    isInside!: boolean;
    yellowCard!: number;

    get fullName(): string {
        return `${this.name} ${this.lastName}`
    }

    get fullCurrentClub(): string {
        return `${this.currentClub} (${this.countryClub})`;
    }
}