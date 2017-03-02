/**
 * Weekend
 * @constructor
 * @description []
 */

export class Weekend {
    day: number;

    constructor (day: number = 0) {
        this.day = day;
    }

    progress (): boolean {
        let weekend = false;

        if (this.day == 5 /* Saturday */) {
            weekend = true;
            ++this.day;
        } else if (this.day == 6 /* Sunday */) {
            weekend = true;
            this.day = 0; // it's a new week!
        } else {
            ++this.day;
        }

        return weekend;
    }
}