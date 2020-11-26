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


cards(){
    let stats;
    switch (stats) {
      case 0:
          console.log("YelllowCard");
          break;
      case 1:
          console.log("RedCard");
          break;
      case 2:
          console.log("offSet");
          break;
          default:
        console.log("no card");
        break;
}
  
  }

}
