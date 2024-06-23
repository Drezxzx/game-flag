export default class Game {
    static lostLife(life: number, setLife: (life: number) => void, endGame: () => void) {
        life -= 1;
        setLife(life);
        this.checkIfTheGameIsOver({ life });
        localStorage.setItem("life", life.toString());
    }

    static checkIfTheGameIsOver({ life }: { life?: number }): boolean {
        const lifeInStorage = Number(localStorage.getItem("life"));
        if (life === 0 || lifeInStorage === 0) {
            return true;
        }
        return false;
    }
    

    static endGame(endGame: () => void): void {
        localStorage.removeItem("life");
        endGame();
        location.reload();
    }

    static getLife() {
        return Number(localStorage.getItem("life"));
    }
}
