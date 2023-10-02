import { PositionPlayer } from "../shared/enums/position-player";
import { Player } from "./player";

export class PlayersPosition {

    activePlayers: Player[] = [];
    position: PositionPlayer;

    get players() {
        return this.activePlayers.filter((player: Player) => player.position === this.position)
    }

    constructor(players: Player[], position: PositionPlayer) {
        this.activePlayers = players;
        this.position = position;
    }
}