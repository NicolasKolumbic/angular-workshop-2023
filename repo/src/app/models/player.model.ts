import { PlayerDto } from "../dtos/player.dto";
import { PositionPlayer } from "../shared/enums/position-player";

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
    constructor(playerDto: PlayerDto) {
        this.name = playerDto.name;
        this.lastName = playerDto.lastName;
        this.age = playerDto.age;
        this.countryClub = playerDto.countryClub;
        this.currentClub = playerDto.currentClub;
        this.isInside = playerDto.isInside;
        this.photo = playerDto.photo;
        this.position = playerDto.position;
        this.tShirtNumber = playerDto.tShirtNumber;
        this.yellowCard = playerDto.yellowCard;
    }

    moveToBench() {
        this.isInside = false;
    }

    moveToStadium() {
        this.isInside = true;
    }
}