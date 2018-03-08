import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";


@Injectable()
export class TimerService {
    countDown;
    counter: any;
    numbers: any;
    timer: any;
    off: string = "Off";
    public constructor() {
    }
    getCountdownTimer() {
        this.timer = localStorage.getItem('screenTimeLimit');
        if (this.timer == this.off) {
            this.timer == 0;
            this.numbers = this.timer.match(/\d+/g).map(Number);
            this.counter = this.numbers * 60;
            const timeInSecond$ = Observable.timer(0, 1000)
                .map(x => this.counter - x)
                .takeWhile(x => x > 0);
            this.countDown = timeInSecond$;
            return this.countDown;
        }
        this.numbers = this.timer.match(/\d+/g).map(Number);
        this.counter = this.numbers;
        const timeInSecond$ = Observable.timer(0, 60000)
            .map(x => this.counter - x)
            .takeWhile(x => x > 0);
        this.countDown = timeInSecond$;
        return this.countDown;
    }
  
}

