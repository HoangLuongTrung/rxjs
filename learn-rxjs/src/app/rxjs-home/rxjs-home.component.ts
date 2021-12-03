import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.scss']
})
export class RxjsHomeComponent implements OnInit {
  listItems: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.listItems = [
      {
        name: 'Subjects',
        link: '/rxjs-subject'
      },
      {
        name: 'Mergin Observables',
        link: '#'
      },
      {
        name: 'Memory Leaks',
        link: '#'
      },
      {
        name: 'Mergin Observables',
        link: '#'
      },
      {
        name: 'RxJS features',
        link: '#'
      },
      {
        name: 'RxJS uses Pattern',
        link: '#'
      },
      {
        name: 'Observables into Array',
        link: '#'
      }
    ]
  }
  
  onNavigate(url: string): void {
    this.router.navigateByUrl(url);
  }
}
