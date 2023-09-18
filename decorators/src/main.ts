import { FootballPlayer } from "footbal-player.interface";
import { Player } from "./decorators/player";

@Player
class Person {
   public name: string;
   public lastName: string;

    constructor(
        name: string,
        lastName: string
    ) {
        this.name = name;
        this.lastName = lastName;
    }   
}


const person = new Person("Lionel","Messi");
const player = (person as any) as FootballPlayer;

player.run();
player.hitBall();



