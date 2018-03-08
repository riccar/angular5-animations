import { Component, OnInit } from '@angular/core';
// import fade in animation
import { routerTransitionRight } from '../animations/routerTransitionRight';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  // make fade in animation available to this component
  animations: [routerTransitionRight],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@routerTransitionRight]': '' }
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
