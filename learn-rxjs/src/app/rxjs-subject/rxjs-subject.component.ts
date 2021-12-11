import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-subject',
  templateUrl: './rxjs-subject.component.html',
  styleUrls: ['./rxjs-subject.component.scss']
})
export class RxjsSubjectComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onSubject(): void {
    const subject = new Subject<number>();
    subject.next(1);
    subject.subscribe(x => {
      console.log("Subscriber :", x);
    })
    subject.next(2);
    subject.next(3);
  }

  onBehaviorSubject(): void {
    const subject = new BehaviorSubject(123);
    subject.next(1233)
    subject.subscribe(console.log)
    subject.subscribe(console.log)
    subject.next(456)
    subject.next(4567)
    subject.subscribe(console.log)
    subject.next(789)
  }

  onReplaySubject(): void {
    const subject = new ReplaySubject(1)
    subject.next(1);
    subject.next(2);
    subject.subscribe(console.log)
    subject.next(3);
    subject.next(4);
    subject.subscribe(console.log)
    subject.next(5);
  }

  onAsyncSubject(): void {
    const subject = new AsyncSubject();
    subject.next(1);
    subject.subscribe(x => {
      console.log('Subscriber A: ', x);
    });

    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.next(5);
    subject.next(6);

    subject.subscribe(x => {
      console.log('Subscriber B: ', x);
    });

    subject.next(7);
    subject.complete();
  }
}
