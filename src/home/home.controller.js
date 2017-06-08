export default class HomeController {
    constructor() {
        this.number = 1;
    }

    increment() {
        this.number += 1;
    }

    decrement() {
        if (this.number != 1) {
            this.number -= 1;
        }
        else {
            alert('No zero value for version.')
        }
    }
}