import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";


@Injectable()
export class TimerService {
    countDown;
    counter: any;
    numbers: any;
    timer: any = localStorage.getItem('screenTimeLimit');
    off: string = "Off";
    leftTime: any = localStorage.getItem('timeleft');
    public constructor() {
    }
    getCountdownTimer() {
        if (this.leftTime == "" ) {
            this.numbers = this.timer.match(/\d+/g).map(Number);
            this.counter = this.numbers;
            const timeInSecond$ = Observable.timer(0, 60000)
                .map(x => this.counter - x)
                .takeWhile(x => x > 0);
            this.countDown = timeInSecond$;
            return this.countDown;
        }
        if (localStorage.getItem('screenTimeLimit') == "Off") {
            this.numbers = 1;
            this.counter = this.numbers;
            const timeInSecond$ = Observable.timer(0, 60000)
                .map(x => this.counter - x)
                .takeWhile(x => x > 0);
            this.countDown = timeInSecond$;
            return this.countDown;

        }
        if (this.leftTime != 1) {
            console.log("test");
            this.timer = localStorage.getItem('timeleft');
            this.numbers = this.timer.match(/\d+/g).map(Number);
            this.counter = this.numbers;
            const timeInSecond$ = Observable.timer(0, 60000)
                .map(x => this.counter - x)
                .takeWhile(x => x > 0);
            this.countDown = timeInSecond$;
            return this.countDown;

        } else {
            this.numbers = this.timer.match(/\d+/g).map(Number);
            this.counter = this.numbers;
            const timeInSecond$ = Observable.timer(0, 60000)
                .map(x => this.counter - x)
                .takeWhile(x => x > 0);
            this.countDown = timeInSecond$;
            return this.countDown;
        }


    }

}

