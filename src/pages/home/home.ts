import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  appName: string = "HyperLullaby";

  time: Date = new Date();
  currentHour: Number = this.time.getHours();

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  ngOnInit(): void {  }

}
