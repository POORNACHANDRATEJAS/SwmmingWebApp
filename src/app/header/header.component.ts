import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
	dolImg = 'https://d1nmxxg9d5tdo.cloudfront.net/87/logos/original/LFDolphinsLogo_2014.png?1520635875';

	constructor() { }

	ngOnInit() {
	}

}
