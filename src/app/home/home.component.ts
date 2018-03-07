import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('menuAnime', [
      state('close', style({transform: 'translateX(600px)',})),
  
      transition('close => open', animate('0.5s 50ms ease-in', keyframes([
        style({opacity: 1, transform: 'translateX(600px)', offset: 0}),
        style({opacity: 1, transform: 'translateX(300px)', offset: 0.5}),
        style({opacity: 1, transform: 'translateX(0)',  offset: 1.0})
      ]))),

      transition('open => close', animate('0.5s 50ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0)', offset: 0}),
        style({opacity: 1, transform: 'translateX(300px)', offset: 0.5}),
        style({opacity: 1, transform: 'translateX(600px)',  offset: 1.0})
      ]))),

    ]),
  ]
})
export class HomeComponent implements OnInit {

  state: string = 'close';
  constructor() { }

  animateMe() {
    this.state = (this.state === 'close' ? 'open' : 'close');
  }

  ngOnInit() {
  }

}
