import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
count = 0;
counter = 0;
  constructor() {}

  addGoal(){
    this.count = this.count + 1;
  }
  addGoal2(){
    this.counter = this.counter + 1;
  }
  minusGoal(){
    this.count = this.count - 1;
  }

  minusGoal2(){
    this.counter = this.counter - 1;
  }

}
