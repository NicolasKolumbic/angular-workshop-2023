export class Player {
    name: string;
    lastName: string;

    get fullName() {
        return `${this.name} ${this.lastName}`;
    }

    run() {
        console.log("the player is running");
    }

    passTo(fullName: string) {
        console.log(`pass to ${fullName}`);
    }
}