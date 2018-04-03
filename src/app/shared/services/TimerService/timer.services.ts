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
        if (this.leftTime == "" && this.timer == "Off") {
            this.numbers = 2;
            this.counter = this.numbers;
            const timeInSecond$ = Observable.timer(0, 60000)
                .map(x => this.counter - x)
                .takeWhile(x => x > 0);
            this.countDown = timeInSecond$;
            return this.countDown;
        }
        if (this.leftTime == "") {
            this.timer = localStorage.getItem('screenTimeLimit');
            this.numbers = this.timer.match(/\d+/g).map(Number);
            this.counter = this.numbers;
            const timeInSecond$ = Observable.timer(0, 60000)
                .map(x => this.counter - x)
                .takeWhile(x => x > 0);
            this.countDown = timeInSecond$;
            return this.countDown;
        }
        if (localStorage.getItem('screenTimeLimit') == "Off") {
            localStorage.setItem('timeleft', "");
            this.numbers = 2;
            this.counter = this.numbers;
            const timeInSecond$ = Observable.timer(0, 60000)
                .map(x => this.counter - x)
                .takeWhile(x => x > 0);
            this.countDown = timeInSecond$;
            return this.countDown;

        }
        if (this.leftTime != 1 && this.leftTime == "") {
            this.timer = localStorage.getItem('timeleft');
            this.numbers = this.timer.match(/\d+/g).map(Number);
            this.counter = this.numbers;
            const timeInSecond$ = Observable.timer(0, 60000)
                .map(x => this.counter - x)
                .takeWhile(x => x > 0);
            this.countDown = timeInSecond$;
            return this.countDown;

        } else {
            this.timer = localStorage.getItem('screenTimeLimit');
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

