import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  borImg = 'http://dolphinaquatics.in/images/dolphin_startingblock.jpeg';
  unimg = 'assets/poorna.jpg';
  sir = 'assets/ankan.jpg';
  constructor() { }

  ngOnInit() {
  }

}
