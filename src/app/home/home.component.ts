import { Component, OnInit } from '@angular/core';
import {Swim} from '../swim';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    img = '../assets/swim.gif';
  constructor() { }

  ngOnInit() {
  }

}
