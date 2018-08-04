import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
	dolImg = 'http://dolphinaquatics.in/images/dolphin-aquatic-logo.png';

	constructor() { }

	ngOnInit() {
	}

}
