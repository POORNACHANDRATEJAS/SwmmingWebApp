import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html', 
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	mobImg = 'https://img.clipartxtras.com/fc95832a8da913bf22ffc618f98a9c32_telephone-clipart-white-png-pencil-and-in-color-telephone-phone-clipart-white-png_300-300.png';
	emailImg = 'http://buyshipkingdom.com/image/white%20email.png';
	addImg = 'http://www.islandrvpark.ca/wp-content/uploads/2017/10/location_icon.png';
	faceImg = 'https://www.uspca.com/wp-content/uploads/facebook-logo-png-white-i6.png';
	tweetImg = 'https://directsoftwareoutlet.com/wp-content/uploads/2016/04/twitterLogo-white.png';
	gooImg = 'https://www.hamiltongrp-ohio.com/wp-content/uploads/2017/08/googleplus_white.png';
	youImg = 'http://www.bachiosaurus.com/wp-content/uploads/2017/02/youtube1.gif';

	footerlogo='assets/Learn-to-Swim.png';


	constructor() { }

	ngOnInit() {
	}

}
