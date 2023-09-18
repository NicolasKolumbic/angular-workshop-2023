export function Player<T extends { new (...args: any[]): {} }>(constructor: T) {

    return class extends constructor {
        hitBall() {
            console.log("The player hit the ball!")
        }

        run() {
            console.log("The player is running!")
        }

        passTo(idPlayer: number) {
            console.log("The player pass ball to: "+ idPlayer);
            return true;
        }
    };
   
}