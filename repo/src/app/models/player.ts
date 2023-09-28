import { CourtPosition } from "../shared/enums/court-position";

export class Player {
    fullName!: string;
    isInside!: boolean;
    tshirtNumber!: number;
    currentClub!: string;
    position!: CourtPosition;

    constructor(player: any) {
        this.fullName = player.fullName;
        this.isInside = player.isInside;
        this.tshirtNumber = player.tshirtNumber;
        this.currentClub = player.currentClub;
        this.position = player.position;
    }
}