export interface FootballPlayer {
    run:() => void;
    passTo:(playerId: number) => boolean;
    hitBall: () => void;
}